import { render, screen } from '@testing-library/react';

import { SomeInlineComponent } from './SomeInlineComponent.component';

describe('<SomeInlineComponent />', () => {
  it('should render some inline component', () => {
    render(<SomeInlineComponent />);

    expect(screen.getByTestId('some-inline-component')).toBeInTheDocument();
  });
});
