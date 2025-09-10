import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ScoreData {
  [key: string]: {
    skorIndikator: string | number;
    bobot: string | number;
    lastUpdated: Date;
  };
}

interface ScoreContextType {
  scoreData: ScoreData;
  updateScore: (key: string, value: string | number) => void;
  updateBobot: (key: string, value: string | number) => void;
  getScore: (key: string) => string | number | null;
  getBobot: (key: string) => string | number | null;
  getScoreWithFormula: (formula: string) => string | number | null;
  getBobotWithFormula: (formula: string) => string | number | null;
  forceUpdate: () => void;
}

const ScoreContext = createContext<ScoreContextType | undefined>(undefined);

export const useScore = () => {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error('useScore must be used within a ScoreProvider');
  }
  return context;
};

interface ScoreProviderProps {
  children: ReactNode;
}

export const ScoreProvider: React.FC<ScoreProviderProps> = ({ children }) => {
  const [scoreData, setScoreData] = useState<ScoreData>({});
  const [updateTrigger, setUpdateTrigger] = useState(0);

  const updateScore = (key: string, value: string | number) => {
    setScoreData(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        skorIndikator: value,
        lastUpdated: new Date()
      }
    }));
    setUpdateTrigger(prev => prev + 1);
  };

  const updateBobot = (key: string, value: string | number) => {
    setScoreData(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        bobot: value,
        lastUpdated: new Date()
      }
    }));
    setUpdateTrigger(prev => prev + 1);
  };

  const forceUpdate = () => {
    setUpdateTrigger(prev => prev + 1);
  };

  const getScore = (key: string): string | number | null => {
    return scoreData[key]?.skorIndikator || null;
  };

  const getBobot = (key: string): string | number | null => {
    return scoreData[key]?.bobot || null;
  };

  // Function to parse Excel-like formulas
  const getScoreWithFormula = (formula: string): string | number | null => {
    if (!formula || !formula.startsWith('=')) {
      return formula;
    }

    // Parse formula like "=Komitmen!SKOR Indikator" 
    if (formula.includes('Komitmen!SKOR Indikator')) {
      // For the first item in Komitmen section (GCG Code)
      const key = 'komitmen_gcg_code';
      return getScore(key);
    }

    // Handle other formula patterns
    if (formula.includes('Capaian FUK & Prm kategori Total bagian')) {
      // Extract the specific part after "bagian"
      const match = formula.match(/bagian (.+?)\./);
      if (match) {
        const description = match[1];
        
        // Map specific descriptions to keys
        if (description.includes('Perusahaan memiliki Pedoman Tata Kelola Perusahaan yang Baik (GCG Code)')) {
          return getScore('komitmen_gcg_code');
        } else if (description.includes('Perusahaan melaksanakan Pedoman Tata Kelola Perusahaan yang Baik dan Pedoman Perilaku secara konsisten')) {
          return getScore('komitmen_pelaksanaan');
        } else if (description.includes('Perusahaan memiliki struktur organisasi yang mendukung penerapan Tata Kelola Perusahaan yang Baik')) {
          return getScore('komitmen_struktur');
        } else if (description.includes('Perusahaan memiliki sistem pengendalian internal yang efektif')) {
          return getScore('komitmen_spi');
        } else if (description.includes('Perusahaan memiliki sistem manajemen risiko yang efektif')) {
          return getScore('komitmen_smr');
        } else if (description.includes('Perusahaan memiliki sistem audit internal yang efektif')) {
          return getScore('komitmen_audit');
        } else if (description.includes('Perusahaan memiliki sistem pelaporan yang efektif')) {
          return getScore('komitmen_pelaporan');
        }
        
        // Fallback to generic key generation
        const key = description.toLowerCase().replace(/\s+/g, '_').replace(/[^\w]/g, '');
        return getScore(key);
      }
    }

    return formula;
  };

  // Function to parse Excel-like formulas for bobot
  const getBobotWithFormula = (formula: string): string | number | null => {
    if (!formula || !formula.startsWith('=')) {
      return formula;
    }

    // Parse formula like "=Komitmen!BOBOT" 
    if (formula.includes('Komitmen!BOBOT')) {
      // For the first item in Komitmen section (GCG Code)
      const key = 'komitmen_gcg_code';
      return getBobot(key);
    }

    // Handle other formula patterns for bobot
    if (formula.includes('Capaian FUK & Prm kategori Total bagian')) {
      // Extract the specific part after "bagian"
      const match = formula.match(/bagian (.+?)\./);
      if (match) {
        const description = match[1];
        
        // Map specific descriptions to keys
        if (description.includes('Perusahaan memiliki Pedoman Tata Kelola Perusahaan yang Baik (GCG Code)')) {
          return getBobot('komitmen_gcg_code');
        } else if (description.includes('Perusahaan melaksanakan Pedoman Tata Kelola Perusahaan yang Baik dan Pedoman Perilaku secara konsisten')) {
          return getBobot('komitmen_pelaksanaan');
        } else if (description.includes('Perusahaan memiliki struktur organisasi yang mendukung penerapan Tata Kelola Perusahaan yang Baik')) {
          return getBobot('komitmen_struktur');
        } else if (description.includes('Perusahaan memiliki sistem pengendalian internal yang efektif')) {
          return getBobot('komitmen_spi');
        } else if (description.includes('Perusahaan memiliki sistem manajemen risiko yang efektif')) {
          return getBobot('komitmen_smr');
        } else if (description.includes('Perusahaan memiliki sistem audit internal yang efektif')) {
          return getBobot('komitmen_audit');
        } else if (description.includes('Perusahaan memiliki sistem pelaporan yang efektif')) {
          return getBobot('komitmen_pelaporan');
        }
        
        // Fallback to generic key generation
        const key = description.toLowerCase().replace(/\s+/g, '_').replace(/[^\w]/g, '');
        return getBobot(key);
      }
    }

    return formula;
  };

  return (
    <ScoreContext.Provider value={{
      scoreData,
      updateScore,
      updateBobot,
      getScore,
      getBobot,
      getScoreWithFormula,
      getBobotWithFormula,
      forceUpdate
    }}>
      {children}
    </ScoreContext.Provider>
  );
};
