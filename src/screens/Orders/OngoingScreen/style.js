import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../../utils/constants';

export const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
    // borderBottomLeftRadius: 10,
    // borderTopLeftRadius: 10,
    borderRadius: 10,
  },
  cardContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    // padding: 10,
    borderStyle: 'dashed',
    marginVertical: 4,
    backgroundColor: CONSTANTS.colors.WHITE_COLOR,
    // elevation: 4,
    borderRadius: 15,
    borderColor: CONSTANTS.colors.LIGHT_GRAY_COLOR_1,
    gap: 10,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: CONSTANTS.colors.APP_BG_COLOR,
  },
  foodNameAndOrderID: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    paddingRight: 10,
    marginTop: 5,
  },
  orderID: {
    color: CONSTANTS.colors.LIGHT_GRAY_COLOR_1,
  },
  foodName: {
    color: CONSTANTS.colors.BLACK_COLOR,
    fontSize: 17,
    fontWeight: 'bold',
  },
  price: {
    color: CONSTANTS.colors.BLACK_COLOR,
    fontWeight: 'bold',
  },
  qtyContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    // borderWidth: 1,
  },
  icons: {
    height: 20,
    width: 20,
  },
  countText: {
    fontSize: 16,
    color: CONSTANTS.colors.BLACK_COLOR,
    width: 25,
    textAlign: 'center',
    alignItems: 'center',
  },
  addOnsContainer: {
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',
    borderRadius: 20,
    padding: 5,
    backgroundColor: CONSTANTS.colors.WHITE_COLOR,
  },
});
