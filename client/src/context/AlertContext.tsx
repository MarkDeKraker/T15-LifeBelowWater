import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

interface AlertContextType {
  alerts: { id: string; message: string; type: string }[];
  addAlert: (message: string, type: string) => void;
  removeAlert: (id: string) => void;
}

const AlertContext = React.createContext<AlertContextType | undefined>(
  undefined
);

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [alerts, setAlerts] = useState<
    { id: string; message: string; type: string }[]
  >([]);

  const addAlert = (message: string, type: string) => {
    setAlerts([...alerts, { id: uuidv4(), message, type }]);
  };

  const removeAlert = (id: string) => {
    setAlerts((currentAlerts) =>
      currentAlerts.filter((alert) => alert.id !== id)
    );
  };

  return (
    <AlertContext.Provider
      value={{
        alerts,
        addAlert,
        removeAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = React.useContext(AlertContext);
  if (context === undefined) {
    throw new Error("useAlert must be used within a AlertProvider");
  }
  return context;
};
