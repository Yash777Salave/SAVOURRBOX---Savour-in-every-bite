import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './style';
const OrdersButtons = ({ title1, title2 }) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity activeOpacity={0.6} style={styles.buttonFirst}>
        <Text style={styles.buttonFirstText}>{title1}</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6} style={styles.buttonSecond}>
        <Text style={styles.buttonSecondText}>{title2}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrdersButtons;
