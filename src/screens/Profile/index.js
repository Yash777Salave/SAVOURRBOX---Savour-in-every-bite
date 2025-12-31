import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { styles } from './style';
import Header from './Header/index';
const Profile = () => {
  return (
    <View style={styles.mainContainer}>
      <Header />
    </View>
  );
};

export default Profile;
