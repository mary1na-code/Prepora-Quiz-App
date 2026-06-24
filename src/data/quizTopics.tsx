import { ReactNode } from 'react'
import Angular from '../assets/icons/angular.svg?react'
import CSS from '../assets/icons/css-3.svg?react'
import Django from '../assets/icons/dj.svg?react'
import Gatsby from '../assets/icons/gatsby.svg?react'
import JavaScript from '../assets/icons/javascript.svg?react'
import Kotlin from '../assets/icons/kotlin.svg?react'
import Laravel from '../assets/icons/laravel.svg?react'
import Python from '../assets/icons/python.svg?react'
import ReactIcon from '../assets/icons/react.svg?react'
import BulbIcon from '../assets/icons/bulb.svg?react'

type QuizTopic = {
  title: string
  icon: ReactNode
  disabled?: boolean
}

export const quizTopics: QuizTopic[] = [
  {
    title: 'GST 112',
    icon: <ReactIcon />,
  },
  {
    title: 'GST 114',
    icon: <JavaScript />,
  },
  {
    title: 'Python',
    icon: <Python />,
  },
  {
    title: 'COS 114',
    icon: <BulbIcon />,
  },
  {
    title: 'COS 116',
    icon: <Gatsby />,
    disabled: true,
  },
  {
    title: 'COS 118',
    icon: <Angular />,
    disabled: true,
  },
  {
    title: 'MTH 102',
    icon: <Django />,
    disabled: true,
  },
  {
    title: 'COS 102',
    icon: <CSS />,
    disabled: true,
  },
  {
    title: 'PHY 102',
    icon: <Kotlin />,
    disabled: true,
  },
  {
    title: 'PHY 108',
    icon: <Laravel />,
    disabled: true,
  },
]
