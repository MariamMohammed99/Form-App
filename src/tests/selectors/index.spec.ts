import { getFormData } from '../../selectors';
import RootState from '../../types/rootState';

describe('App Selectors', () => {
  const mockState: RootState = {
    firstName: 'Mariam',
    age: 24,
    userType: 'user',
  };
  it('should handle getFormData function', () => {
    const returnedState = getFormData(mockState);
    expect(returnedState).toStrictEqual(mockState);
  });
});
