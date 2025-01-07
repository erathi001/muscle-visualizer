import React from 'react'


interface BodyPartProps {
  path: React.ReactNode;
  id: string;
}


function BodyPart(props:BodyPartProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <svg 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      fill={isHovered? "red":"white"}
    >
      {props.path}
    </svg>
  )
}

export default BodyPart