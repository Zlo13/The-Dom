import React, {useEffect, useState} from "react";
import classes from './AnimationScreen.module.css'

const AnimationScreen = () => {

  const [cls, setCls] = useState([classes.AnimationScreen])

  useEffect(() => {
    setTimeout(()=>{
      setCls([
        classes.AnimationScreen,
        classes.hide
      ])
    },2000)
    setTimeout(()=>{
      setCls([
          ...cls,
        classes.close
      ])
    },4000)
  },[])

  return(
    <div className={cls.join(' ')}>
      <h2 className={classes.title}>
        <p>Your best way</p>
        <p>to perfect home</p>
        <div className={classes.line}/>
      </h2>
      <div className={classes.logo}></div>
      <div className={[classes.marbleBlack, classes.moveBox].join(' ')}> </div>
      <div className={[classes.marbleWhite, classes.moveBox].join(' ')}> </div>
      <div className={[classes.concrete, classes.moveBox].join(' ')}> </div>
      <div className={[classes.onix, classes.moveBox].join(' ')}> </div>

    </div>
  )
}

export default AnimationScreen