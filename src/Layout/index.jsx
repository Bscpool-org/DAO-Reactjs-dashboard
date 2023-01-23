import React from 'react'
import TopBar from './TopBar'
import Sidebar from './Sidebar'
import style from './style.module.scss'

// eslint-disable-next-line import/no-anonymous-default-export
export default function(props) {
  return (
    <div className={style.page}>
      <TopBar />
      <div className={style.columns}>
        <Sidebar />
        <div className={style.content}>{props.children}</div>
      </div>
    </div>
  )
}