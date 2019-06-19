import * as React from 'react';
import { mount } from 'enzyme';

import { Numbers } from './Numbers';

const numbers = [
  7004017210,
  7081512404,
  7019181759,
  7053983014,
  7055009496,
];
const props = {
  numbers,
  handleNumbersSort: jest.fn(),
  sort: 'ASC',
};

describe('Numbers', function () {
  test('should mount the Numbers component without errors', async function () {
    const wrapper = mount(<Numbers {...props} />);
    expect(wrapper).toBeDefined();
  });
});
