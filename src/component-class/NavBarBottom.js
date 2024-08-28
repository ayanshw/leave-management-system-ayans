import React from 'react'

import GroupDescription from './GroupDescription';

export default function NavBarBottom() {
    
    return (
        <>
            <nav className="navbar fixed-bottom bg-secondary-subtle py-0 ">
                <div className="container-fluid">
                    <span className="navbar-text text-black">
                        <strong >Designed by Students of DAITM with React.js 14.0.6. Page Version 1.0.0 </strong> <br />
                        All Rights Reserved © 2023
                    </span>

                    <div className='d-flex flex-row-reverse'>
                        <button type="button" className="btn btn-link me-1" style={{textDecorationLine:'none', color:'red'}} data-bs-toggle="modal" data-bs-target="#groupDescriptionModal">MEET THE TEAM</button>
                    </div>
                </div>
            </nav>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="groupDescriptionModal" tabIndex="-1" aria-labelledby="groupModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="groupModalLabel">THE TEAM</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <GroupDescription />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
