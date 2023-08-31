import React from 'react'
import StorageIcon from '@material-ui/icons/Storage';
import ArrowDropDownIcon from '@material-ui/icons/FolderOpen';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import {IconButton} from '@material-ui/core';
import"../../styles//Mainbody.css"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import doc_image from "../../images/doc_image.png";

function Mainbody() {
  return (
    <div className='mainBody'>
        <div className='mainbody_top'>
           <div className='mainbody_top_left' style={{fontSize: "16px",fontWeight:"500"}}>
            Recent Forms
           </div>
           <div className='mainbody_top_right'>
            <div className='main_top_centre' style={{fontSize: "16px",fontWeight:"500"}}>owned by anyone <ArrowDropDownIcon/></div>
               <IconButton>
                 <StorageIcon style={{ fontSize: '16px', color:"black"}}/>
               </IconButton>
               <IconButton>
                 <FolderOpenIcon style={{fontSize: '16px', color:'black'}}/>
               </IconButton>
           </div>

        </div>
        <div className='mainbody_docs'>
            <div className='doc_card'>
                <img src={doc_image} alt='pic' className='doc_image'></img>
                <div className='doc_card_content'/>
                   <h5> </h5>
                   <div className='doc_content'></div>
                   <div className='content_left'>
                     <StorageIcon style={{color:'white',fontSize:"12px",backgroundColor:"#6E2594",padding:"3px"}}></StorageIcon>
                   </div>
                   <MoreVertIcon/>
                    
            </div>
        </div>
    </div>
  )
}

export default Mainbody