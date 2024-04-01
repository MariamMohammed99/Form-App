import { PayloadAction } from '@reduxjs/toolkit';
import initialState from './initialState';
import { SET_FORM_DATA, SET_USER_TYPE } from '../actions/type';
import RootState from '../types/rootState';

const appReducer = (
  state = initialState,
  action: PayloadAction<RootState>,
): RootState => {
  switch (action.type) {
    case SET_FORM_DATA:
      return {
        ...state,
        age: action.payload.age,
        firstName: action.payload.firstName,
      };
    case SET_USER_TYPE:
      return {
        ...state,
        userType: action.payload.userType,
      };

    default:
      return state;
  }
};

export default appReducer;
