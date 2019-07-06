import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getProductVariantsRequest: ['productId'],
  getProductVariantsSuccess: ['data'],
  getProductVariantsFailure: ['error'],
});

export const ProductVariantsTypes = Types;
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
  [Types.GET_PRODUCT_VARIANTS_REQUEST]: request,
  [Types.GET_PRODUCT_VARIANTS_SUCCESS]: success,
  [Types.GET_PRODUCT_VARIANTS_FAILURE]: failure,
});
