import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Card, { Props } from '../../components/Card';

describe('Index page', () => {
  let expectedProps: Props;

  beforeEach(() => {
    expectedProps = {
      data: {
        timestamp: 1605451340000,
        mission: 'Mission Name',
        site: 'Kennedy Space Center',
        rocket: 'Falcon 9',
      },
    };
  });

  it('should render card', () => {
    render(<Card data={expectedProps.data} />);

    const text = screen.getByText(/Mission Name/);
    expect(text).toBeInTheDocument();
  });
});
