import React from 'react'
import { BookInterface } from '../../types'

interface CurrentlyReadingProps {
    books:BookInterface[]
}
export const CurrentlyReading:React.FC<CurrentlyReadingProps> = () => {
  return (
    <div>CurrentlyReading</div>
  )
}
