import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../utils/constants';
export const styles = StyleSheet.create({
  ButtonContainer: {
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 25,
    padding: 8,
    backgroundColor: CONSTANTS.THEME.PRIMARY_COLOR,
  },
  buttonText: {
    fontSize: CONSTANTS.fontSize.fontSize,
    fontWeight: 'semibold',
    textAlign: 'center',
    color: CONSTANTS.colors.APP_BG_COLOR,
  },
});
