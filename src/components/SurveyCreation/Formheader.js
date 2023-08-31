import React from 'react'
import form_image from '../../images/form_image.png'
import {FiStar, FiSettings} from "react-icons/fi"
import {AiOutlineEye} from 'react-icons/ai'
import { IconButton } from '@material-ui/core'
import avatarimage from "../../images/2.png"
import {IoMdFolderOpen} from "react-icons/io"

import ColorLensIcon from '@material-ui/icons/ColorLens';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import "./Formheader.css"

function Formheader() {
  return (
    <div className='form_header'>
        <div className='form_header_left'>
         <img src={form_image} alt='no' style={{height:"45px", width:"40px"}}/> 
         <input type='text' placeholder='Untitled form' className='form_name'></input>
         <IoMdFolderOpen className="form_header_icon" style={{ marginRight:"10px"}}/>
         <FiStar className="form_header_icon" style={{ marginRight:"10px"}}/>
         <span style={{fontSize:"12px", fontWeight:"600"}}> All changes saved in drive </span>
        </div>
    
        <div className="form_header_right"></div>
         <IconButton>
             <ColorLensIcon size="small" className='form_header_icon'/>
   
         </IconButton>
         <IconButton>
            <AiOutlineEye className="form_header_icon"/>
         </IconButton>
         <IconButton>
            <FiSettings className="form_header_icon"/>
         </IconButton>
         <IconButton>
         <Button variant="contained" color="primary" href='#contained-buttons'>Send</Button>
         </IconButton>
         <IconButton>
            <MoreVertIcon className='form_header_icon'/>
         </IconButton>
         <IconButton>
              <Avatar style={{height:"30px", width:"30px"}} src={avatarimage}/>
         </IconButton>

    </div>
  )
}

export default Formheader