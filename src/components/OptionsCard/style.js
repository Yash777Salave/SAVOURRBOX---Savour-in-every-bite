import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../utils/constants';
export const styles = StyleSheet.create({
  mainContainer: {},
  icon: {
    height: 15,
    width: 15,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 15,
    // padding: 10,
  },
  optionName: {
    color: CONSTANTS.colors.GRAY_COLOR,
    fontSize: 15,
  },
  optionNameLogout: { color: CONSTANTS.THEME.SECONDARY_COLOR, fontSize: 15 },
  iconOptionContainer: { flexDirection: 'row', alignItems: 'center', gap: 15 },
});
