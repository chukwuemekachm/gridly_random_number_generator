import fs from 'fs';
import path from 'path';

const filePath = process.env.NODE_ENV !== 'test'
  ? path.join(process.cwd(), 'db.json')
  : path.join(process.cwd(), 'db.test.json');

/**
 * @description Generates a list of numbers on the platform
 * returns the generated numbers
 * 
 * @param {number} count The size of the number list to be generated
 * 
 * @returns {array}
 */
export function generateNumbers(count: number): number[] {
  try {
    let counter = 0;
    let numberList = [];

    while (counter < count) {
      const number = Number.parseInt(`70${Math.random().toString().slice(3, 11)}`);
      numberList.push(number);
      counter++;
    }

    // persist numbers
    const { numbers = [] } = JSON.parse(fs.readFileSync(filePath) as any);
    fs.writeFileSync(filePath, JSON.stringify({ numbers: [...numbers, ...numberList] }));

    return numberList;
  } catch (error) {
    throw error;
  }
}

/**
 * @description Returns the generated numbers on the platform
 * 
 * @returns {array}
 */
export function getGeneratedNumbers(): string[] {
  try {
    const { numbers = [] } = JSON.parse(fs.readFileSync(filePath) as any);
    return numbers;
  } catch (error) {
    throw error;
  }
}
