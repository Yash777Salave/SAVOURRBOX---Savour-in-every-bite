import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './style';
export const GoogleFacebookAuthScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.iconsContainer}>
        <View style={styles.iconsImageContainer}>
          <Image
            source={require('../../../src/assets/icons/communication.png')}
            style={styles.icons}
          />
        </View>
        <View>
          <Text style={styles.iconsTexts}>Facebook</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconsContainer}>
        <View style={styles.iconsImageContainer}>
          <Image
            source={require('../../../src/assets/icons/google.png')}
            style={styles.icons}
          />
        </View>
        <Text style={styles.iconsTexts}>Google</Text>
      </TouchableOpacity>
    </View>
  );
};
