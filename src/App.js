import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CookieContainer from "./components/CookieContainer";

function App() {
  return (
    <Provider store={store}>
      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <CookieContainer />
      </div>
    </Provider>
  );
}

export default App;
