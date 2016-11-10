import React, { PropTypes as T } from 'react'
import $ from './style.css'

export default function Matrix(props) {
  if (props.images.length === 1) {
    return (
      <div className={$.images}>
        <div
          className={$.large}
          onClick={() => props.handleClick(0)}
          style={{ backgroundImage: `url(${props.images[0]})` }}
        />
      </div>
    )
  }

  const column = props.images.length === 4 ? 2 : 3
  const groups = []
  let p = 0
  while (p < props.images.length) {
    groups.push(props.images.slice(p, p + column))
    p += column
  }

  return (
    <div className={$.images}>{
      groups.map((images, i) =>
        <div className={$.row}>{
          images.map((img, j) =>
            <div
              key={(i * column) + j}
              className={$.small}
              onClick={() => props.handleClick((i * column) + j)}
              style={{ backgroundImage: `url(${img})` }}
            />
          )
        }</div>
      )
    }</div>
  )
}

Matrix.propTypes = {
  images: T.arrayOf(T.string),
}
