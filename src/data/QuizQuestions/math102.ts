
import { Topic } from '.'

export const math102: Topic = {
  topic: 'MATH 102 - Calculus',
  level: 'null',
  totalQuestions: 40,
  totalScore: 50,
  totalTime: 2400, // estimate (40 min) - source had no time limit, adjust as needed
  questions: [
    
    {
  question: 'In the notation y = f(x), what does x represent?',
  choices: [
    'The dependent variable',
    'The independent variable',
    'The constant',
    'The slope',
  ],
  type: 'MCQs',
  correctAnswers: ['The independent variable'],
  score: 1,
  rationale:
    'B. The independent variable.\n\nThe variable x is the input to the function. Its value determines the corresponding output, f(x).',
},
{
  question: 'Which of the following is an example of a linear function?',
  choices: [
    'f(x) = x²',
    'f(x) = 2x + 3',
    'f(x) = sin x',
    'f(x) = 1/x',
  ],
  type: 'MCQs',
  correctAnswers: ['f(x) = 2x + 3'],
  score: 1,
  rationale:
    'B. f(x) = 2x + 3.\n\nA linear function has the form f(x) = mx + c, where m is the slope and c is the y-intercept.',
},
{
  question: 'What is the domain of the function f(x) = 1/x?',
  choices: [
    'All real numbers',
    'All real numbers except 0',
    'Only positive numbers',
    'Only negative numbers',
  ],
  type: 'MCQs',
  correctAnswers: ['All real numbers except 0'],
  score: 1,
  rationale:
    'B. All real numbers except 0.\n\nThe denominator cannot be zero, so x = 0 is excluded from the domain.',
},
{
  question: 'The graph of a function f(x) is drawn on which plane?',
  choices: [
    'The Cartesian plane',
    'The polar plane',
    'The complex plane',
    'The 3D plane',
  ],
  type: 'MCQs',
  correctAnswers: ['The Cartesian plane'],
  score: 1,
  rationale:
    'A. The Cartesian plane.\n\nA function is usually represented on the Cartesian plane using the x-axis for inputs and the y-axis for outputs.',
},
{
  question: 'What is the shape of the graph of the quadratic function f(x) = x²?',
  choices: [
    'A straight line',
    'A parabola',
    'An S-shaped curve',
    'A circle',
  ],
  type: 'MCQs',
  correctAnswers: ['A parabola'],
  score: 1,
  rationale:
    'B. A parabola.\n\nThe graph of x² is a U-shaped curve called a parabola.',
},
{
  question: 'Where does the graph of a function cross the y-axis?',
  choices: [
    'At the x-intercept',
    'At the y-intercept',
    'At the origin only',
    'At the asymptote',
  ],
  type: 'MCQs',
  correctAnswers: ['At the y-intercept'],
  score: 1,
  rationale:
    'B. At the y-intercept.\n\nThe y-intercept is the point where the graph crosses the y-axis.',
},
{
  question: 'To find the y-intercept of a function, you must:',
  choices: [
    'Set f(x) = 0',
    'Set x = 0',
    'Set y = 1',
    'Set x = 1',
  ],
  type: 'MCQs',
  correctAnswers: ['Set x = 0'],
  score: 1,
  rationale:
    'B. Set x = 0.\n\nSubstituting x = 0 into the function gives the y-coordinate where the graph meets the y-axis.',
},
{
  question: 'Evaluate limₓ→₃ (2x + 5).',
  choices: [
    '8',
    '11',
    '10',
    '6',
  ],
  type: 'MCQs',
  correctAnswers: ['11'],
  score: 1,
  rationale:
    'B. 11.\n\nThis limit is found by direct substitution: 2(3) + 5 = 11.',
},
{
  question: 'If direct substitution gives the indeterminate form 0/0 when evaluating a limit, what should you do next?',
  choices: [
    'Give up',
    'Assume the limit is 0',
    'Simplify the expression before evaluating again',
    'Assume the limit is 1',
  ],
  type: 'MCQs',
  correctAnswers: ['Simplify the expression before evaluating again'],
  score: 1,
  rationale:
    'C. Simplify the expression before evaluating again.\n\nAn indeterminate form such as 0/0 usually requires algebraic simplification before the limit can be evaluated.',
},
{
  question: 'Informally, when is a function said to be continuous?',
  choices: [
    'It has many holes',
    'Its graph can be drawn without lifting your pen',
    'It is always a straight line',
    'It goes to infinity',
  ],
  type: 'MCQs',
  correctAnswers: ['Its graph can be drawn without lifting your pen'],
  score: 1,
  rationale:
    'B. Its graph can be drawn without lifting your pen.\n\nA continuous function has no breaks, holes, or jumps over the interval being considered.',
},
]}