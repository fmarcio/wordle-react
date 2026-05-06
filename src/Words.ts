import wordBank from "./wordle-bank.txt";

export const boardDefault: string[][] = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export interface WordSetResult {
  todaysWord: string;
  wordSet: Set<string>;
}

export const generateWordSet = async (): Promise<WordSetResult> => {
  let wordSet: Set<string> = new Set();
  let todaysWord: string = "";

  try {
    const url = typeof wordBank === 'string' ? wordBank : 'wordle-bank.txt';
    const response = await fetch(url);
    const result = await response.text();
    const wordArr = result.split("\n").map(word => word.trim().toLowerCase()).filter(word => word.length > 0);
    todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
    wordSet = new Set(wordArr);
  } catch (error) {
    console.error("Error loading word bank:", error);
  }

  return { todaysWord, wordSet };
};
