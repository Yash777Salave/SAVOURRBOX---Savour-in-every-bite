import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Login from './src/screens/Auth/Login';
import SignUp from './src/screens/Auth/SignUp';
import ForgotPassword from './src/screens/Auth/ForgotPassword';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/routes/StackNavigation';
const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.mainContainer}>
        <StackNavigation />
      </View>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
