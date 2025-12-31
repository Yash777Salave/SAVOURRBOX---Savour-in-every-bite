import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../../utils/constants';
export const styles = StyleSheet.create({
  headingMainContainer: {
    // height: 210,
    // width: '100%',
    // justifyContent: 'flex-end',
    // padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#FFB3B3',
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
    borderWidth: 1,
  },
});
