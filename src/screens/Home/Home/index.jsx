import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../Header/Header';
import HeadingText from '../../../components/FeaturesHeading/HeadingText';
import HeroCard from '../../../components/HeroCard/HeroCard';
import { CONSTANTS } from '../../../utils/constants';
import {
  VegMenuItems,
  NonVegMenuItems,
  specialMenuItem,
} from '../../../utils/MenuList';
import { styles } from './style';
const Home = () => {
  const [pressedValue, setPressedValue] = useState('veg');
  return (
    <View style={styles.mainContainer}>
      <View>
        <Header />
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.categoriesMainContainer}>
          <TouchableOpacity
            style={[
              pressedValue === 'veg'
                ? styles.pressedMenu
                : styles.vegButtonContainer,
            ]}
            onPress={() => setPressedValue('veg')}
          >
            <Image
              source={require('../../../assets/images/veg2.png')}
              style={styles.cartImage}
            />
            <Text
              style={[
                pressedValue === 'veg'
                  ? styles.pressedVegButtonText
                  : styles.vegButtonText,
              ]}
            >
              Veg
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              pressedValue === 'Nonveg'
                ? styles.pressedMenu
                : styles.vegButtonContainer,
            ]}
            onPress={() => setPressedValue('Nonveg')}
          >
            <Image
              source={require('../../../assets/images/legPiece.png')}
              style={styles.cartImage}
            />
            <Text
              style={[
                pressedValue === 'Nonveg'
                  ? styles.pressedVegButtonText
                  : styles.vegButtonText,
              ]}
            >
              Non-Veg
            </Text>
          </TouchableOpacity>
        </View>
        <HeadingText heading={'Today’s Tiffin'} />
        <View>
          {pressedValue === 'Nonveg' ? (
            <HeroCard menuItem={NonVegMenuItems} />
          ) : (
            <HeroCard menuItem={VegMenuItems} />
          )}
          <HeadingText heading={"Today's Special"} />
          <HeroCard menuItem={specialMenuItem} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
