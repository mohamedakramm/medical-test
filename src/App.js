
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SiteNav from './layout/SiteNav';
import Home from './views/home/Home.jsx';
import PageDoctors from './views/doctors/PageDoctors.jsx'
import MedicalCenter from './views/medical center/MedicalCenter.jsx'
import ScanLabServices from './views/Scan&LabServices/ScanLabServices';
import { useTranslation } from 'react-i18next';
// import SearshBar from './Componant/Searsh/SearshBar.jsx';
import Doctordetails from './Componant/doctors/Doctordetails.jsx';
import Labdetails from './Componant/Labtor/Labdetails.jsx';
import Phydetails from './Componant/physiotherapy/Phydetails.jsx';


function App() {
  const {i18n}=useTranslation();
  return (
    <div className={i18n.language==="ar"?"rtl":"" }>

      <SiteNav/>
      <Routes>
        <Route path='/'element={<Home/>} ></Route>
        <Route path='/doctor'element={<PageDoctors/>} ></Route>
        <Route path='/medicalCenter'element={<MedicalCenter/>} ></Route>
        <Route path='/ScanLabServices'element={<ScanLabServices/>} ></Route>
        {/* <Route path="/doctor/:query" element={<SearshBar/>} /> */}
        <Route path="/doctor/:doctorId" element={<Doctordetails/>} />
        <Route path="/ScanLabServices/:labId" element={<Labdetails/>} />
        <Route path="/medicalCenter/:phyId" element={<Phydetails/>} />
      </Routes>
    </div>
  );
}

export default App;
