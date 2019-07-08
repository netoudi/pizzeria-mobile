import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getOrdersRequest: null,
  getOrdersSuccess: ['data'],
  getOrdersFailure: ['error'],
});

export const OrdersTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  loading: false,
  error: null,
  data: [],
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
  [Types.GET_ORDERS_REQUEST]: request,
  [Types.GET_ORDERS_SUCCESS]: success,
  [Types.GET_ORDERS_FAILURE]: failure,
});
