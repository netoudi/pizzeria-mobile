import { StyleSheet } from 'react-native';
import { colors, general, metrics } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    ...general.boxShadow,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius * 2,
    padding: metrics.basePadding,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin / 2,
    marginBottom: metrics.baseMargin / 2,
  },

  imageContainer: {
    width: 80,
    borderRadius: metrics.baseRadius * 2,
    overflow: 'hidden',
  },

  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: metrics.basePadding / 2,
  },

  actionContainer: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: 80,
  },

  title: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
  },

  description: {
    color: colors.secondary,
    fontSize: 10,
  },

  price: {
    color: colors.secondary,
    fontSize: 12,
    fontWeight: 'bold',
  },

  deleteIcon: {
    color: colors.danger,
  },
});

export default styles;
