import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import styles from './style';
const HeroCard = () => {
  return (
    <View style={styles.mainCardContainer}>
      <View
        style={{
          height: 160,
          width: '100%',
          alignSelf: 'center',
          //   padding: 10,
        }}
      >
        <Image
          source={require('../../assets/images/istockphoto-1158578874-612x612.jpg')}
          style={styles.cartImage}
        />
      </View>
      <View>
        <Text style={styles.TodayVegTiffinText}>Today's Veg Tiffin</Text>
        <Text style={styles.foodMenuText}>
          {'Dal'} • {'2 Roti'} • {'Rise'} • {'Sabji'}
        </Text>
        <View>
          <Text style={styles.priceText}>{'₹120'}</Text>
        </View>
      </View>
    </View>
  );
};

export default HeroCard;
