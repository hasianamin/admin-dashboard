import React, { useEffect } from 'react';
import * as Icon from 'react-bootstrap-icons'
import { CONVERT_DATE, SHORT_ID } from '../helpers';

const Card=(props)=>{
    return(
        <div className="card-container">
            <div className="card-header">
                <p>Personnel ID:<span> {SHORT_ID(props.data.login.uuid)}</span></p>
                <div className="btn-action">
                    <Icon.ThreeDots size={24}/>
                </div>
            </div>
            <div className="card-body">
                <div className="card-content">
                    <div className="card-img">
                        <img src={props.data.picture.large} alt={props.data.id.value}/>
                    </div>
                </div>
                <div className="card-content">
                    <div className="card-detail">
                        <p><b>Name</b></p>
                        <p>{`${props.data.name.first} ${props.data.name.last}`}</p>
                        <p><b>Telephone</b></p>
                        <p>{props.data.cell}</p>
                        <p><b>Birthday</b></p>
                        <p>{CONVERT_DATE(props.data.dob.date)}</p>
                        <p><b>Email</b></p>
                        <p>{props.data.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card