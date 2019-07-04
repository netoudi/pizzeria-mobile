import { StyleSheet } from 'react-native';
import { colors, general, metrics } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    ...general.boxShadow,
    flex: 1,
    maxWidth: ((metrics.screenWidth / 2) - (metrics.baseMargin * 2)),
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
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: metrics.baseMargin / 2,
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  iconSmall: {
    width: 53,
    height: 53,
    resizeMode: 'contain',
  },

  iconMedium: {
    width: 77,
    height: 77,
    resizeMode: 'contain',
  },

  iconBig: {
    width: 88,
    height: 88,
    resizeMode: 'contain',
  },

  iconLarger: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
  },

  notFound: {
    width: 120,
    height: 120,
    resizeMode: 'center',
    backgroundColor: colors.regular,
  },

  title: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
  },

  price: {
    color: colors.secondary,
    fontSize: 12,
  },
});

export default styles;
