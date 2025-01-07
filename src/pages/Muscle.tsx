import React from 'react'

interface MuscleProps {
    muscle: string;
}

function Muscle(props: MuscleProps) {
  return (
    <div>{props.muscle}</div>
  )
}

export default Muscle