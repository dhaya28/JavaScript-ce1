import React from 'react'

export default function DefaultProps(props) {
  return (
    <div>
      <h1>Default Props</h1>
      <p>The default value is {props.name}</p>
    </div>
  )
}
DefaultProps.defaultProps={
    name:'skct'
}