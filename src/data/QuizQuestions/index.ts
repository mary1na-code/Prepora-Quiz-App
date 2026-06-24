import { cos114 } from './cos-114'
import { gst112 } from './gst-112'
import { gst114 } from './gst-114'
import { python } from './python'

// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

type Choice = string
type CorrectAnswers = string[]

export type Question = {
  question: string
  choices: Choice[]
  type: 'MCQs' | 'MAQs' | 'boolean'
  correctAnswers: CorrectAnswers
  score: number
  code?: string
  image?: string
}

export type Topic = {
  topic: string
  level: string
  totalQuestions: number
  totalScore: number
  totalTime: number
  questions: Question[]
}

// function to automate questions count and total score calculation for each topic
function prepareTopic(topic: Topic): Topic {
  return {
    ...topic,
    totalQuestions: topic.questions.length,
    totalScore: topic.questions.reduce(
      (sum, question) => sum + question.score,
      0
    ),
  }
}

export const quiz: Record<string, Topic> = {
  'GST 112': prepareTopic(gst112),
  'GST 114': prepareTopic(gst114),
  'COS 112': prepareTopic(python),
  'COS 114': prepareTopic(cos114),
}
