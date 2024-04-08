import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../store/configureStore';
import Overview from '../../../components/Overview/Overview';
import { useSelector } from 'react-redux';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Overview component', () => {
  const mockFormData = {
    firstName: 'John',
    age: 30,
    userType: 'user',
  };
  beforeEach(() => {
    (useSelector as unknown as jest.Mock).mockReturnValue(mockFormData);
  });

  it('renders component with form data', () => {
    render(
      <Provider store={store}>
        <Overview />
      </Provider>
    );
    expect(screen.getByText(/Overview Page/i)).toBeTruthy();
    expect(screen.getByText(/First Name:/i)).toBeTruthy();
    expect(screen.getByText(mockFormData.firstName)).toBeTruthy();
    expect(screen.getByText(/Age:/i)).toBeTruthy();
    expect(screen.getByText(mockFormData.age.toString())).toBeTruthy();
    expect(screen.getByText(/User Type:/i)).toBeTruthy();
    expect(screen.getByText(mockFormData.userType)).toBeTruthy();
    expect(useSelector).toHaveBeenCalledWith(expect.any(Function));
  });
});
