import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CONSTANTS } from '../../../utils/constants';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const cartCount = 2;
  const notificationCount = 1;
  const navigation = useNavigation();
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
          <Text style={styles.locationTextMainText}>
            Home-Boys Hostel, Room 12,
          </Text>
          <Text style={styles.locationTextMainText}>Pune</Text>
        </View>
      </View>

      <View style={styles.cartContainer}>
        <TouchableOpacity
          style={styles.notificationContainer}
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate('Notification');
          }}
        >
          <Image
            source={require('../../../assets/icons/notification.png')}
            style={styles.notificationImage}
          />

          {notificationCount > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.badgeText}>{notificationCount}</Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={require('../../../assets/icons/shopping-bag.png')}
            style={styles.cartImage}
          />

          {cartCount > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.badgeText}>{cartCount}</Text>
            </View>
          )}
        </TouchableOpacity>
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
    // margin: 15,
    marginTop: 20,
    // borderWidth: 1,
    backgroundColor: CONSTANTS.colors.APP_BG_COLOR,
    // marginBottom: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    margin: 10,
  },

  bgImage: {
    width: 25,
    height: 25,
  },

  cartContainer: {
    position: 'relative',
    // marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  cartImage: {
    width: 30,
    height: 30,
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
  notificationContainer: {},
  notificationImage: {
    width: 30,
    height: 30,
    tintColor: 'black',
  },
});
