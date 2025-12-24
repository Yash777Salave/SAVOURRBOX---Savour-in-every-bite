import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
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
