import * as React from 'react';
import { mount } from 'enzyme';

import { Modal } from './Modal';
import { Numbers } from './Numbers';
import { GenerateNumber } from './GenerateNumber';

const props = {
  count: 5,
  handleGenerateNumbers: jest.fn(),
  handleChange: jest.fn(),
  handleToggleModal: jest.fn(),
  handleDisplayGenerateNumbersModal: jest.fn(),
  handleDisplayNumbersModal: jest.fn(),
  displayNumbers: false,
  numbers: [],
};

describe('Modal', function () {
  test('should mount the Modal component without errors', async function () {
    const wrapper = mount(<Modal {...props}  />);
    expect(wrapper).toBeDefined();
    expect(wrapper.find(GenerateNumber)).toHaveLength(1);
    expect(wrapper.find(Numbers)).toHaveLength(0);
  });

  test('should render the Numbers component when displayNumbers is true', async function () {
    const wrapper = mount(<Modal {...props} displayNumbers  />);
    expect(wrapper.find(Numbers)).toHaveLength(1);
    expect(wrapper.find(GenerateNumber)).toHaveLength(0);
  });
});
