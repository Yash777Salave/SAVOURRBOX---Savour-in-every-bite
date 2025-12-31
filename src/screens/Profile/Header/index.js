import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { styles } from './style';

const Header = () => {
  return (
    <View style={styles.headingMainContainer}>
      <Text
        style={{ top: 20, borderWidth: 1, textAlign: 'right', marginRight: 20 }}
      >
        yash
      </Text>
      <View style={styles.headingContainer}>
        <Text style={styles.nameText}>Yash Salave</Text>
        <Text style={styles.subText}>+91-7770089444</Text>
        <Text style={styles.subText}>yashsalve999@gmail.com</Text>
      </View>
    </View>
  );
};

export default Header;
