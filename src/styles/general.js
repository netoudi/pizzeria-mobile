import colors from './colors';

export const formStyles = {
  input: {
    backgroundColor: colors.inputBackground,
    borderRadius: 10,
    height: 44,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: colors.light,
  },
};

export const buttonStyles = {
  button: {
    height: 44,
    backgroundColor: colors.danger,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },

  buttonLink: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  buttonLinkText: {
    fontSize: 14,
    color: colors.white,
  },
};

export const boxShadow = {
  shadowColor: colors.primary,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.30,
  shadowRadius: 4.65,
  elevation: 2,
};
