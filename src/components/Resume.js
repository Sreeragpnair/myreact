import React, { Fragment } from 'react'
import { SiCodechef, SiHackerrank } from 'react-icons/si';

function Resume() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">Sreerag Parakkal</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">EDUCATION</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Diploma In Electronics Engineering</h4>
                                <h6 className="blue-label px-2 py-1">2016-2019</h6>
                                <p className="m-0">Govt. Polytechnic College chelakkara</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        
                        <h4 className="ff-jose ls-2">Courses</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Full Stack Developer</h4>
                                <h6 className="blue-label px-2 py-1">2022-2023</h6>
                                <p className="m-0">Entri Elevate</p>
                            </li>
                        </ul>

                    </div>
                </div>

                <hr></hr>
                
            </div>
        </div>
    </Fragment>
  )
}

export default Resume