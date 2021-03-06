import { StyleSheet } from 'react-native';
import { colors, general, metrics } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    ...general.boxShadow,
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius * 2,
    padding: metrics.basePadding,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin / 2,
    marginBottom: metrics.baseMargin / 2,
  },

  title: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
  },

  description: {
    color: colors.secondary,
    fontSize: 12,
  },

  price: {
    color: colors.primary,
    fontSize: 12,
  },
});

export default styles;
