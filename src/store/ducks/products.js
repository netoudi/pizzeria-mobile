import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getProductsRequest: ['categoryId'],
  getProductsSuccess: ['data'],
  getProductsFailure: ['error'],
});

export const ProductsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  loading: false,
  error: null,
  data: {},
});

/* Reducers */

export const request = state => state.merge({
  loading: true,
  error: null,
});

export const success = (state, { data }) => state.merge({
  loading: false,
  error: null,
  data,
});

export const failure = (state, { error }) => state.merge({
  loading: false,
  error,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_PRODUCTS_REQUEST]: request,
  [Types.GET_PRODUCTS_SUCCESS]: success,
  [Types.GET_PRODUCTS_FAILURE]: failure,
});
