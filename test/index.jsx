import React from 'react'
import ReactDOM from 'react-dom'
import Lightbox from '../src/Lightbox'
import $ from './style.css'

ReactDOM.render(
  (
    <div className={$.container}>
      <Lightbox
        images={[
          '1.jpg',
          '2.jpg',
          '3.jpg',
          '4.jpg',
          '5.jpg',
          '6.jpg',
          '7.jpg',
          '8.jpg',
          '9.jpg',
        ]}
      />
    </div>
  ), document.getElementById('root'))
