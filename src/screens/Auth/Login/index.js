import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { styles } from './style';
import Button from '../../../components/Button/Button';
const Login = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.bgImageContainer}>
        <Image
          source={require('../../../assets/images/login-graphic.png')}
          style={styles.bgImage}
        />
      </View>
      <View style={styles.fieldsContainer}>
        <View>
          <Text style={styles.fieldName}>Email Address</Text>
          <TextInput placeholder="Email" style={styles.inputField} />
        </View>
        <View style={styles.passwordInputContainer}>
          <Text style={styles.fieldName}>Password</Text>
          <TextInput placeholder="Password" style={styles.inputField} />
        </View>
        <Button text={'Login'} />
        <View style={styles.dontHaveAccountContainer}>
          <View>
            <Text style={styles.dontHaveAccountText}>
              Don't have an account?
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
