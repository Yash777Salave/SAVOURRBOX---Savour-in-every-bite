import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../utils/constants';

const styles = StyleSheet.create({
  backIcon: {
    height: 22,
    width: 22,
  },
  mainContainer: {
    marginTop: 25,
    margin: 15,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  backIconContainer: {
    backgroundColor: '#DCDCDC',
    height: 42,
    width: 42,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: CONSTANTS.fontSize.fontSize22,
    fontWeight: '600',
    textAlign: 'center',
  },
  headingContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
  },
});
export default styles;
