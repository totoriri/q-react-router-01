import React from 'react'

const SecondChild = (props) => {
  console.log(props)
  console.log(props.match)
  console.log(props.match.params)
  console.log(props.match.params.id)
  const { id } = props.match.params;
  return (
    <div>
      <h1>secondChild page</h1>
      <h3>{id}</h3>
    </div>
  )
}

export default SecondChild
