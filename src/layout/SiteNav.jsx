import { Container,Nav,Navbar,Form} from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import  i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/Learning-from-30-of-the-Worlds-Most-Famous-Logos.jpg'
import './SiteNav.css';
let handelLanguage=()=>{
  i18n.changeLanguage(i18n.language==="en"?"ar":"en")
}

export default function SiteNav() {
  const {t}=useTranslation();
  return (
    <Navbar expand="md" className="bg-body-tertiary">
    <Container>
    <Navbar.Brand href="#home" className='logo'><img src={logo} alt="logo" /></Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me">
                  <NavLink to="/" className="nav-link">{t('Home')}</NavLink>
                  <NavLink to="/doctor" className="nav-link">{t("Doctors")}</NavLink>
                  <NavLink to="/ScanLabServices" className="nav-link">{t('RADIOLOGY&TEST')}</NavLink>
                  <NavLink to="/medicalCenter" className="nav-link"> {t('PHSIOTHERAPY')}</NavLink>
                </Nav>
        <Nav style={{marginLeft:'70px'}}>
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
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
