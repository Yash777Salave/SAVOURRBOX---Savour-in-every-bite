import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import styles from './style';
import AddOnsCard from '../AddOnsCard/AddOnsCard';
import { CONSTANTS } from '../../utils/constants';
const HeroCard = ({ menuItem }) => {
  useEffect(() => {
    console.log('veg items == ', menuItem.fourthFoodName);
  }, [menuItem]);

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
        <Image source={menuItem.image} style={styles.cartImage} />
      </View>
      <View
        style={{
          //   borderWidth: 2,
          backgroundColor: CONSTANTS.colors.APP_BG_COLOR,
          //   borderTopRightRadius: 20,
          //   borderTopLeftRadius: 20,
        }}
      >
        <Text style={styles.TodayVegTiffinText}>{menuItem.tiffinHeadig}</Text>
        <Text style={styles.foodMenuText}>
          {menuItem.firstFoodName} • {menuItem.secondFoodName} •{''}{' '}
          {menuItem.thirdFoodName} • {menuItem.fourthFoodName}
        </Text>
        <View style={{ margin: 10 }}>
          <View
            style={{
              borderTopWidth: 0.3,
              borderTopColor: CONSTANTS.colors.GRAY_COLOR,
            }}
          ></View>
          <Text style={styles.priceText}>{menuItem.price}</Text>
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
          <TouchableOpacity activeOpacity={0.6} style={styles.buttonContainer}>
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
