import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import LoginScreen from './screens/LoginScreen';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <LoginScreen />
    </NavigationContainer>
  );
}

export default App;
