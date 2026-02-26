import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../utils/constants';

const styles = StyleSheet.create({
  backIcon: {
    height: 25,
    width: 25,
  },
  mainContainer: {
    marginTop: 20,
    margin: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIconContainer: {
    backgroundColor: '#DCDCDC',
    height: 45,
    width: 45,
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
