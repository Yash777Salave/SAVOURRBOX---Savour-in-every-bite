import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

const OptionsCard = ({ optionName, icon, isShow, isLogoutText, onPress }) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.optionContainer} onPress={onPress}>
        <View style={styles.iconOptionContainer}>
          <Image source={icon} style={styles.icon} />
          <Text
            style={isLogoutText ? styles.optionNameLogout : styles.optionName}
          >
            {optionName}
          </Text>
        </View>
        <View>
          {isShow === 'true' && (
            <Image
              source={require('../../assets/icons/right-arrow.png')}
              style={styles.icon}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OptionsCard;
