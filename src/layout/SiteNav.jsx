import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import {  NavLink, useNavigate } from 'react-router-dom';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/WhatsApp Image 2024-04-26 at 01.30.25_857b4d36.png';
import './SiteNav.css';
import Dropdown from 'react-bootstrap/Dropdown';

const handleLanguage = () => {
  i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
};

export default function SiteNav() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const goToLoginPage = () => {
    navigate("/login");
  };
  const goToProfilePage = () => {
    navigate("/Profile");
  };
  const goToDashboardPage = () => {
    navigate("/Dashboard");
  };

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/');
    }
  }, [navigate]);


  const { t } = useTranslation();

  return (
    <>
      <Navbar expand="md" className=" custom-navbar">
        <Container>
          <Navbar.Brand href="#home" className='logo'><img src={logo} alt="logo"  className="navbar-logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me">
              <NavLink to="/" className="nav-link">{t('Home')}</NavLink>
              <NavLink to="/doctor" className="nav-link">{t("Doctors")}</NavLink>
              <NavLink to="/ScanLabServices" className="nav-link">{t('RADIOLOGY&TEST')}</NavLink>
              <NavLink to="/medicalCenter" className="nav-link"> {t('PHSIOTHERAPY')}</NavLink>
              <NavLink to="/" className="nav-link"> {t('Ai Help')}</NavLink>
            </Nav>
            <Nav className="search-and-lang">
              <FontAwesomeIcon icon={faLanguage}
                onClick={handleLanguage}
                className='icon'
                size='2x'
              />
              {!user ? (
                <Button onClick={goToLoginPage}>Sign In</Button>
              ) : (
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {user.name}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={goToProfilePage}>My Profile</Dropdown.Item>
                    {user.role ==="admin" ? 
                    
                    <Dropdown.Item onClick={goToDashboardPage}>Dashboard</Dropdown.Item>
                    :
                    null
                      }
                    <Dropdown.Item  onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}


//heba omran