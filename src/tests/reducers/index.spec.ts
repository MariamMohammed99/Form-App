import { SET_FORM_DATA, SET_USER_TYPE } from '../../actions/type';
import appReducer from '../../reducers';
import initialState from '../../reducers/initialState';

describe('App Reducers', () => {
  const payload = {
    firstName: 'Mariam',
    age: 24,
    userType: 'user',
  };
  it('should handle SET_FORM_DATA', () => {
    const result = appReducer(undefined, {
      type: SET_FORM_DATA,
      payload,
    });
    expect(result).toEqual({
      ...initialState,
      firstName: payload.firstName,
      age: payload.age,
    });
  });

  it('should handle SET_USER_TYPE', () => {
    const result = appReducer(undefined, {
      type: SET_USER_TYPE,
      payload,
    });
    expect(result).toEqual({
      ...initialState,
      userType: payload.userType,
    });
  });

  it('send other type', () => {
    const result = appReducer(undefined, {
      type: 'Other',
      payload,
    });
    expect(result).toEqual(initialState);
  });
});
