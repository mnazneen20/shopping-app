import React from 'react'
import './popup.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function Popup(props) {
  return (
    <div className='popup'>
        <div className="popupimgcontainer">
            <img src={props.img} alt={props.title} className="popupimg" />
            <span className="popupclosebtn" onClick={() => props.closepopup(false)}><CloseRoundedIcon sx={{ fontSize: 30 }} /></span>
        </div>
    </div>
  )
}
