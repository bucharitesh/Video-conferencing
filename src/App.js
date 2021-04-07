import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';
import { useAppContext } from "./context/appContext";

import Conference from './pages/Conference';
import HomePage from './pages/Home';
import { render } from 'react-dom';
// import NoMatch from './pages/Error';

function App() {
  const { appState, room, roomName } = useAppContext();

  return (
    <ThemeProvider theme={theme}>
      {appState === "login" && <HomePage />}

      {appState === "home" && (
        <main>
          <Conference room={room} roomName={roomName}/>
        </main>
      )}
      <GlobalStyles/>
    </ThemeProvider>
  );
}

export default App;

