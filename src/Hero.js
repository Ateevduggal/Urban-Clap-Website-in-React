import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row hero-section">
                <nav className="navbar navbar-expand-md">
                    <div className="container-fluid">
                        <a className="navbar-brand w-25" href="/">
                            <img src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png" alt="UC" className="w-50" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <a className="nav-link" href="#">Blog</a>
                            <a className="nav-link line" href=" https://partner.urbancompany.com/?utm_source=Customer_web&utm_campaign=header&utm_medium=homepage" target="_blank">Register As A Professional</a>
                            <a className="nav-link" href="#">Login / Signup</a>
                        </div>
                        </div>
                    </div>
                    </nav>

                    <div className="col-12 text-center fw-lighter mt-5 pt-5">
                        <a href="/" className="nav-link">Home / Delhi-Ncr</a>
                    </div>
                    <div className="my-4 col-12 text-center text-white h1">Home services, on demand.</div>
                    
                    <div className="d-flex col-12" id="input-fields">
                    <div className="col-md-2 col-sm-2">
                        <div class="input-group">
                            <div className="input-group-text">
                            <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <input class="form-control" type="text" />
                            <button type="button" class="btn btn-lg btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu">
                            <div id="dropdown-list">
                            <i className="fas fa-map-marker-alt"></i> Current Location
                            <a href="#" className="see ">Detect Using GPS</a>
                            </div>
                            <br />
                            <div id="dropdown-list">
                                <i className="fas fa-search"></i>
                                <input type="text" placeholder="Search for Society / Apartment" id="input-dropdown" />
                            </div>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-5">
                    <div className="input-group ">
                        <div className="input-group-text">
                        <i className="fas fa-search"></i>
                        </div>
                        <input type="text" className="form-control form-control-lg" id="autoSizingInputGroup" placeholder="Location..." />
                        </div>
                    </div>
                    </div>
                    <div className="col-12 text-center d-flex justify-content-center mt-2 link-field">
                       <a href="#" className="text-lighter text-white">Solon for Men</a>,
                       <a href="#" className="text-lighter text-white">&nbsp;&nbsp;&nbsp;Spa for Women</a>,
                        <a href="#" className="text-lighter text-white">&nbsp;&nbsp;&nbsp;Massage for Men,</a> 
                        <span className="text-lighter text-white">&nbsp;&nbsp;&nbsp;etc</span>
                   </div>

                </div>
            </div>
        </>
    )
}

export default Hero
