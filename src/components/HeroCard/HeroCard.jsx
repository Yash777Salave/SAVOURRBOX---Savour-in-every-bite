import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './style';
import AddOnsCard from '../AddOnsCard/AddOnsCard';
import { CONSTANTS } from '../../utils/constants';
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
      <View
        style={{
          //   borderWidth: 2,
          backgroundColor: CONSTANTS.colors.APP_BG_COLOR,
          //   borderTopRightRadius: 20,
          //   borderTopLeftRadius: 20,
        }}
      >
        <Text style={styles.TodayVegTiffinText}>Today's Veg Tiffin</Text>
        <Text style={styles.foodMenuText}>
          {'Dal'} • {'2 Roti'} • {'Rise'} • {'Sabji'}
        </Text>
        <View style={{ margin: 10 }}>
          <View
            style={{
              borderTopWidth: 0.3,
              borderTopColor: CONSTANTS.colors.GRAY_COLOR,
            }}
          ></View>
          <Text style={styles.priceText}>{'₹120'}</Text>
        </View>
      </View>
      <View style={{ margin: 10 }}>
        <Text style={styles.addOnsHeadingText}>Add-ons</Text>
        <Text style={styles.subHeadingText}>Customize your tiffin</Text>
        <View>
          <AddOnsCard />
        </View>
        <View
          style={{
            borderTopWidth: 0.3,
            borderTopColor: CONSTANTS.colors.GRAY_COLOR,
            marginTop: 10,
          }}
        ></View>
        <View style={styles.totalAndOrderNowContainer}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total : </Text>
            <Text style={styles.TotalPriceText}>{'₹120'}</Text>
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.orderNowText}>Order Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View>
        <AddOnsCard />
      </View> */}
    </View>
  );
};

export default HeroCard;
