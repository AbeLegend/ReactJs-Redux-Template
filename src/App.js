import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CookieContainer from "./components/CookieContainer";
import HooksCookieContainer from './components/HooksCookieContainer';
import PuddingContainer from './components/PuddingContainer';
import NewCookieContainer from './components/NewCookieContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <ItemContainer cookie />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <ItemContainer />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <CookieContainer />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <HooksCookieContainer />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <NewCookieContainer />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <PuddingContainer />
      </div>
    </Provider>
  );
}

export default App;
