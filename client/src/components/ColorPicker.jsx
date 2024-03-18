import React from 'react'
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';


import state from '../store';
import { color } from 'framer-motion';

const ColorPicker = () => {
  const snap = useSnapshot(state);
  
  return (
    <div className="absolute left-full ml-1">
      <SketchPicker
          color={snap.color}
          disableAlpha
          //presetColors={[ "red" , "blue" , "green", "yellow" , "black" , "grey" , 'aqua']} can use them for fixed coloe or it suggest color on own 
          onChange={(color) => state.color = color.hex}// for changing the color
          />
      
    </div>
  )
}

export default ColorPicker
