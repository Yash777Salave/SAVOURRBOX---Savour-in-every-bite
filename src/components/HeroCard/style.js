import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../utils/constants';

const styles = StyleSheet.create({
  mainCardContainer: {
    borderWidth: 0.1,
    // borderRadius: 20,
    // backgroundColor: 'red',
    // backgroundColor: CONSTANTS.colors.APP_BG_COLOR,
    // backgroundColor: '#E8E8E8',
    //here---------------
    borderRadius: 20,
    backgroundColor: '#E8E8E8',

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    // Android shadow
    elevation: 6,
    margin: 15,
    height: 'auto',
    borderColor: CONSTANTS.colors.GRAY_COLOR,
  },
  cartImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    // borderRadius: 20,
    borderWidth: 9,
    borderColor: CONSTANTS.colors.APP_BG_COLOR,
    // alignSelf: 'center',
    // margin: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
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
    marginTop: 5,
  },
  priceText: {
    fontSize: 27,
    color: CONSTANTS.colors.BLACK_COLOR,
    // borderTopWidth: 0.4,
    // marginTop: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  addOnsHeadingText: {
    fontSize: 20,
    color: CONSTANTS.colors.GRAY_COLOR,
    fontWeight: '600',
  },
  subHeadingText: {
    fontSize: 15,
    color: CONSTANTS.colors.GRAY_COLOR,
  },
  totalAndOrderNowContainer: {
    // borderWidth: 1,
  },
  totalText: {
    fontSize: 15,
    color: CONSTANTS.colors.GRAY_COLOR,
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 10,
    margin: 8,
  },
  TotalPriceText: {
    fontSize: 22,
    color: CONSTANTS.colors.BLACK_COLOR,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 6,
    backgroundColor: CONSTANTS.THEME.SECONDARY_COLOR,
  },
  orderNowText: {
    textAlign: 'center',
    color: CONSTANTS.colors.APP_BG_COLOR,
    fontSize: 20,
  },
});

export default styles;
