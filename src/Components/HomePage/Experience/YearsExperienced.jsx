import React from 'react'
import CountUp  from "react-countup";

const YearsExperienced = () => {
  return (
    <div className="Years">
        <div className="Years__Experienced">
            <span className="Accounting__Experience">
                <h1 id='CountUp'>
                <CountUp
                start={0}
                duration={5}
                end={10}
                /> </h1> <h2 id="Plus">+ Years</h2>
            </span>
            <h3 id="Expri">Experienced in Accounting</h3>
        </div>
    </div>
  )
}

export default YearsExperienced