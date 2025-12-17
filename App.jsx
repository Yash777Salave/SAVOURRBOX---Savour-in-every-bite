import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Login from './src/screens/Auth/Login';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Login />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
