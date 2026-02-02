import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../../utils/constants';
export const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1.5,
    width: '90%',
    alignSelf: 'center',
    borderStyle: 'dashed',
    marginVertical: 4,
    backgroundColor: CONSTANTS.colors.WHITE_COLOR,
    borderRadius: 15,
    borderColor: CONSTANTS.colors.LIGHT_GRAY_COLOR_1,
    gap: 10,
    padding: 10,
  },
  image: {
    height: 120,
    width: '100%',
    borderRadius: 10,
  },
  completed: {
    fontSize: 17,
    color: '#008000',
    fontWeight: 'bold',
  },
  inCompleted: {
    fontSize: 17,
    color: '#FF0000',
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  dateTime: {
    color: CONSTANTS.colors.LIGHT_GRAY_COLOR_1,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 1,
    paddingHorizontal: 10,
    borderLeftColor: CONSTANTS.colors.LIGHT_GRAY_COLOR_1,
  },
  priceDateTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: CONSTANTS.colors.APP_BG_COLOR,
    // margin: 10,
  },
});
