import { render, screen } from '@testing-library/react';

import { SomeComponent } from './SomeComponent.component';

describe('<SomeComponent />', () => {
  it('should render some component', () => {
    render(<SomeComponent />);

    expect(screen.getByTestId('some-component')).toBeInTheDocument();
  });
});
