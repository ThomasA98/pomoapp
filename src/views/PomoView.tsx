import React from 'react'
import { TimeCounter } from '../components/TimeCounter'

interface PomoViewProps {
  isVisible: boolean
}

const PomoView: React.FC<PomoViewProps> = ({ isVisible }) => {

  return (
    <section className='view' hidden={ !isVisible }>
        <TimeCounter />
    </section>
  )
}

export default PomoView