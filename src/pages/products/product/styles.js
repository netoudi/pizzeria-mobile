import { StyleSheet } from 'react-native';
import { colors, general, metrics } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    ...general.boxShadow,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius * 2,
    padding: metrics.basePadding,
    marginHorizontal: metrics.baseMargin,
    marginVertical: metrics.baseMargin,
  },

  imageContainer: {
    flex: 1,
    width: '100%',
    height: 145,
    alignItems: 'center',
    marginBottom: metrics.baseMargin / 2,
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  title: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
