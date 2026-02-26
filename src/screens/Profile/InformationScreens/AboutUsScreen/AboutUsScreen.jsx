import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppBar from '../../../../components/AppBar/AppBar';
import { styles } from './style';
const AboutUsScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <AppBar text={'About Us'} />
      <View style={styles.subMainContainer}>
        <Image
          source={require('../../../../assets/images/AboutUsPageSticker2.png')}
          style={styles.cookingIcon}
        />
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            SavourrBOX provides fresh, hygienic, and homely tiffin meals
            delivered directly to your doorstep. Our goal is to make everyday
            food convenient, affordable, and nutritious for students and
            professionals living away from home. We prepare every meal with
            quality ingredients and care so you can enjoy the taste of home
            anytime.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AboutUsScreen;
