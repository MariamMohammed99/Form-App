import { setFormData, setUserType } from '../../actions';
import { SET_FORM_DATA, SET_USER_TYPE } from '../../actions/type';

describe('App Actions', () => {
  it('should create an action to set form data', () => {
    const payload = {
      firstName: 'Mariam',
      age: 24,
    };
    const expectedAction = {
      type: SET_FORM_DATA,
      payload,
    };
    expect(setFormData(payload)).toEqual(expectedAction);
  });

  it('should create an action to set user type', () => {
    const payload = {
      userType: 'user',
    };
    const expectedAction = {
      type: SET_USER_TYPE,
      payload,
    };
    expect(setUserType(payload)).toEqual(expectedAction);
  });
});
