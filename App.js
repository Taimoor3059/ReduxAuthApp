import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen } from './src/screens/LoginScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux';



export default function App() {
  return (
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );
}


