import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import debounce from 'lodash.debounce'

const ScrollToTopBtn = () => {
  const [isShow, setIsShow] = useState(false)
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  const scrollFunc = () => {
    let y = window.scrollY

    if (y > 200) {
      setIsShow(true)
    } else {
      setIsShow(false)
    }
  }
  const scrollFuncDebounced = debounce(scrollFunc, 200)

  useEffect(() => {
    window.addEventListener('scroll', scrollFuncDebounced)
    return () => {
      window.removeEventListener('scroll', scrollFuncDebounced)
    }
  }, [])

  return (
    isShow ?
      (
        <div onClick={scrollToTop} className="ant-back-top">
          <div className="ant-back-top-content">
            <div className="ant-back-top-icon"/>
          </div>

          <style jsx>{styles}</style>
        </div>
      )
      : null
  )
}

ScrollToTopBtn.propTypes = {}

export default ScrollToTopBtn
