import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin / 2,
    marginBottom: metrics.baseMargin / 2,
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
