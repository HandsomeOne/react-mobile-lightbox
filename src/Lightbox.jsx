import React, { Component, PropTypes as T } from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import Matrix from './Matrix'
import $ from './style.css'

export default class Lightbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      visible: false,
    }
    this.openModal = this.openModal.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleDoubleClick = this.handleDoubleClick.bind(this)
  }
  componentDidMount() {
    this.swiper = new Swiper(this.lightbox, {
      zoom: true,
      pagination: this.pagination,
      spaceBetween: 20,
    })
  }
  openModal(i) {
    this.swiper.slideTo(i, 0)
    this.setState({
      visible: true,
    })
  }
  handleClick() {
    if (this.closeTimeout === undefined) {
      this.closeTimeout = setTimeout(() => {
        this.setState({
          visible: false,
        })
        delete this.closeTimeout
      }, 500)
    }
  }
  handleDoubleClick() {
    clearTimeout(this.closeTimeout)
    delete this.closeTimeout
  }

  render() {
    const { images } = this.props
    return (<div style={this.props.style}>
      <Matrix images={images} handleClick={this.openModal} />
      <div
        className={$.modal}
        ref={(e) => { this.modal = e }}
        style={{ visibility: this.state.visible ? 'visible' : 'hidden' }}
        onClick={this.handleClick}
        onDoubleClick={this.handleDoubleClick}
      >
        <div className="swiper-container" ref={(e) => { this.lightbox = e }}>
          <div className="swiper-wrapper">{
            images.map((e, i) => <div
              key={i}
              className="swiper-slide"
            >
              <div className="swiper-zoom-container">
                <img src={e} />
              </div>
            </div>)
          }</div>
          <div className="swiper-pagination" ref={(e) => { this.pagination = e }} />
        </div>
      </div>
    </div>)
  }
}

Lightbox.propTypes = {
  images: T.arrayOf(T.string),
}
