import React from 'react';
import {
  View,
  Text,
  useColorScheme,
  SafeAreaView,
  StatusBar,
} from 'react-native';

function LoginScreen(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <Text>Login Screen</Text>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;
