import { createContext, useContext } from 'react';

// Signals when the loader has finished and the app is visible
export const AppReadyContext = createContext(false);
export const useAppReady = () => useContext(AppReadyContext);
