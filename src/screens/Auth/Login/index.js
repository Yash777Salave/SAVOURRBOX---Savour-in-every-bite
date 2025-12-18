import {
  Image,
  Keyboard,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { styles } from './style';
import Button from '../../../components/Button/Button';
import { GoogleFacebookAuthScreen } from '../../../components/GoogleFacebookAuthScreen';
const Login = () => {
  //this is for focus on input field
  const [isFocused, setIsFocused] = useState(null);
  // this is useRef for auto focus on next input
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

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
            ref={emailRef}
            placeholder="Email"
            style={[
              styles.inputField,
              isFocused === 'Email' && styles.inputFocused,
            ]}
            keyboardType="email-address"
            autoCapitalize="none"
            onFocus={() => setIsFocused('Email')}
            onBlur={() => setIsFocused(null)}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
          />
        </View>
        <View style={styles.passwordInputContainer}>
          <Text style={styles.fieldName}>Password</Text>
          <TextInput
            ref={passwordRef}
            placeholder="Password"
            style={[
              styles.inputField,
              isFocused === 'Password' && styles.inputFocused,
            ]}
            secureTextEntry
            onFocus={() => setIsFocused('Password')}
            onBlur={() => setIsFocused(null)}
            returnKeyType="done"
            onSubmitEditing={() => Keyboard.dismiss()}
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
