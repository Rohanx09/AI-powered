import React from 'react'
import state from '../store'; // retreating color from here 
import { useSnapshot } from 'valtio';

const CustomButton = ({ type, title, customStyles, handleClick}) => {
  
  const snap = useSnapshot(state);  
  const generateStyle = (type) => {
    if(type === "filled") {
        return {
            backgroundColor: snap.color,
            color: 'white',

        }
    }
  }
    return (
    <button className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
            style={generateStyle(type)}
            onClick={handleClick}>{/* on clicking take us to customizer page cause handle click = false*/}
      {title}
    </button>
  )
}

export default CustomButton
