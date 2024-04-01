import RootState from '../types/rootState';

export const getFormData = (state: RootState): RootState => {
  return {
    firstName: state.firstName,
    age: state.age,
    userType: state.userType,
  };
};
