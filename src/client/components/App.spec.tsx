import * as React from 'react';
import { mount } from 'enzyme';

import App from './App';
import { api } from '../api';

const numbers = [
  7004017210,
  7081512404,
  7019181759,
  7053983014,
  7055009496,
];

describe('App.tsx', function() {
  test('should mount the App component without errors', function() {
    const wrapper = mount(<App />);
    expect(wrapper).toBeDefined();
  });

  test('should toggle the modal component', function() {
    const wrapper = mount(<App />);
    const instance = wrapper.instance();

    instance['handleToggleModal']();
    expect(instance.state['displayModal']).toBeTruthy();

    instance['handleToggleModal']();
    expect(instance.state['displayModal']).toBeFalsy();
  });

  test('should toggle the modal and display the Numbers component', async function() {
    api.get = jest.fn().mockResolvedValueOnce({ data: { numbers } });
    const wrapper = mount(<App />);
    const instance = wrapper.instance();

    await instance['handleDisplayNumbersModal']();
    expect(instance.state['displayModal']).toBeTruthy();
    expect(instance.state['displayNumbers']).toBeTruthy();
  });

  test('should toggle the modal and display the GenerateNumbers component', function() {
    const wrapper = mount(<App />);
    const instance = wrapper.instance();

    instance['handleDisplayGenerateNumbersModal']();
    expect(instance.state['displayModal']).toBeTruthy();
    expect(instance.state['displayNumbers']).toBeFalsy();
  });

  test('should toggle the modal and display the Numbers component', async function() {
    api.post = jest.fn().mockResolvedValueOnce({ data: { numbers } });
    const wrapper = mount(<App />);
    const instance = wrapper.instance();

    await instance['handleGenerateNumbers']();
    expect(instance.state['displayNumbers']).toBeTruthy();
    expect(instance.state['numbers']).toEqual(numbers);
  });
});
