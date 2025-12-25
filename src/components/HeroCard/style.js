import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../utils/constants';

const styles = StyleSheet.create({
  mainCardContainer: {
    borderWidth: 6,
    height: 500,
    borderRadius: 20,
    backgroundColor: 'red',
    backgroundColor: CONSTANTS.colors.APP_BG_COLOR,
    padding: 10,
  },
  cartImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    borderRadius: 20,
    // borderWidth: 9,
    borderColor: CONSTANTS.colors.APP_BG_COLOR,
    // alignSelf: 'center',
    // margin: 10,
  },
  TodayVegTiffinText: {
    color: 'green',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  foodMenuText: {
    color: CONSTANTS.colors.GRAY_COLOR,
    textAlign: 'center',
    fontSize: 15,
  },
  priceText: {
    fontSize: 27,
    color: CONSTANTS.colors.BLACK_COLOR,
    borderTopWidth: 0.4,
    marginTop: 12,
    textAlign: 'center',
    borderTopColor: CONSTANTS.colors.GRAY_COLOR,
    fontWeight: 'bold',
  },
});

export default styles;
