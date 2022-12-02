import React, {useRef, useState} from 'react'


const Box = (props) => {

    const mesh = useRef();

  return (
    <mesh {...props} ref={mesh} onClick={(e) => {
        props.setBoxSelected(mesh.current.position)
    }}>
        <boxGeometry args={[1.4,1.7,1]} />
        <meshStandardMaterial color={"purple"} />
    </mesh>
  )
}

export default Box