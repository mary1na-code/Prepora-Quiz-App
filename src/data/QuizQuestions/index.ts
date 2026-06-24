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

export const quiz: Record<string, Topic> = {
  'GST 112': gst112,
  'GST 114': gst114,
  'COS 112': python,
  'COS 114': cos114,
}
