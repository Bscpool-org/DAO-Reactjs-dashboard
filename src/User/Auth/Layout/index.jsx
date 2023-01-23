import React from 'react'
import logo from 'assets/images/logo.png'
import cn from 'classnames'
import style from './style.module.scss'



// eslint-disable-next-line import/no-anonymous-default-export
export default ({children, className}) =>
  <div className={style.page}>
    <div className={cn(style.wrap, className)}>
      <img className={style.logo} src={logo} alt="logo"/>
      {children}
    </div>
  </div>
