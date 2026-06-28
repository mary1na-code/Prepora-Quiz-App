import { Topic } from '.'

export const cos102: Topic = {
  topic: 'COS 102 - Problem Solving',
  level: 'null',
  totalQuestions: 40,
  totalScore: 50,
  totalTime: 2400, // estimate (40 min) - source had no time limit, adjust as needed
  questions: [
    
    {
  question:
    'What is the primary purpose of an algorithm when solving a problem?',
  choices: [
    'To write program code directly',
    'To provide a clear step-by-step procedure for solving a problem',
    'To replace testing completely',
    'To design the user interface',
  ],
  type: 'MCQs',
  correctAnswers: [
    'To provide a clear step-by-step procedure for solving a problem',
  ],
  score: 1,
  rationale:
    'B. To provide a clear step-by-step procedure for solving a problem.\n\nAn algorithm is a sequence of well-defined steps used to solve a problem or accomplish a task before implementation begins.',
},
{
  question:
    'Which characteristic is most important for every step in an algorithm?',
  choices: [
    'It should allow multiple interpretations.',
    'It should be clear and unambiguous.',
    'It should contain programming syntax.',
    'It should always be written in English.',
  ],
  type: 'MCQs',
  correctAnswers: ['It should be clear and unambiguous.'],
  score: 1,
  rationale:
    'B. It should be clear and unambiguous.\n\nEach step of an algorithm should have only one meaning so that anyone following it will reach the same result.',
},
{
  question:
    'Why is pseudocode commonly used before writing program code?',
  choices: [
    'It allows programs to run without compilation.',
    'It helps developers plan program logic without worrying about programming language syntax.',
    'It automatically converts into machine code.',
    'It replaces flowcharts completely.',
  ],
  type: 'MCQs',
  correctAnswers: [
    'It helps developers plan program logic without worrying about programming language syntax.',
  ],
  score: 1,
  rationale:
    'B. It helps developers plan program logic without worrying about programming language syntax.\n\nPseudocode focuses on the logic of a solution, making it easier to understand and later translate into any programming language.',
},
{
  question:
    'In pseudocode, which keyword is typically used to accept information from a user?',
  choices: [
    'PRINT',
    'DISPLAY',
    'INPUT',
    'OUTPUT',
  ],
  type: 'MCQs',
  correctAnswers: ['INPUT'],
  score: 1,
  rationale:
    'C. INPUT.\n\nThe INPUT statement is used to receive data from the user before the program processes it.',
},
{
  question:
    'In the student grade calculator example, which grade is assigned to a student who scores 65?',
  choices: [
    'A',
    'B',
    'C',
    'D',
  ],
  type: 'MCQs',
  correctAnswers: ['B'],
  score: 1,
  rationale:
    'B. B.\n\nThe pseudocode assigns Grade B to scores from 60 to 69, so a score of 65 receives a Grade B.',
},
{
  question:
    'According to the lecture, when is a decision table most useful?',
  choices: [
    'When there is only one condition to check',
    'When multiple conditions must be evaluated together before choosing an action',
    'When drawing software interfaces',
    'When creating database tables',
  ],
  type: 'MCQs',
  correctAnswers: [
    'When multiple conditions must be evaluated together before choosing an action',
  ],
  score: 1,
  rationale:
    'B. When multiple conditions must be evaluated together before choosing an action.\n\nDecision tables organize every possible combination of conditions and the correct action for each combination.',
},
{
  question:
    'Which section of a decision table lists the questions or conditions that must be answered?',
  choices: [
    'Condition Stub',
    'Action Entries',
    'Action Stub',
    'Condition Entries',
  ],
  type: 'MCQs',
  correctAnswers: ['Condition Stub'],
  score: 1,
  rationale:
    'A. Condition Stub.\n\nThe Condition Stub lists all the conditions that determine which action should be taken.',
},
{
  question:
    'A decision table contains four conditions. According to the rule 2ⁿ, how many rule columns should the table have?',
  choices: [
    '8',
    '12',
    '16',
    '32',
  ],
  type: 'MCQs',
  correctAnswers: ['16'],
  score: 1,
  rationale:
    'C. 16.\n\nThe number of possible rules is calculated as 2ⁿ. With four conditions, 2⁴ equals 16 possible rules.',
},
{
  question:
    'What symbol is typically used in the Action Entries section of a decision table to indicate that an action should be performed?',
  choices: [
    '✓ or X',
    'Y',
    'N',
    '?',
  ],
  type: 'MCQs',
  correctAnswers: ['✓ or X'],
  score: 1,
  rationale:
    'A. ✓ or X.\n\nAction Entries use a check mark or X to indicate that a particular action should be carried out for that rule.',
},
{
  question:
    'Which step should be completed immediately after calculating the number of rules when constructing a decision table?',
  choices: [
    'Identify all possible actions',
    'Create rule columns',
    'Simplify the table',
    'Write the program code',
  ],
  type: 'MCQs',
  correctAnswers: ['Create rule columns'],
  score: 1,
  rationale:
    'B. Create rule columns.\n\nAfter determining the number of rules using 2ⁿ, the next step is to create one column for each rule before filling in the condition entries.',
},
{
  question:
    'According to the hospital example in the lecture, which action is taken when a patient has valid insurance, it is an emergency, and a doctor is available?',
  choices: [
    'Verify insurance and treat',
    'Treat immediately',
    'Add to waiting list',
    'Refer to another hospital',
  ],
  type: 'MCQs',
  correctAnswers: ['Treat immediately'],
  score: 1,
  rationale:
    'B. Treat immediately.\n\nThe decision table shows that when the patient has insurance, the case is an emergency, and a doctor is available, the patient is treated immediately.',
},
{
  question:
    'What is the main advantage of simplifying a decision table after all rules have been created?',
  choices: [
    'It increases the number of conditions.',
    'It removes unnecessary or duplicate rules while preserving the same decisions.',
    'It converts the table into a decision tree automatically.',
    'It eliminates the need for testing.',
  ],
  type: 'MCQs',
  correctAnswers: [
    'It removes unnecessary or duplicate rules while preserving the same decisions.',
  ],
  score: 1,
  rationale:
    'B. It removes unnecessary or duplicate rules while preserving the same decisions.\n\nSimplifying a decision table reduces redundancy by combining rules that lead to the same action.',
},
{
  question:
    'Which modelling tool is better suited for problems where each decision determines the next question to ask?',
  choices: [
    'Decision Table',
    'Decision Tree',
    'Pseudocode',
    'Flowchart',
  ],
  type: 'MCQs',
  correctAnswers: ['Decision Tree'],
  score: 1,
  rationale:
    'B. Decision Tree.\n\nA decision tree follows one decision at a time, making it suitable for step-by-step situations where each answer determines the next path.',
},
{
  question:
    'What is the starting point of every decision tree called?',
  choices: [
    'Leaf Node',
    'Root Node',
    'Internal Node',
    'Branch',
  ],
  type: 'MCQs',
  correctAnswers: ['Root Node'],
  score: 1,
  rationale:
    'B. Root Node.\n\nThe Root Node is the first decision point in a decision tree, and every path begins from it.',
},
{
  question:
    'Which part of a decision tree represents the final outcome after all decisions have been made?',
  choices: [
    'Branch',
    'Internal Node',
    'Leaf Node',
    'Root Node',
  ],
  type: 'MCQs',
  correctAnswers: ['Leaf Node'],
  score: 1,
  rationale:
    'C. Leaf Node.\n\nA Leaf Node is the endpoint of a decision tree and represents the final action or outcome.',
},
{
  question:
    'In a decision tree, what does a path represent?',
  choices: [
    'A collection of unrelated conditions',
    'A route from the root node to a final outcome',
    'A list of all possible actions',
    'The total number of decision rules',
  ],
  type: 'MCQs',
  correctAnswers: ['A route from the root node to a final outcome'],
  score: 1,
  rationale:
    'B. A route from the root node to a final outcome.\n\nA path follows one sequence of decisions from the Root Node until it reaches a Leaf Node.',
},
{
  question:
    'According to the lecture, implementation involves more than writing code because it also includes:',
  choices: [
    'Drawing flowcharts only',
    'Planning, testing, documentation, and preparing the solution for delivery',
    'Collecting user requirements only',
    'Designing logos for the application',
  ],
  type: 'MCQs',
  correctAnswers: [
    'Planning, testing, documentation, and preparing the solution for delivery',
  ],
  score: 1,
  rationale:
    'B. Planning, testing, documentation, and preparing the solution for delivery.\n\nImplementation includes building the solution, testing it, documenting it, and preparing it for users, not just coding.',
},
{
  question:
    'Which stage of implementation focuses on installing compilers, libraries, and development tools before coding begins?',
  choices: [
    'Integration',
    'Environment Setup',
    'System Testing',
    'Documentation & Handover',
  ],
  type: 'MCQs',
  correctAnswers: ['Environment Setup'],
  score: 1,
  rationale:
    'B. Environment Setup.\n\nEnvironment Setup prepares the development environment by installing the required software, tools, libraries, and compilers.',
},
{
  question:
    'During which implementation stage is each module tested independently before being combined with other modules?',
  choices: [
    'System Testing',
    'Integration',
    'Unit Testing',
    'Code Writing',
  ],
  type: 'MCQs',
  correctAnswers: ['Unit Testing'],
  score: 1,
  rationale:
    'C. Unit Testing.\n\nUnit Testing verifies that each individual module or function works correctly before integration.',
},
{
  question:
    'What is the primary objective of the Integration stage of implementation?',
  choices: [
    'To write documentation',
    'To connect tested modules into a complete working system',
    'To gather user requirements',
    'To design the database schema',
  ],
  type: 'MCQs',
  correctAnswers: [
    'To connect tested modules into a complete working system',
  ],
  score: 1,
  rationale:
    'B. To connect tested modules into a complete working system.\n\nIntegration combines individually tested modules and checks that they work correctly as one complete system.',
},
    {
  question:
    'Which implementation stage verifies that the complete system satisfies the original requirements after all modules have been integrated?',
  choices: [
    'Unit Testing',
    'Environment Setup',
    'System Testing',
    'Code Writing',
  ],
  type: 'MCQs',
  correctAnswers: ['System Testing'],
  score: 1,
  rationale:
    'C. System Testing.\n\nSystem Testing evaluates the entire assembled solution to ensure all functions work correctly and meet the original requirements.',
},
{
  question:
    'Which implementation stage produces user manuals, technical guides, and code comments before delivering the solution to stakeholders?',
  choices: [
    'Documentation & Handover',
    'Integration',
    'Environment Setup',
    'Unit Testing',
  ],
  type: 'MCQs',
  correctAnswers: ['Documentation & Handover'],
  score: 1,
  rationale:
    'A. Documentation & Handover.\n\nThis stage prepares the documentation needed by users and developers before the completed solution is delivered.',
},
{
  question:
    'What is the main purpose of evaluation after a solution has been implemented?',
  choices: [
    'To rewrite the entire program using another language',
    'To determine whether the completed solution satisfies the original requirements',
    'To convert pseudocode into source code',
    'To increase the number of program features regardless of user needs',
  ],
  type: 'MCQs',
  correctAnswers: [
    'To determine whether the completed solution satisfies the original requirements',
  ],
  score: 1,
  rationale:
    'B. To determine whether the completed solution satisfies the original requirements.\n\nEvaluation checks whether the finished solution solves the original problem correctly, completely, and effectively.',
},
{
  question:
    'What best describes refinement during system development?',
  choices: [
    'Discarding the completed solution and starting over',
    'Improving the solution by correcting weaknesses found during evaluation',
    'Writing pseudocode before coding begins',
    'Replacing system testing with unit testing',
  ],
  type: 'MCQs',
  correctAnswers: [
    'Improving the solution by correcting weaknesses found during evaluation',
  ],
  score: 1,
  rationale:
    'B. Improving the solution by correcting weaknesses found during evaluation.\n\nRefinement improves the completed solution by fixing problems and making necessary enhancements identified during evaluation.',
},
{
  question:
    'Which statement best describes the relationship between evaluation and refinement?',
  choices: [
    'Evaluation and refinement are the same activity.',
    'Evaluation identifies problems, while refinement improves the solution based on those findings.',
    'Refinement is completed before evaluation begins.',
    'Evaluation only checks program appearance.',
  ],
  type: 'MCQs',
  correctAnswers: [
    'Evaluation identifies problems, while refinement improves the solution based on those findings.',
  ],
  score: 1,
  rationale:
    'B. Evaluation identifies problems, while refinement improves the solution based on those findings.\n\nEvaluation measures how well the solution meets its requirements, while refinement uses the results to make the solution better.',
},
{
  question:
    'A system has five independent Yes/No conditions. According to the decision table rule, how many possible rules are required?',
  choices: [
    '10',
    '16',
    '25',
    '32',
  ],
  type: 'MCQs',
  correctAnswers: ['32'],
  score: 1,
  rationale:
    'D. 32.\n\nThe number of rules in a decision table is calculated as 2ⁿ. With five conditions, 2⁵ equals 32 possible rules.',
},
{
  question:
    'Which modelling technique presents every possible combination of conditions in a single grid?',
  choices: [
    'Flowchart',
    'Decision Tree',
    'Decision Table',
    'Pseudocode',
  ],
  type: 'MCQs',
  correctAnswers: ['Decision Table'],
  score: 1,
  rationale:
    'C. Decision Table.\n\nA decision table displays every combination of conditions and the corresponding actions in one organized grid.',
},
{
  question:
    'Which modelling technique is generally easier to follow when explaining decisions one step at a time to a user?',
  choices: [
    'Decision Tree',
    'Decision Table',
    'Source Code',
    'Data Dictionary',
  ],
  type: 'MCQs',
  correctAnswers: ['Decision Tree'],
  score: 1,
  rationale:
    'A. Decision Tree.\n\nA decision tree presents decisions sequentially, making it easy to follow the path from the first question to the final outcome.',
},
{
  question:
    'Why is pseudocode considered easier to modify than program code during the design stage?',
  choices: [
    'It executes directly on the computer.',
    'It focuses on logic without requiring programming language syntax.',
    'It automatically creates flowcharts.',
    'It eliminates the need for implementation.',
  ],
  type: 'MCQs',
  correctAnswers: [
    'It focuses on logic without requiring programming language syntax.',
  ],
  score: 1,
  rationale:
    "B. It focuses on logic without requiring programming language syntax.\n\nBecause pseudocode is language-independent, developers can revise the solution's logic easily before writing actual code.",
},
{
  question:
    'Why should developers complete planning and design before implementation begins?',
  choices: [
    'Implementation automatically corrects design mistakes.',
    'A well-prepared design provides a clear blueprint for building, testing, and delivering the solution.',
    'Programming languages cannot be used without a decision table.',
    'Documentation can only be written before requirements are gathered.',
  ],
  type: 'MCQs',
  correctAnswers: [
    'A well-prepared design provides a clear blueprint for building, testing, and delivering the solution.',
  ],
  score: 1,
  rationale:
    'B. A well-prepared design provides a clear blueprint for building, testing, and delivering the solution.\n\nThe lecture compares design to a blueprint. A complete design makes implementation more organized, efficient, and less prone to errors.',
},
  ]
} 