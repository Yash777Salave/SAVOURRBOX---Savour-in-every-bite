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
  },
  fieldName: {
    fontSize: CONSTANTS.fontSize.fontSize,
    color: CONSTANTS.colors.GRAY_COLOR,
    marginTop: 10,
  },
  passwordInputContainer: {
    marginTop: 25,
  },
  buttonContainer: {
    borderWidth: 1,
    marginTop: 30,
  },
  dontHaveAccountContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    // marginTop: 15,
    alignContent: 'center',
    alignItems: 'center',
  },
  dontHaveAccountText: {
    fontSize: CONSTANTS.fontSize.fontSize15,
    color: CONSTANTS.colors.GRAY_COLOR,
  },
  signUpText: {
    fontSize: CONSTANTS.fontSize.fontSize15,
    color: CONSTANTS.THEME.PRIMARY_COLOR,
    fontWeight: 'bold',
  },
  continueWith: {
    fontSize: CONSTANTS.fontSize.fontSize15,
    color: CONSTANTS.colors.GRAY_COLOR,
  },
  orContinueWithContainer: {
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  inputFocused: {
    borderBottomColor: CONSTANTS.THEME.PRIMARY_COLOR,
  },
});
