import {
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './style';
import Button from '../../../components/Button/Button';
const SignUp = () => {
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
      <View style={styles.fieldsContainer}>
        <View>
          <Text style={styles.fieldName}>Name</Text>
          <TextInput placeholder="Name" style={styles.inputField} />
        </View>
        <View style={styles.passwordInputContainer}>
          <Text style={styles.fieldName}>Email</Text>
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
        <View style={styles.passwordInputContainer}>
          <Text style={styles.fieldName}>Confirm Password</Text>
          <TextInput
            placeholder="Confirm Password"
            style={styles.inputField}
            secureTextEntry
          />
        </View>
        <Button text={'Sign Up'} />
      </View>
    </View>
  );
};

export default SignUp;
