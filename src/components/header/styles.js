import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
    paddingVertical: metrics.basePadding,
  },

  title: {
    flex: 2,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },

  left: {
    flex: 1,
    alignItems: 'flex-start',
  },

  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default styles;
