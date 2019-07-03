import { StyleSheet } from 'react-native';
import { colors, general } from '../../styles';

const styles = StyleSheet.create({
  ...general.formStyles,
  ...general.buttonStyles,

  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  background: {
    flex: 1,
  },

  backgroundDarker: {
    flex: 1,
    backgroundColor: colors.darkTransparent,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 30,
  },

  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },

  logoImage: {
    width: 72,
    height: 72,
  },
});

export default styles;
