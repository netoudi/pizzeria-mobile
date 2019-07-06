import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
  signUpRequest: ['name', 'email', 'password'],
  initCheckSuccess: null,
  signOut: null,
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  authChecked: false,
  signedIn: false,
  token: null,
});

/* Reducers */

export const success = (state, { token }) => state.merge({
  signedIn: true,
  token,
});

export const checkSuccess = state => state.merge({ authChecked: true });

export const logout = state => state.merge({
  signedIn: false,
  token: null,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.INIT_CHECK_SUCCESS]: checkSuccess,
  [Types.SIGN_OUT]: logout,
});
