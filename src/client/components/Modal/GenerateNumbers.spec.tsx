import * as React from 'react';
import { mount } from 'enzyme';

import { GenerateNumber } from './GenerateNumber';

const props = {
  count: 5,
  handleGenerateNumbers: jest.fn(),
  handleChange: jest.fn(),
};

describe('GenerateNumber', function () {
  test('should mount the GenerateNumber component without errors', async function () {
    const wrapper = mount(<GenerateNumber {...props}  />);
    expect(wrapper).toBeDefined();
  });
});
