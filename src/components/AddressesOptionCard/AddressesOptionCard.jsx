import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './style';

const AddressesOptionCard = ({ optionName, icon, isShow, subText }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.optionContainer}>
        <View style={styles.iconOptionContainer}>
          <Image source={icon} style={styles.icon} />
          <Text style={styles.optionName}>{optionName}</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/pencil.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.subText}>{subText}</Text>
    </View>
  );
};

export default AddressesOptionCard;

AddressesOptionCard;
