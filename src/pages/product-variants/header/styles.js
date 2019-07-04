import { StyleSheet } from 'react-native';
import { colors, general, metrics } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    ...general.boxShadow,
    flexDirection: 'column',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius * 2,
    padding: metrics.basePadding,
    marginHorizontal: metrics.baseMargin,
    marginTop: metrics.baseMargin / 2,
    marginBottom: metrics.baseMargin / 2,
  },

  imageContainer: {
    width: '100%',
    height: 145,
    alignItems: 'center',
    marginBottom: metrics.baseMargin / 2,
  },

  infoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    textAlign: 'center',
  },

  description: {
    color: colors.secondary,
    fontSize: 12,
    textAlign: 'center',
  },

  time: {
    flexDirection: 'row',
  },

  timeIcon: {
    color: colors.regular,
  },

  timeText: {
    color: colors.regular,
    fontSize: 10,
    marginLeft: metrics.baseMargin / 2,
  },
});

export default styles;
