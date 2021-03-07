import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CookieContainer from "./components/CookieContainer";
import HooksCookieContainer from './components/HooksCookieContainer';
import PuddingContainer from './components/PuddingContainer';

function App() {
  return (
    <Provider store={store}>
      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <CookieContainer />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <HooksCookieContainer />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <PuddingContainer />
      </div>
    </Provider>
  );
}

export default App;
