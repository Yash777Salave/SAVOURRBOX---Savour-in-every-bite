import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/routes/StackNavigation';
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';
const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <View style={styles.mainContainer}>
          <StackNavigation />
        </View>
      </Provider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
