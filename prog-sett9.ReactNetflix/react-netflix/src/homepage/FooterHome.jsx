import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './FooterHome.css'

const FooterHome = () => {
    return (
        <>
        <Container className='FooterContainer mb-3'>
            <Row>
                <div className="d-flex mt-5">
                    <i className="bi bi-facebook color-secondary text-secondary pe-3"></i>
                    <i className="bi bi-instagram color-secondary text-secondary pe-3"></i>
                    <i className="bi bi-twitter color-secondary text-secondary pe-3"></i>
                    <i className="bi bi-youtube color-secondary text-secondary pe-3"></i>
            </div>
            </Row>
            <Row className='my-3'>
                <Col className='myUl'>
                    <ul>
                        <li className='text-secondary pb-1'>Audio and Subtitle</li>
                        <li className='text-secondary pb-1'>Media Center</li>
                        <li className='text-secondary pb-1'>Privacy</li>
                        <li className='text-secondary'>Contact Us</li>
                    </ul>
                </Col>
                <Col className='myUl'>
                    <ul>
                    <li className='text-secondary pb-1'>Audio description</li>
                    <li className='text-secondary pb-1'>Investor Relation</li>
                    <li className='text-secondary'>Legal Notices</li>
                    </ul>
                </Col>
                <Col className='myUl'>
                    <ul>
                    <li className='text-secondary pb-1'>Help Center</li>
                    <li className='text-secondary pb-1'>Jobs</li>
                    <li className='text-secondary'>Cookie Preferences</li>
                    </ul>
                </Col>
                <Col className='myUl'>
                    <ul>
                    <li className='text-secondary pb-1'>Gift card</li>
                    <li className='text-secondary pb-1'>Terms of Use</li>
                    <li className='text-secondary'>Corporate information</li>
                    </ul>
                </Col>
            </Row>
            <Row className='d-flex flex-column gap-3'>
                <Col>
                <Button variant="outline-secondary rounded-0" size="sm">Service Code</Button>
                </Col>
                <Col>
                <small className="text-secondary">@ 1997-2019 Netflix, inc. i-0d00fcda2fdf9c0de</small>
                </Col>
            </Row>
        </Container>
            
        </>
        
    )
}

export default FooterHome