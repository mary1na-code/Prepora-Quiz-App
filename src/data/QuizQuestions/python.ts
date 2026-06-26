// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const python: Topic = {
  topic: 'Python',
  level: 'Advanced',
  totalQuestions: 14,
  totalScore: 125,
  totalTime: 360,
  questions: [{
      question: 'In Python, strings are mutable objects.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['False'],
      score: 5,
    
      rationale: 'The correct answer is "False".',},
    {
      question:
        'What is the difference between a shallow copy and a deep copy in Python?',
      choices: [
        'A shallow copy creates a new object and copies the references to the original elements, while a deep copy creates a new object and recursively copies the elements',
        'A shallow copy creates a new object and copies the elements, while a deep copy creates a new object and references the original elements',
        'A shallow copy modifies the original object, while a deep copy creates a new object without modifying the original',
        'There is no difference between a shallow copy and a deep copy in Python',
      ],
      type: 'MCQs',
      correctAnswers: [
        'A shallow copy creates a new object and copies the references to the original elements, while a deep copy creates a new object and recursively copies the elements',
      ],
      score: 10,
    
      rationale: 'The correct answer is "A shallow copy creates a new object and copies the references to the original elements, while a deep copy creates a new object and recursively copies the elements".',},
    {
      question:
        'Python supports multiple inheritance, allowing a class to inherit from multiple parent classes.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 5,
    
      rationale: 'The correct answer is "True".',},
    {
      question: 'What is the output of the following Python code?',
      code: 'print(list(filter(lambda x: x % 2 == 0, range(10))))',
      choices: [
        '[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]',
        '[0, 2, 4, 6, 8]',
        '[1, 3, 5, 7, 9]',
        '[0, 1, 2, 3, 4, 9]',
      ],
      type: 'MCQs',
      correctAnswers: ['[0, 2, 4, 6, 8]'],
      score: 10,
    
      rationale: 'The correct answer is "[0, 2, 4, 6, 8]".',},
    {
      question: 'What is the purpose of the "__init__" method in a Python class?',
      choices: [
        'To initialize the class attributes',
        'To define the constructor of the class',
        'To create a new instance of the class',
        'To define the destructor of the class',
      ],
      type: 'MCQs',
      correctAnswers: ['To define the constructor of the class'],
      score: 10,
    
      rationale: 'The correct answer is "To define the constructor of the class".',},
    {
      question: 'Which of the following is NOT a built-in decorator in Python?',
      choices: ['@staticmethod', '@classmethod', '@property', '@inheritance'],
      type: 'MCQs',
      correctAnswers: ['@inheritance'],
      score: 10,
    
      rationale: 'The correct answer is "@inheritance".',},
    {
      question:
        'The "pass" statement in Python is used as a placeholder and does nothing when executed.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 5,
    
      rationale: 'The correct answer is "True".',},
    {
      question: 'What is the output of the following Python code?',
      code: 'print(len({True: 1, False: 0, "True": 2}))',
      choices: ['0', '1', '2', '3'],
      type: 'MCQs',
      correctAnswers: ['2'],
      score: 10,
    
      rationale: 'The correct answer is "2".',},
    {
      question: 'What is the purpose of the "with" statement in Python?',
      choices: [
        'To define a context manager',
        'To handle exceptions',
        'To control the flow of a loop',
        'To create a new file',
      ],
      type: 'MCQs',
      correctAnswers: ['To define a context manager'],
      score: 10,
    
      rationale: 'The correct answer is "To define a context manager".',},
    {
      question:
        'Which of the following is NOT a valid method for string formatting in Python?',
      choices: [
        'String interpolation using f-strings',
        'String interpolation using % operator',
        'String interpolation using format() method',
        'String interpolation using printf() function',
      ],
      type: 'MCQs',
      correctAnswers: ['String interpolation using printf() function'],
      score: 10,
    
      rationale: 'The correct answer is "String interpolation using printf() function".',},
    {
      question: 'What is the purpose of the "is" operator in Python?',
      choices: [
        'To check if two objects have the same value',
        'To check if two objects have the same identity',
        'To check if two objects have the same type',
        'To check if two objects have the same length',
      ],
      type: 'MCQs',
      correctAnswers: ['To check if two objects have the same identity'],
      score: 10,
    
      rationale: 'The correct answer is "To check if two objects have the same identity".',},
    ],
}
