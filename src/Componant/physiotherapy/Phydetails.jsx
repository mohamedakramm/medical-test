import React from 'react'
import { useEffect ,useState } from 'react';
import { useParams } from 'react-router-dom'
import { Button, Col, Container, Row } from 'react-bootstrap';
import SinglePhysiotherapy from './SinglePhysiotherapy';
import AppoinmentPhy from './../appoinment/AppoinmentPhy'
export default function Phydetails() {
    let params=useParams() 

    let [data ,setData]=useState([]) ;

 
    const getData=()=>{
       fetch(`http://localhost:2244/Phsiotherapy/${params.phyId}` )
       .then(json=>json.json())
       .then(res=>setData(res))
    }
   useEffect(()=>
   
   getData(),
   []
   )
   const [currentDate, setCurrentDate] = useState(new Date());
   const [nextDate, setNextDate] = useState(null);
   const [nextNextDate, setNextNextDate] = useState(null);
   
   useEffect(() => {
     const currentDateObj = new Date();
     setCurrentDate(currentDateObj);
   
     // Calculate next date
     const nextDateObj = new Date(currentDateObj);
     nextDateObj.setDate(currentDateObj.getDate() + 1);
     setNextDate(nextDateObj);
   
     // Calculate next next date
     const nextNextDateObj = new Date(currentDateObj);
     nextNextDateObj.setDate(currentDateObj.getDate() + 2);
     setNextNextDate(nextNextDateObj);
   }, []);
   
   const getShortDay = (date) => {
     return date.toLocaleDateString('en-US', { weekday: 'short' }).substring(0, 3);
   };
   const [showForm, setShowForm] = useState(false);
   
   const handleShowForm = () => setShowForm(true);
   const handleCloseForm = () => setShowForm(false);
  
  return (
    <div>
         <Container>
        <Row      lg='2' md='2' sm='12'>

          
           
            <SinglePhysiotherapy  key={data.id} phy={data}/>

              <Col>
              
              <div className='ava'>
                <h3>Available Appointments :</h3>
                <div>
                  <div className="date">
                    <div>
                      <h5> {getShortDay(currentDate)} <br /> {currentDate.getDate()}</h5>
                      <div className='avaa'>
                        <span>Available</span>  <br />
                        <span>12 pm</span><br />
                        <span> 6 pm</span><br />
                        <span> 8 pm</span><br />
                      </div>
                    </div>
                    <div>
                      <h5> {nextDate && getShortDay(nextDate)} <br /> {nextDate && nextDate.getDate()}</h5>
                      <div className='avaa'>
                      <span>  Available </span> <br />
                        <span>12 pm</span> <br />
                        <span> 8 pm</span><br />
                        <span>6 pm</span><br />
                      </div>
                    </div>
                    <div>
                      <h5>{nextNextDate && getShortDay(nextNextDate)} <br /> {nextNextDate && nextNextDate.getDate()}</h5>
                      <div className='avaa'>
                        <span>Available</span> <br />
                        <span>12 pm</span> <br />
                        <span>8 pm</span> <br />
                        <span>6 pm</span> <br />
                      </div>
                    </div>
                  </div>
                </div>
                 <div className='bbb'> 
                      <Button onClick={handleShowForm}>Book</Button>
                      <AppoinmentPhy show={showForm} handleClose={handleCloseForm} phyId={data} />
                 </div>
              </div>
              </Col>
           
           
        </Row>
       </Container>
    </div>
  )
}
