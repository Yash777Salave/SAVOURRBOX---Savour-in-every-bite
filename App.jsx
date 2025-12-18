import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Login from './src/screens/Auth/Login';
import SignUp from './src/screens/Auth/SignUp';
import ForgotPassword from './src/screens/Auth/ForgotPassword';
const App = () => {
  return (
    <View style={styles.mainContainer}>
      {/* <Login /> */}
      {/* <SignUp /> */}
      <ForgotPassword />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
