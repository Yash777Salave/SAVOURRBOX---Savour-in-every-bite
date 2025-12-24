import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CONSTANTS } from '../../../utils/constants';

const Header = () => {
  const cartCount = 2;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.locationContainer}>
        <View>
          <Image
            source={require('../../../assets/icons/gps.png')}
            style={styles.bgImage}
          />
        </View>
        <View style={styles.locationTextContainer}>
          <Text style={styles.locationTextMainText}>Boys Hostel, Room 12,</Text>
          <Text style={styles.locationTextMainText}>Pune</Text>
        </View>
      </View>

      <View style={styles.cartContainer}>
        <Image
          source={require('../../../assets/icons/shopping-bag.png')}
          style={styles.cartImage}
        />

        {cartCount > 0 && (
          <View style={styles.cartBadge}>
            <Text style={styles.badgeText}>{cartCount}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 15,
    marginTop: 20,
    // borderWidth: 1,
  },

  bgImage: {
    width: 25,
    height: 25,
  },

  cartContainer: {
    position: 'relative',
    // marginTop: 20,
  },

  cartImage: {
    width: 32,
    height: 32,
    tintColor: 'black',
  },

  cartBadge: {
    position: 'absolute',
    top: -2,
    right: -6,
    backgroundColor: 'red',
    width: 22,
    height: 22,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#fff',
  },

  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  locationTextMainText: {
    color: CONSTANTS.colors.GRAY_COLOR,
    fontWeight: '600',
  },
  locationTextContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // gap: 5,
  },
});
