import React from 'react'

export default function About() {
  return (
    <div className="container my-3">

        <div className="accordion" id="accordionExample">
            <h1>About Us</h1>
        <div className="card">
            <div className="card-header" id="headingOne">
            <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Reason For This Website
                </button>
            </h2>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body">
            DATA BASE PROJECT 20K-0200  20K-0368    20K-0241
            </div>
            </div>
        </div>
        
    </div>
    </div>
  )
}
