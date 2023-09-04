/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { NavContainer } from './src/navigation';
import { store } from './src/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavContainer />
    </Provider>
  );
}

export default App;
