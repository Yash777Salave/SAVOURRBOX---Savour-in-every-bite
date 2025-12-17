import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { styles } from './style';
import Button from '../../../components/Button/Button';
import { GoogleFacebookAuthScreen } from '../../../components/GoogleFacebookAuthScreen';
const Login = () => {
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
          <Text style={styles.fieldName}>Email Address</Text>
          <TextInput
            placeholder="Email"
            style={styles.inputField}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.passwordInputContainer}>
          <Text style={styles.fieldName}>Password</Text>
          <TextInput
            placeholder="Password"
            style={styles.inputField}
            secureTextEntry
          />
        </View>
        <Button text={'Login'} />
        <View style={styles.orContinueWithContainer}>
          <Text style={styles.continueWith}>or continue with</Text>
        </View>
        <GoogleFacebookAuthScreen />
      </View>
      <View style={styles.dontHaveAccountContainer}>
        <View>
          <Text style={styles.dontHaveAccountText}>Don't have an account?</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
