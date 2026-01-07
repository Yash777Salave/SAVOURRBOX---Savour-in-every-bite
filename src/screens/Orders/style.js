import { Platform, StyleSheet } from 'react-native';
import { CONSTANTS } from '../../utils/constants';

const style = StyleSheet.create({
  headingContainer: {
    padding: 16,
    backgroundColor: CONSTANTS.THEME.SECONDARY_COLOR,
  },
  myOrdersText: {
    fontSize: 25,
    color: CONSTANTS.colors.APP_BG_COLOR,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
});
export default style;
