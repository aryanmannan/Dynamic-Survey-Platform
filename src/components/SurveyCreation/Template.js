import React from 'react'
import MorevertIcon from "@material-ui/icons/MoreVert"
import {IconButton} from "@material-ui/core"
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore"
import "../../styles/Template.css"

import blank from "../../images/blank.png"
import party from "../../images/party.png"
import contact from "../../images/contact.png"
import uuid from "react-uuid"
import {useHistory} from 'react-router-dom';

function Template() {
    const history= useHistory();
    const createForm=()=>{
        const id_=uuid();
        
        history.push("/form/"+id_)

    }
  return (
    <div className='template_section'>
        <div className='template_top'>
            <div className='template_left'>
               <span style={{fontSize:"16px",color:"#202124"}}> start New Form</span>  
            </div>
            <div className='template_right'>
                <div className='gallery_button'>
                     Template gallery
                     <UnfoldMoreIcon/>
                </div>
                <IconButton>
                    <MorevertIcon/>
                </IconButton>
            </div>
        </div>
        <div className='template_body'>
            <div className='card' onClick={createForm}>
                <img src={blank} alt="no" className='card_image'/>
                <p className="card_title">Blank</p>
            </div>
             <div className='card'>
                <img src={party} alt="no" className='card_image'/>
                <p className="card_title">Party Invite</p>
            </div>
             <div className='card'>
                <img src={contact} alt="no" className='card_image'/>
                <p className="card_title">Contact Information</p>
             </div>

        </div>
    </div>
  )
}

export default Template