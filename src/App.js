
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SiteNav from './layout/SiteNav';
import Home from './views/home/Home.jsx';
import Doctors from './views/doctors/Doctors.jsx'
import MedicalCenter from './views/medical center/MedicalCenter.jsx'
import ScanLabServices from './views/Scan&LabServices/ScanLabServices';
import { useTranslation } from 'react-i18next';

function App() {
  const {i18n}=useTranslation();
  return (
    <div className={i18n.language==="ar"?"rtl":"" }>
      
      <SiteNav/>
      <Routes>
        <Route path='/'element={<Home/>} ></Route>
        <Route path='/doctor'element={<Doctors/>} ></Route>
        <Route path='/medicalCenter'element={<MedicalCenter/>} ></Route>
        <Route path='/ScanLabServices'element={<ScanLabServices/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
