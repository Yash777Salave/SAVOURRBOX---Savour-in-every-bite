import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../../utils/constants';

export const styles = StyleSheet.create({
  image: {
    height: 120,
    width: '100%',
    // borderBottomLeftRadius: 10,
    // borderTopLeftRadius: 10,
    borderRadius: 10,
  },
  cardContainer: {
    borderWidth: 1.5,
    // flexDirection: 'row',
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
    padding: 10,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: CONSTANTS.colors.APP_BG_COLOR,
    // margin: 10,
  },
  foodNameAndOrderID: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentContainer: {
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
    fontSize: 17,
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
  tiffineQtyText: {
    borderLeftWidth: 1,
    paddingHorizontal: 10,
    color: CONSTANTS.colors.LIGHT_GRAY_COLOR,
    borderLeftColor: CONSTANTS.colors.LIGHT_GRAY_COLOR,
  },
  priceAndQtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
    marginTop: 10,
  },
});
