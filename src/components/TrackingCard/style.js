import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../utils/constants';
export const styles = StyleSheet.create({
  cardMainContainer: {
    borderWidth: 0.1,
    borderRadius: 16,
    backgroundColor: CONSTANTS.colors.APP_BG_COLOR,
    elevation: 4,
    padding: 10,
    borderColor: CONSTANTS.colors.LIGHT_GRAY_COLOR,
  },
  deliveryLogo: {
    width: 40,
    height: 35,
    backgroundColor: CONSTANTS.colors.APP_BG_COLOR,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // margin: 10,
  },
  headerLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  deliveryText: {
    fontSize: 22,
    color: CONSTANTS.colors.BLACK_COLOR,
    fontWeight: '600',
    // margin: 10,
  },
  orderID: {
    fontSize: 18,
    color: CONSTANTS.colors.GRAY_COLOR,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
    // marginHorizontal: 10,
  },
  line: {
    height: 2,
    backgroundColor: CONSTANTS.colors.LIGHT_GRAY_COLOR_1,
    flex: 1,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: CONSTANTS.colors.LIGHT_GRAY_COLOR_1,
  },

  activeDot: {
    backgroundColor: CONSTANTS.THEME.SECONDARY_COLOR,
  },
  activeLine: {
    backgroundColor: CONSTANTS.THEME.SECONDARY_COLOR,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  label: {
    fontSize: 13,
    color: CONSTANTS.colors.LIGHT_GRAY_COLOR,
  },
  etaText: {
    marginTop: 10,
    fontSize: 16,
    color: CONSTANTS.colors.BLACK_COLOR,
    fontWeight: '600',
  },
  subText: {
    marginTop: 2,
    fontSize: 14,
    color: CONSTANTS.colors.LIGHT_GRAY_COLOR,
  },
  buttonContainer: {
    borderRadius: 10,
    backgroundColor: CONSTANTS.THEME.SECONDARY_COLOR,
    paddingVertical: 6,
    marginTop: 14,
  },
  buttonText: {
    textAlign: 'center',
    color: CONSTANTS.colors.APP_BG_COLOR,
    fontSize: 20,
    fontWeight: '600',
  },
});
