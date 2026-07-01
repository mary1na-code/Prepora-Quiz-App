import { Topic } from '.'

export const cos100: Topic = {
  topic: 'COS 100 - Version Control ',
  level: 'null',
  totalQuestions: 40,
  totalScore: 50,
  totalTime: 2400, // estimate (40 min) - source had no time limit, adjust as needed
  questions: [
    {
  question:
    'What is the primary purpose of a Version Control System (VCS)?',
  choices: [
    'To record and manage changes made to files over time',
    'To compile source code into executable programs',
    'To design graphical user interfaces',
    'To increase a computer’s processing speed',
  ],
  type: 'MCQs',
  correctAnswers: ['To record and manage changes made to files over time'],
  score: 1,
  rationale:
    'A Version Control System tracks changes to files over time, allowing users to view history, compare versions, restore previous versions, and collaborate effectively.',
},
{
  question:
    'Which of the following is NOT a benefit of using a Version Control System?',
  choices: [
    'Maintaining a history of file modifications',
    'Supporting collaboration among multiple developers',
    'Automatically fixing programming errors',
    'Allowing users to restore previous versions',
  ],
  type: 'MCQs',
  correctAnswers: ['Automatically fixing programming errors'],
  score: 1,
  rationale:
    'A VCS tracks and manages changes but does not automatically detect or fix programming errors.',
},
{
  question:
    'A programmer repeatedly saves files as Project_v1, Project_v2, and Project_v3. Which problem does a Version Control System solve in this situation?',
  choices: [
    'It automatically manages file versions and history',
    'It converts the project into machine code',
    'It compresses the project into a ZIP file',
    'It permanently deletes old versions',
  ],
  type: 'MCQs',
  correctAnswers: ['It automatically manages file versions and history'],
  score: 1,
  rationale:
    'A VCS eliminates the need for manually creating multiple versions by recording every change in an organized history.',
},
{
  question:
    'Which of the following is one reason Version Control Systems improve productivity?',
  choices: [
    'Developers spend less time manually managing file versions',
    'Programs execute faster after every commit',
    'Internet connectivity is no longer required for all projects',
    'All programming bugs are automatically removed',
  ],
  type: 'MCQs',
  correctAnswers: [
    'Developers spend less time manually managing file versions',
  ],
  score: 1,
  rationale:
    'By handling version tracking automatically, a VCS allows developers to focus on development instead of file management.',
},
{
  question:
    'Which type of Version Control System stores all versions on a single computer?',
  choices: [
    'Local Version Control System (LVCS)',
    'Centralized Version Control System (CVCS)',
    'Distributed Version Control System (DVCS)',
    'Cloud Version Control System',
  ],
  type: 'MCQs',
  correctAnswers: ['Local Version Control System (LVCS)'],
  score: 1,
  rationale:
    'A Local Version Control System keeps version history on one computer without relying on a server.',
},
{
  question:
    'Which of the following is an example of a Local Version Control System?',
  choices: ['RCS', 'Git', 'Mercurial', 'Subversion (SVN)'],
  type: 'MCQs',
  correctAnswers: ['RCS'],
  score: 1,
  rationale:
    'RCS (Revision Control System) is the example of a Local Version Control System given in the lecture note.',
},
{
  question:
    'Which of the following is a major disadvantage of a Local Version Control System?',
  choices: [
    'It does not support collaboration effectively',
    'It requires every user to have a complete repository',
    'It cannot store project files',
    'It always requires an internet connection',
  ],
  type: 'MCQs',
  correctAnswers: ['It does not support collaboration effectively'],
  score: 1,
  rationale:
    'Since all versions are stored locally, LVCS provides little or no support for collaborative software development.',
},
{
  question:
    'Which type of Version Control System stores project files and versions on a central server?',
  choices: [
    'Centralized Version Control System (CVCS)',
    'Distributed Version Control System (DVCS)',
    'Local Version Control System (LVCS)',
    'Manual Version Control System',
  ],
  type: 'MCQs',
  correctAnswers: ['Centralized Version Control System (CVCS)'],
  score: 1,
  rationale:
    'In a CVCS, all project files and version history are maintained on a central server that clients connect to.',
},
{
  question:
    'Which pair consists entirely of Centralized Version Control Systems?',
  choices: [
    'CVS and Subversion (SVN)',
    'Git and Mercurial',
    'RCS and Git',
    'Mercurial and RCS',
  ],
  type: 'MCQs',
  correctAnswers: ['CVS and Subversion (SVN)'],
  score: 1,
  rationale:
    'CVS and Subversion (SVN) are both examples of Centralized Version Control Systems.',
},
{
  question:
    'Why is a Centralized Version Control System considered to have a single point of failure?',
  choices: [
    'If the central server fails, users cannot access the shared repository',
    'Every developer keeps a complete copy of the repository',
    'It permanently deletes project history after each commit',
    'It only works on one operating system',
  ],
  type: 'MCQs',
  correctAnswers: [
    'If the central server fails, users cannot access the shared repository',
  ],
  score: 1,
  rationale:
    'Because the central server stores the project's shared history, its failure or downtime affects every connected user.',
},
]}