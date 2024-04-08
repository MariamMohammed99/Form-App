import RootState from "../types/rootState";
import { SET_FORM_DATA, SET_USER_TYPE } from "./type";

export const setUserType = (payload: RootState) => ({
    type: SET_USER_TYPE,
    payload,
  });

  export const setFormData = (payload: RootState) => ({
    type: SET_FORM_DATA,
    payload,
  });
