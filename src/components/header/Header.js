import React from 'react'
import "./Header.scss"

import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import BrowseGalleryRoundedIcon from '@mui/icons-material/BrowseGalleryRounded';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';


function Header() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <a className="navbar-brand d-flex align-items-center" href="#">
                  <BrowseGalleryRoundedIcon className="me-2" color="primary" sx={{fontSize: 30}}/>
            </a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">

                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>

                </ul> */}
            </div>

            <span className='d-flex me-1'>
                  <span>
                    <ThemeSwitcher  />
                </span>
                {/* <span>
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>BÖ</Avatar>
                </span> */}
            </span>
        </div>
    </nav>
  )
}

export default Header