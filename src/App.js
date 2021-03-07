import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CookieContainer from "./components/CookieContainer";
import HooksCookieContainer from './components/HooksCookieContainer';

function App() {
  return (
    <Provider store={store}>
      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <CookieContainer />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <HooksCookieContainer />
      </div>
    </Provider>
  );
}

export default App;
