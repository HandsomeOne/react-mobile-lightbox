import React, { Component, PropTypes as T } from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import $ from './style.css'

export default class Lightbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      visible: false,
    }
    this.closeModal = this.closeModal.bind(this)
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
  closeModal() {
    this.setState({
      visible: false,
    })
  }
  render() {
    const images = this.props.images
    return (<div style={this.props.style}>
      <div className={$.images}>{
        images.length === 1 ?
          <div
            className={$.large}
            onClick={() => this.openModal(0)}
            style={{ backgroundImage: `url(${images[0]})` }}
          /> :
          images.map((e, i) =>
            <div
              key={i}
              className={$.small}
              onClick={() => this.openModal(i)}
              style={{ backgroundImage: `url(${e})` }}
            />)
      }</div>
      <div
        className={$.modal}
        ref={(e) => { this.modal = e }}
        style={{ visibility: this.state.visible ? 'visible' : 'hidden' }}
        onClick={this.closeModal}
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
  style: T.object,
}
