import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../components/App';
import store from '../store/configureStore';

describe('Testing main component', () => {
  test('Rendering App', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText(/Form Page/i)).toBeTruthy();
  });
});
