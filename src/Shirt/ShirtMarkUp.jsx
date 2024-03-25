import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useState } from 'react'
import Shirt from './Shirt'


const ShirtMarkUp = ({mangaDerColor, espaldaColor, frenteColor, cuelloColor, mangaIzqColor, uploadedImage, selectedFilter, savedImage }) => {

  return (
    <div className="col-span-1 flex-grow">
      <Canvas> 
        <ambientLight intensity={0.9} />
        <pointLight position={[30, 10, 20]} decay={0} intensity={Math.PI * 1} />
        <pointLight position={[-30, 10, 20]} decay={0} intensity={Math.PI * 1} />
        <OrbitControls />
        <Shirt uploadedImage={uploadedImage} position={[.2, .5, .7]} rotation={[.1,.3,0]} 
         colors={{mangaDerColor, espaldaColor, frenteColor, cuelloColor, mangaIzqColor }} 
         selectedFilter={savedImage ? savedImage.filter : ''}
        savedImage={savedImage ? savedImage.image : null}
         />
      </Canvas>
    </div>
  )
}

export default ShirtMarkUp