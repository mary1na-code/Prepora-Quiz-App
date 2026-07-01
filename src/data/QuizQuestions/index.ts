import { cos114 } from './cos-114'
import { cos112 } from './cos-112'
import { gst112 } from './gst-112'
import { gst114 } from './gst-114'
import { cos118 } from './cos-118'
import { cos118_2 } from './cos-118_2'
import { cos116 } from './cos-116'
import { cos102 } from './cos-102'
import { math102 } from './math102'
import { phy102 } from './phy102'
import { phy108 } from './phy108'
import { cos100 } from './cos-100'

// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single

type Choice = string
type CorrectAnswers = string[]

export type Question = {
  question: string
  choices: Choice[]
  type: 'MCQs' | 'boolean'
  correctAnswers: CorrectAnswers
  score: number
  rationale: string
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
  'COS 112': prepareTopic(cos112),
  'COS 114': prepareTopic(cos114),
  'COS 118': prepareTopic(cos118),
  'COS 118_2': prepareTopic(cos118_2),
  'COS 116': prepareTopic(cos116),
  'COS 102': prepareTopic(cos102),
  'MATH 102': prepareTopic(math102),
  'PHY 102': prepareTopic(phy102),
  'PHY 108': prepareTopic(phy108),
  'COS 100': prepareTopic(cos100),
}
