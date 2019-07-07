import { StyleSheet } from 'react-native';
import { colors, general, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: metrics.basePadding * 2,
    paddingVertical: metrics.baseMargin * 2,
  },

  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  input: {
    ...general.boxShadow,
    ...general.formStyles.input,
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputDescription: {
    ...general.boxShadow,
    ...general.formStyles.input,
    height: 115,
    textAlignVertical: 'top',
  },

  inputStreet: {
    ...general.boxShadow,
    ...general.formStyles.input,
    flex: 1,
  },

  inputNumber: {
    ...general.boxShadow,
    ...general.formStyles.input,
    marginLeft: metrics.baseMargin,
    width: 100,
  },

  buttonNext: {
    height: 34,
    backgroundColor: colors.danger,
    borderRadius: metrics.baseRadius * 3,
    paddingHorizontal: metrics.basePadding * 1.5,
    alignSelf: 'flex-end',
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
