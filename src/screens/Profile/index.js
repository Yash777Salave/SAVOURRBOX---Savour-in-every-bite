import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { styles } from './style';
import Header from './Header/index';
import Options from '../../screens/Profile/Options/Options';
const Profile = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <Header />
      <Options />
    </ScrollView>
  );
};

export default Profile;
