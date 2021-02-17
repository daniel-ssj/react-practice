import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { members } from './members'
import Member from './Member'

let Members = () => {
  return (
    <section className='members'>
      {members.map((m) => {
        return <Member key={m.id} {...m}></Member>
      })}
    </section>
  )
}

ReactDOM.render(<Members />, document.getElementById('root'))
