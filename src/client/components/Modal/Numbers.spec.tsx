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

describe('Numbers', function () {
  test('should mount the Numbers component without errors', async function () {
    const wrapper = mount(<Numbers numbers={numbers} />);
    expect(wrapper).toBeDefined();
  });
});
