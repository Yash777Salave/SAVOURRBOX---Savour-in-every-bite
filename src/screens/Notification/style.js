import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: CONSTANTS.colors.APP_BG_COLOR,
    flex: 1,
  },
  mainNotificationContainer: {
    margin: 20,
  },
  searchBox: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CONSTANTS.colors.LIGHT_GRAY_COLOR_1,
    borderColor: CONSTANTS.colors.LIGHT_GRAY_COLOR,
  },
  sectionHeader: {
    fontSize: 15,
    fontWeight: '700',
    color: CONSTANTS.colors.BLACK_COLOR,
    paddingVertical: 12,
    backgroundColor: '#F5F6F8',
  },
});
export default styles;
