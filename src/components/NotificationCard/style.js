import { CONSTANTS } from '../../utils/constants';

const { StyleSheet } = require('react-native');

export const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
  cardcontainer: {
    borderWidth: 1,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: CONSTANTS.colors.BLACK_COLOR,
    // paddingVertical: 12,
  },
  message: {
    // fontSize: 18,
    color: CONSTANTS.colors.GRAY_COLOR,
    // paddingVertical: 12,
    backgroundColor: '#F5F6F8',
  },
  iconContainer: {
    // backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 100,
  },
});
