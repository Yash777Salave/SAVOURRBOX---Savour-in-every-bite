import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../utils/constants';

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignSelf: 'center',
    marginTop: 10,
  },
  buttonFirstText: {
    textAlign: 'center',
    padding: 5,
    borderRadius: 10,
    fontSize: 17,
    backgroundColor: CONSTANTS.THEME.SECONDARY_COLOR,
    fontWeight: 'bold',
    color: CONSTANTS.colors.WHITE_COLOR,
  },
  buttonFirst: {
    width: '45%',
  },
  buttonSecond: {
    width: '45%',
  },
  buttonSecondText: {
    textAlign: 'center',
    padding: 5,
    borderRadius: 10,
    fontSize: 17,
    color: CONSTANTS.THEME.SECONDARY_COLOR,
    borderWidth: 1,
    borderColor: CONSTANTS.THEME.SECONDARY_COLOR,
    fontWeight: 'bold',
  },
});
