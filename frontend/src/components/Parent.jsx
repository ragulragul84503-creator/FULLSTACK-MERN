// import React from 'react'

import Child from "./Child"

const Parent = () => {
  return (
    <div>
        <Child name="ragul" age={18} marks={[90,80,70,60,50]} person={{name:"rex",dept:["ct"]}}/>
    </div>
  )
}

export default Parent
