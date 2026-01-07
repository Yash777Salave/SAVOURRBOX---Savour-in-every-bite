import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { styles } from './style';
import OptionsCard from '../../../components/OptionsCard/OptionsCard';
import AddressOptionCard from '../../../components/AddressesOptionCard/AddressesOptionCard';
const Options = () => {
  return (
    <View>
      <View style={[styles.optionsContainer, { marginTop: 40 }]}>
        <OptionsCard
          optionName={'Payment Details'}
          icon={require('../../../assets/icons/card.png')}
          isShow={'true'}
        />
        <View style={styles.optionsBorderTop}></View>
        <OptionsCard
          optionName={'Order History'}
          icon={require('../../../assets/icons/history.png')}
          isShow={'true'}
        />
        <View style={styles.optionsBorderTop}></View>

        <OptionsCard
          optionName={'Help & Support'}
          icon={require('../../../assets/icons/question.png')}
          isShow={'true'}
        />
        <View style={styles.optionsBorderTop}></View>

        <OptionsCard
          optionName={'About SavourrBOX'}
          icon={require('../../../assets/icons/info.png')}
          isShow={'true'}
        />
        <View style={styles.optionsBorderTop}></View>
        <OptionsCard
          optionName={'Logout'}
          icon={require('../../../assets/icons/logout.png')}
          isLogoutText={'true'}
        />
      </View>
      <View
        style={[styles.optionsContainer, { bottom: 10, marginBottom: 100 }]}
      >
        <View style={styles.addressEditContainer}>
          <Text style={styles.addressHeading}>Saved Addresses</Text>
          {/* <Image
            source={require('../../../assets/icons/pencil.png')}
            style={styles.editIcon}
          /> */}
        </View>

        <AddressOptionCard
          optionName={'Home'}
          icon={require('../../../assets/icons/home3.png')}
          isShow={'true'}
          subText={'7th floore , infotech society, Dhule'}
        />
        <View style={[styles.optionsBorderTop, { marginTop: 15 }]}></View>
        <AddressOptionCard
          optionName={'Work'}
          icon={require('../../../assets/icons/suitcase.png')}
          isShow={'true'}
          subText={'7th floore , infotech society, Dhule'}
        />
      </View>
    </View>
  );
};

export default Options;
