import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin / 2,
    marginBottom: metrics.baseMargin / 2,
  },

  buttonMore: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.regular,
  },

  buttonMoreIcon: {
    color: colors.darker,
  },

  buttonNext: {
    height: 34,
    backgroundColor: colors.danger,
    borderRadius: metrics.baseRadius * 3,
    paddingHorizontal: metrics.basePadding * 1.5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  buttonNextText: {
    color: colors.white,
    fontSize: 14,
  },

  buttonNextIcon: {
    color: colors.white,
    marginLeft: metrics.baseMargin,
  },
});

export default styles;
