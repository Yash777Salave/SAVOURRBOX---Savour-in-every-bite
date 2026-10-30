import { CONSTANTS } from '../../utils/constants';

const { StyleSheet } = require('react-native');

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardcontainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    width: '100%',
    padding: 15,
    paddingRight: 30,
    borderRadius: 12,
    backgroundColor: CONSTANTS.colors.APP_BG_COLOR,
    position: 'relative',
  },

  iconContainer: {
    padding: 10,
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 100,
  },
  contentContainer: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: CONSTANTS.colors.BLACK_COLOR,
    flexShrink: 1,
  },
  message: {
    color: CONSTANTS.colors.BLACK_COLOR,
    marginTop: 5,
    flexShrink: 1,
  },
  unreadDot: {
    // position: 'absolute',
    // top: 12,
    right: 12,
  },
  rightInfo: {
    position: 'absolute',
    top: 12,
    right: 12,
    bottom: 0,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  dateTimeContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: 10,
  },
  time: {
    fontSize: 11,
    color: CONSTANTS.colors.GRAY_COLOR,
  },
  date: {
    fontSize: 10,
    color: CONSTANTS.colors.GRAY_COLOR,
    marginTop: 3,
  },

  dotContainer: {
    height: 18,
    width: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
