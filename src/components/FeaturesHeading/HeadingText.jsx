import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import styles from './style';
const HeadingText = ({ heading }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headingText}>{heading}</Text>
    </View>
  );
};

export default HeadingText;
