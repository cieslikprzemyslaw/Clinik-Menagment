import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserMd, faUserInjured, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {

    const [value, setValue] = useState(0);

    return (
        <section className="menu">
                <BottomNavigation
                value={value}
                onChange={(e, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                >
                    <BottomNavigationAction 
                    component={Link}
                    to="/home"
                    label="home" 
                    value="home"
                    icon={<FontAwesomeIcon className="menu__icon" icon={faHome}/>}
                    className="menu__links"
                    />
                    <BottomNavigationAction 
                    component={Link}
                    to="/doctors"
                    label="doctors" 
                    value="doctors"
                    icon={<FontAwesomeIcon className="menu__icon" icon={faUserMd}/>}
                    className="menu__links"
                    />
                     <BottomNavigationAction 
                    component={Link}
                    to="/patients"
                    label="patients" 
                    value="patients"
                    icon={<FontAwesomeIcon className="menu__icon" icon={faUserInjured}/>}
                    className="menu__links"
                    />
                    <BottomNavigationAction 
                    component={Link}
                    to="/appoitments"
                    label="appoitments" 
                    value="appoitments"
                    icon={<FontAwesomeIcon className="menu__icon" icon={faCalendarCheck}/>}
                    className="menu__links"
                    />
                </BottomNavigation>
            </section>   
    );
}

export default NavBar;