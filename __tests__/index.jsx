import {Checkbox, CheckboxGroup} from '..';
import {render} from '@testing-library/react';

describe('Checkbox', () => {
  test('Checkbox', () => {
    const {container} = render(<Checkbox/>);
    expect(container).toMatchSnapshot();
  });

  test('CheckboxGroup', () => {
    const {container} = render(<CheckboxGroup/>);
    expect(container).toMatchSnapshot();
  });
});
