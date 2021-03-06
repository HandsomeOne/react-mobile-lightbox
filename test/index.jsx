import React from 'react'
import ReactDOM from 'react-dom'
import Lightbox from '../src/Lightbox'
import $ from './style.css'

ReactDOM.render(
  (<div>
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
        style={{
          outline: '1px solid red',
        }}
      />
    </div>
    <div className={$.container}>
      <Lightbox
        images={[
          '1.jpg',
          '2.jpg',
          '3.jpg',
          '4.jpg',
        ]}
        style={{
          margin: '30px 0',
        }}
      />
    </div>
    <div className={$.container}>
      <Lightbox
        images={[
          '1.jpg',
        ]}
      />
    </div>
  </div>), document.getElementById('root'))
