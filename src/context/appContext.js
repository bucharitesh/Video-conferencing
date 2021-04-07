import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { RoomContextProvider } from "./videoContext";
import shordid from "shortid";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [appState, setAppState] = useState(null);
  const [connecting, setConnecting] = useState(false);
  const [room, setRoom] = useState(null);
  const [roomName, setRoomName] = useState(shordid.generate());
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        setAppState("home");
      } else {
        setCurrentUser(null);
        setAppState("login");
      }
    });
  }, []);

  const value = {
    currentUser,
    appState,
    connecting,
    setConnecting,
    snackbarOpen,
    setSnackbarOpen,
    room,
    setRoom,
    roomName,
    setRoomName
  };

  return (
    <AppContext.Provider value={value}>
      <RoomContextProvider>{children}</RoomContextProvider>
    </AppContext.Provider>
  );
};