import React from 'react'


interface BodyPartProps {
  path: React.ReactNode;
  id: string;
}


function BodyPart(props:BodyPartProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const colors: Map<string,string> = new Map([['traps','red'], ['delts','orange'],['chest','yellow'],['abs','#01E3EA'],['biceps','#75E702'],['forearms','#3A7003'],['thighs','#0010B6'],['calves','#7000B6']])

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