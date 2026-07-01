import { Topic } from '.'

export const cos100: Topic = {
  topic: 'COS 100 - Version Control ',
  level: 'null',
  totalQuestions: 40,
  totalScore: 50,
  totalTime: 2400, // estimate (40 min) - source had no time limit, adjust as needed
  questions: [
    {
  question: "What is a Version Control System (VCS)?",
  choices: [
    "A software tool that records and manages changes to files over time",
    "A program used only for compiling source code",
    "A database management system",
    "An operating system utility"
  ],
  type: "MCQs",
  correctAnswer: "A software tool that records and manages changes to files over time"
},
{
  question: "Which of the following is NOT a function of a Version Control System?",
  choices: [
    "Tracking file changes",
    "Restoring previous versions",
    "Automatically repairing damaged hardware",
    "Supporting collaboration"
  ],
  type: "MCQs",
  correctAnswer: "Automatically repairing damaged hardware"
},
{
  question: "Why is a Version Control System important in software development?",
  choices: [
    "It allows developers to track changes and collaborate efficiently",
    "It permanently deletes old versions of files",
    "It replaces programming languages",
    "It increases internet speed"
  ],
  type: "MCQs",
  correctAnswer: "It allows developers to track changes and collaborate efficiently"
},
{
  question: "Which type of Version Control System stores versions on a single computer?",
  choices: [
    "Distributed Version Control System",
    "Centralized Version Control System",
    "Local Version Control System",
    "Cloud Version Control System"
  ],
  type: "MCQs",
  correctAnswer: "Local Version Control System"
},
{
  question: "Which of the following is an example of a Local Version Control System?",
  choices: [
    "Git",
    "Mercurial",
    "RCS",
    "Subversion"
  ],
  type: "MCQs",
  correctAnswer: "RCS"
},
{
  question: "Which Version Control System uses a central server to store all files and versions?",
  choices: [
    "Distributed Version Control System",
    "Local Version Control System",
    "Centralized Version Control System",
    "Hybrid Version Control System"
  ],
  type: "MCQs",
  correctAnswer: "Centralized Version Control System"
},
{
  question: "Which of the following is an example of a Centralized Version Control System?",
  choices: [
    "Git",
    "Mercurial",
    "CVS",
    "RCS"
  ],
  type: "MCQs",
  correctAnswer: "CVS"
},
{
  question: "Which Version Control System gives every user a complete copy of the repository?",
  choices: [
    "Centralized Version Control System",
    "Distributed Version Control System",
    "Local Version Control System",
    "Manual Version Control System"
  ],
  type: "MCQs",
  correctAnswer: "Distributed Version Control System"
},
{
  question: "Which of the following is an example of a Distributed Version Control System?",
  choices: [
    "RCS",
    "CVS",
    "Git",
    "SVN"
  ],
  type: "MCQs",
  correctAnswer: "Git"
},
{
  question: "Which advantage is unique to a Distributed Version Control System?",
  choices: [
    "No collaboration support",
    "Offline work capability",
    "Depends entirely on one central server",
    "Requires no local repository"
  ],
  type: "MCQs",
  correctAnswer: "Offline work capability"
},
]}