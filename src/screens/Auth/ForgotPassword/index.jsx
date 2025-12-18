import {
  Image,
  Keyboard,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { CONSTANTS } from '../../../utils/constants';
// import Button from '../../../components/Button';
import { styles } from './style';
import Button from '../../../components/Button/Button';
const ForgotPassword = () => {
  //this is for focus on input field
  const [isFocused, setIsFocused] = useState(null);
  const text = 'yesh';
  return (
    <View style={styles.mainContainer}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.bgImageContainer}>
        <Image
          source={require('../../../assets/images/login-graphic.png')}
          style={styles.bgImage}
        />
      </View>
      <View style={styles.fieldsContainer}>
        <View>
          <Text style={styles.fieldName}>Enter your email address</Text>
          <TextInput
            placeholder="Email"
            style={[
              styles.inputField,
              isFocused === 'Email' && styles.inputFocused,
            ]}
            keyboardType="email-address"
            autoCapitalize="none"
            onFocus={() => setIsFocused('Email')}
            onBlur={() => setIsFocused(null)}
          />
        </View>
        <Button text={'Send Code'} />
        <View style={styles.sendEmailContainer}>
          <Text style={styles.sendEmailText}>
            Verification mail has been sent to your{' '}
            {' "yashsalve999@gmail.com" '} ID please check and reset your
            password
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
