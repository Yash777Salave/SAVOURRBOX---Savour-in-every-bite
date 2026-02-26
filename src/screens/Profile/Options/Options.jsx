import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { styles } from './style';
import OptionsCard from '../../../components/OptionsCard/OptionsCard';
import AddressOptionCard from '../../../components/AddressesOptionCard/AddressesOptionCard';
import { useNavigation } from '@react-navigation/native';
const Options = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    Alert.alert('Logout');
  };
  return (
    <View>
      <View style={[styles.optionsContainer, { marginTop: 40 }]}>
        <OptionsCard
          optionName={'Payment Details'}
          icon={require('../../../assets/icons/card.png')}
          isShow={'true'}
          onPress={() => navigation.navigate('PaymentDetailsScreen')}
        />
        <View style={styles.optionsBorderTop}></View>
        <OptionsCard
          optionName={'Order History'}
          icon={require('../../../assets/icons/history.png')}
          isShow={'true'}
          onPress={() => navigation.navigate('Orders')}
        />
        <View style={styles.optionsBorderTop}></View>

        <OptionsCard
          optionName={'Help & Support'}
          icon={require('../../../assets/icons/question.png')}
          isShow={'true'}
          onPress={() => navigation.navigate('HelpSupport')}
        />
        <View style={styles.optionsBorderTop}></View>

        <OptionsCard
          optionName={'About SavourrBOX'}
          icon={require('../../../assets/icons/info.png')}
          isShow={'true'}
          onPress={() => navigation.navigate('AboutUsScreen')}
        />
        <View style={styles.optionsBorderTop}></View>
        <OptionsCard
          optionName={'Logout'}
          icon={require('../../../assets/icons/logout.png')}
          isLogoutText={'true'}
          onPress={() => handleLogout()}
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
