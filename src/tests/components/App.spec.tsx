import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../components/App';
import { Provider } from 'react-redux';
import store from '../../store/configureStore';

describe('Testing the app component', () => {
  it('renders Form component when "/" route is accessed', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText(/Form Page/i)).toBeTruthy();
  });
});
