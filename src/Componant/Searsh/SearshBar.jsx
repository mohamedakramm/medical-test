import React, { useEffect, useState } from 'react'
import { Container, Row ,Form, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import '../Searsh/searshBar.css';
import {  useParams  } from 'react-router-dom';

export default function SearshBar() {
    const {t}=useTranslation();
    const [value,setValue]=useState('')
    const [data ,setData]=useState([])

    // const history = useHistory();
    
    const { query } = useParams('');

    const getData=()=>{
      fetch('http://localhost:4444/docA')
      .then(json =>json.json())
      .then(res=>setData(res) )
    }
  useEffect(()=>
 getData(query)
,[query])
    const onChange=(e)=>{
      setValue(e.target.value)
    
     
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      query.push(`/docA/${value}`);
    };
  
  return (
    <div>
        <div >
            <Container  className='divSearch'>
                <Row>
                  <h1 style={{color:'white' ,marginTop:'10px'}}>CareQuick</h1>
                    <Form style={{display:'flex'}} onSubmit={handleSubmit}>
                    <Form.Control
                            type="text"
                            placeholder={t('Search')}
                            className="searsh"
                            value={value}
                            onChange={onChange }
                        />
                        <Button className='btnSearch' type='submit' >Search</Button>
                    </Form>
                      <div>
                           
                            <ul>
                              <h1> search for "{query}"</h1>
                              {
                                value &&
                                data.filter(item=> item.speciall.toLowerCase().startsWith(value) && item.speciall !== value)
                                .map( item=>
                                  <li key={item.index} onClick={(e) =>{
                                    setValue(item.speciall)
                                  }}>{item.speciall} </li>
                              
                                )
                              }
                              
                            </ul>
                    </div>
                </Row>
            </Container>
        </div>

    </div>
  )
}
