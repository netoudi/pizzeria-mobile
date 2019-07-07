import { StyleSheet } from 'react-native';
import { colors, general, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  loading: {
    marginTop: metrics.baseMargin * 2,
  },

  empty: {
    ...general.boxShadow,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius * 2,
    padding: metrics.basePadding,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin / 2,
    marginBottom: metrics.baseMargin / 2,
  },
});

export default styles;
