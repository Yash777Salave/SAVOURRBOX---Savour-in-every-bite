import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

const AppBar = ({ text }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.backIconContainer}
        activeOpacity={0.5}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require('../../assets/icons/left-arrow.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.headingText}>{text}</Text>
      </View>
    </View>
  );
};

export default AppBar;
