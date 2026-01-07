import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../../utils/constants';
export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: CONSTANTS.colors.APP_BG_COLOR,
    flex: 1,
  },
  headingMainContainer: {
    // height: 210,
    // width: '100%',
    // justifyContent: 'flex-end',
    // padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#f8cdcdff',
  },
  nameText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  subText: {
    color: CONSTANTS.colors.GRAY_COLOR,
  },
  headingContainer: {
    height: 190,
    width: '100%',
    justifyContent: 'flex-end',
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    // borderWidth: 1,
  },
  menuDote: {
    top: 20,
    height: 23,
    width: 23,
    alignSelf: 'flex-end',
    marginRight: 12,
    borderRadius: 50,
  },
  optionsContainer: {
    borderWidth: 0.1,
    margin: 15,
    borderRadius: 20,
    padding: 10,
    // marginTop: 40,
    backgroundColor: CONSTANTS.colors.APP_BG_COLOR,
    elevation: 4,
  },
  optionsBorderTop: {
    borderTopWidth: 0.3,
    // margin: 10,
    borderTopColor: CONSTANTS.colors.LIGHT_GRAY_COLOR_1,
  },
  editIcon: { height: 18, width: 18 },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 40,
  },
  addressHeading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addressEditContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginTop: 5,
  },
});
