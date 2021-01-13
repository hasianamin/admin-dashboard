import React from 'react';
import * as Icon from 'react-bootstrap-icons'

const Sidebar=()=>{


    return(
        <div className='sidebar' id='nav-menu'>
            <div className="sidebar-items">
                <div className="sidebar-item">
                    <Icon.House size={22}/>
                    <p>Beranda</p>
                </div>
                <div className="sidebar-item">
                    <Icon.PeopleFill size={22}/>
                    <p>Personnel List</p>
                </div>
                <div className="sidebar-item">
                    <Icon.CalendarWeek size={22}/>
                    <p>Daily Attendance</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar