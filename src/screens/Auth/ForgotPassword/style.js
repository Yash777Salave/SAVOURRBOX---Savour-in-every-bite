import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../../utils/constants';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: CONSTANTS.colors.APP_BG_COLOR,
    alignContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
    resizeMode: 'cover',
    // borderBottomLeftRadius: 40,
    // borderBottomRightRadius: 40,
  },
  bgImageContainer: {
    width: '100%',
    height: '40%',
    backgroundColor: 'blue',
  },
  fieldsContainer: {
    // borderWidth: 1,
    width: '100%',
    backgroundColor: CONSTANTS.colors.APP_BG_COLOR,
    padding: 16,
    borderTopLeftRadius: 30,
    bottom: '5%',
    // marginTop: 10,
    borderTopRightRadius: 30,
  },
  inputField: {
    borderBottomWidth: 0.3,
    borderBottomColor: CONSTANTS.colors.GRAY_COLOR,
    marginBottom: 10,
  },
  fieldName: {
    fontSize: CONSTANTS.fontSize.fontSize22,
    color: CONSTANTS.colors.TEXT_COLOR,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  passwordInputContainer: {
    marginTop: 25,
  },
  buttonContainer: {
    borderWidth: 1,
    marginTop: 30,
  },

  signUpText: {
    fontSize: CONSTANTS.fontSize.fontSize15,
    color: CONSTANTS.THEME.PRIMARY_COLOR,
    fontWeight: 'bold',
  },

  inputFocused: {
    borderBottomColor: CONSTANTS.THEME.PRIMARY_COLOR,
  },
  sendEmailText: {
    color: CONSTANTS.THEME.SECONDARY_COLOR,
    fontSize: CONSTANTS.fontSize.fontSize,
    textAlign: 'center',
    lineHeight: 22,
  },
  sendEmailContainer: {
    // borderWidth: 1,
    padding: 10,
    marginTop: 10,
  },
});
