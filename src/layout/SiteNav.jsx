import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap'
import {  NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import './SiteNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import  i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import logo from '../assets/Learning-from-30-of-the-Worlds-Most-Famous-Logos.jpg'




let handelLanguage=()=>{
  i18n.changeLanguage(i18n.language==="en"?"ar":"en")
}


export default function SiteNav() {
  const {t}=useTranslation();
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" className='logo'><img src={logo} alt="logo" /></Navbar.Brand>
          <Nav className="me">
            <NavLink to="/" className="nav-link">{t('Home')}</NavLink>
            <NavLink to="/doctor" className="nav-link">{t("Doctor")}</NavLink>
            <NavLink to="/medicalCenter" className="nav-link">{t('Medical Center')}</NavLink>
            <NavLink to="/ScanLabServices" className="nav-link"> {t('Scan & Lab Services')}</NavLink>
          </Nav>
          <Nav>
          <Form.Control
              type="text"
              placeholder={t('Search')}
              className="w-2"
            />
            <FontAwesomeIcon icon={faLanguage}
            onClick={handelLanguage}
            className='icon'
            size='2x'
          />
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
