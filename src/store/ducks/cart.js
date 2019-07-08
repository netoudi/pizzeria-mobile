import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  addItemRequest: ['variantId'],
  addItemSuccess: ['data'],
  addItemFailure: ['error'],

  delItemRequest: ['itemId'],
  delItemSuccess: ['data'],
  delItemFailure: ['error'],

  addInfoRequest: ['description', 'address'],
  addInfoSuccess: ['data'],
  addInfoFailure: ['error'],

  checkoutRequest: null,
  checkoutSuccess: ['data'],
  checkoutFailure: ['error'],
});

export const CartTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  loading: false,
  error: null,
  data: {
    description: '',
    address: {
      zipcode: '',
      street: '',
      number: '',
      neighborhood: '',
      city: '',
      state: '',
    },
    items: [],
    number_items: 0,
    value_total: 0,
  },
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
  [Types.ADD_ITEM_REQUEST]: request,
  [Types.ADD_ITEM_SUCCESS]: success,
  [Types.ADD_ITEM_FAILURE]: failure,

  [Types.DEL_ITEM_REQUEST]: request,
  [Types.DEL_ITEM_SUCCESS]: success,
  [Types.DEL_ITEM_FAILURE]: failure,

  [Types.ADD_INFO_REQUEST]: request,
  [Types.ADD_INFO_SUCCESS]: success,
  [Types.ADD_INFO_FAILURE]: failure,

  [Types.CHECKOUT_REQUEST]: request,
  [Types.CHECKOUT_SUCCESS]: success,
  [Types.CHECKOUT_FAILURE]: failure,
});
