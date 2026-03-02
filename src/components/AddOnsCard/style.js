import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../utils/constants';

const styles = StyleSheet.create({
  images: {
    height: 55,
    width: 85,
    backgroundColor: CONSTANTS.colors.APP_BG_COLOR,
    alignSelf: 'center',
    // borderBottomLeftRadius: 15,
    // borderBottomRightRadius: 15,
    borderRadius: 15,
    resizeMode: 'contain',
    // borderWidth: 2,
    borderColor: CONSTANTS.colors.APP_BG_COLOR,
  },
  mainCardContainer: {
    // borderWidth: 1,
    margin: 5,
    // padding: 10,
    backgroundColor: CONSTANTS.colors.BLACK_COLOR,
    borderRadius: 15,
  },
  foodNameText: {
    fontSize: 15,
    color: CONSTANTS.colors.APP_BG_COLOR,
    // padding: 4,
    // borderWidth: 3,
    // borderColor: 'white',
    marginHorizontal: 5,
  },
  priceText: {
    color: CONSTANTS.colors.APP_BG_COLOR,
    // margin: 5,
    padding: 4,
    marginHorizontal: 5,
  },
  Plusicon: {
    height: 24,
    width: 24,
    backgroundColor: CONSTANTS.colors.APP_BG_COLOR,
    // alignSelf: 'center',
    // borderBottomLeftRadius: 15,
    // borderBottomRightRadius: 15,
    borderRadius: 100,
    left: 7,
    borderWidth: 3,
    borderColor: '#E8E8E8',
  },
  priceAndPlusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop: 5,
    // marginBottom: 2,
    // borderWidth: 3,
    // borderColor: 'white',
  },
});
export default styles;
