import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './style';
const Button = ({ text }) => {
  return (
    <TouchableOpacity style={styles.ButtonContainer}>
      <Text style={styles.buttonText}>{text.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export default Button;
