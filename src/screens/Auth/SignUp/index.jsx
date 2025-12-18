import {
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';
import { styles } from './style';
import Button from '../../../components/Button/Button';
import { useRef, useState } from 'react';
const SignUp = () => {
  // for inputfield to change its color when it would be focus
  const [isFocused, setIsFocused] = useState(null);
  // we are using useRef for input field to next auto maticlly when we done on first field
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  return (
    <View style={styles.mainContainer}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.bgImageContainer}>
        <Image
          source={require('../../../assets/images/meal.webp')}
          style={styles.bgImage}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
        style={{ flex: 1 }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.fieldsContainer}>
            <View>
              <Text style={styles.fieldName}>Name</Text>
              <TextInput
                ref={nameRef}
                placeholder="Name"
                style={[
                  styles.inputField,
                  isFocused === 'Name' && styles.inputFocused,
                ]}
                onFocus={() => setIsFocused('Name')}
                onBlur={() => setIsFocused(null)}
                returnKeyType="next"
                onSubmitEditing={() => emailRef.current?.focus()}
              />
            </View>
            <View>
              <Text
                style={[
                  styles.fieldName,
                  isFocused === 'Email' && styles.inputFocused,
                ]}
              >
                Email
              </Text>
              <TextInput
                ref={emailRef}
                placeholder="Email"
                autoCapitalize="none"
                style={[
                  styles.inputField,
                  isFocused === 'Email' && styles.inputFocused,
                ]}
                onFocus={() => setIsFocused('Email')}
                onBlur={() => setIsFocused(null)}
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current?.focus()}
              />
            </View>
            <View>
              <Text style={styles.fieldName}>Password</Text>
              <TextInput
                ref={passwordRef}
                placeholder="Password"
                secureTextEntry
                style={[
                  styles.inputField,
                  isFocused === 'Password' && styles.inputFocused,
                ]}
                onFocus={() => setIsFocused('Password')}
                onBlur={() => setIsFocused(null)}
                returnKeyType="next"
                onSubmitEditing={() => confirmPasswordRef.current?.focus()}
              />
            </View>
            <View>
              <Text style={styles.fieldName}>Confirm Password</Text>
              <TextInput
                ref={confirmPasswordRef}
                placeholder="Confirm Password"
                secureTextEntry
                style={[
                  styles.inputField,
                  isFocused === 'Confirm Password' && styles.inputFocused,
                ]}
                onFocus={() => {
                  setIsFocused('Confirm Password');
                }}
                onBlur={() => setIsFocused(null)}
                returnKeyType="done"
                onSubmitEditing={() => Keyboard.dismiss()}
              />
            </View>
            <Button text={'Sign Up'} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUp;
