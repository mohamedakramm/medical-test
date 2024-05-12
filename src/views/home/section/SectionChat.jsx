import React from 'react'
import { Container, Row } from 'react-bootstrap'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faFacebook ,faTwitter ,faInstagram  ,faVolumeXmark} from '@fortawesome/free-solid-svg-icons'

export default function SctionChat() {
  return (
    <div style={{height:'201px'}}>
        <Container style={{marginTop:'150px'}}>
            <Row lg='2' md='2' sm='12'>
                <div style={{margin:'auto',textAlign:'center'}}>
                    <h1>let's chat</h1>
                </div>
                <div  style={{margin:'auto',textAlign:'center'}}>
                    <div style={{height:'62px'}}>
                        phone <br />
                        <span style={{marginTop:'20px'}}>
                            (123) 456-789
                        </span>

                    </div>
                    <div style={{height:'62px'}}>
                        email <br />
                        <span>
                            hello@gmail.com
                        </span>

                    </div>
                    <div>
                        social
                        <div>
                        {/* <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} />*/}
                        <FontAwesomeIcon icon={faVolumeXmark}/> 
                        
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}
