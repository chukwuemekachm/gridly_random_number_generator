import { api, generateNumbers, getNumbers } from './api';

const numbers = [
  7004017210,
  7081512404,
  7019181759,
  7053983014,
  7055009496,
];
const error = {
  message: 'Internal server error',
}

describe('getNumbers', function () {
  test('should return numbers when API returns them', async function () {
    api.get = jest.fn().mockResolvedValueOnce({ data: { numbers } });
    const result = await getNumbers();
    expect(result).toEqual(numbers);
  });

  test('should throw an error when API returns an error', async function () {
    api.get = jest.fn().mockRejectedValueOnce(error);
    try {
      await getNumbers();
    } catch ({ message }) {
      expect(message).toEqual(error.message);
    }
  });
});

describe('generateNumbers', function () {
  test('should generate & return numbers when API returns them', async function () {
    api.post = jest.fn().mockResolvedValueOnce({ data: { numbers } });
    const result = await generateNumbers(5);
    expect(result).toEqual(numbers);
  });

  test('should throw an error when API returns an error', async function () {
    api.post = jest.fn().mockRejectedValueOnce(error);
    try {
      await generateNumbers(5);
    } catch ({ message }) {
      expect(message).toEqual(error.message);
    }
  });
});
