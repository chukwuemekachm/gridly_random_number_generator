import axios from 'axios';

const apiUrl = '/api/v1/number';
export const api = axios.create();

export async function getNumbers() {
  try {
    const { data: { numbers } } = await api.get(apiUrl)
    return numbers;
  } catch (error) {
    throw error;
  }
}

export async function generateNumbers(count: number) {
  try {
    const { data: { numbers } } = await api.post(apiUrl, { count });
    return numbers;
  } catch (error) {
    throw error;
  }
}
