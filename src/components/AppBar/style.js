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
    marginLeft: 20,
    fontWeight: 'condensed',
  },
});
export default styles;
