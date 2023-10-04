import {Container, Row, Col} from 'react-bootstrap'
import {semuaPaket} from '../data/index'

import FaqComponent from '../components/FaqComponent'

const PaketPage = () => {
return (
<div className="kelas-page">
  <div className='kelas min-vh-100'>
    <Container>
      <Row>
        <Col>
        <h1 className='fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s'>Semua Paket Wisata</h1>
        <p className='text-center animate__animated animate__fadeInUp animate__delay-1s'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, maiores!</p>
        </Col>
      </Row>
      <Row>
        {semuaPaket.map((paket)=>{
        return(
        <Col key={paket.id} className='shadow rounded'  data-aos="fade-up" 
        data-aos-duration='1000' data-aos-delay= {paket.delay} >
        <img src={paket.image} alt="unsplash.com" className='w-100 mb-5 rounded-top' />
        <h5 className='mb-5 px-3'>{paket.title}</h5>
        <p className='px-3'>{paket.desc}</p>
        <div className='ket d-flex justify-content-between align-items-center px-3 pb-3'>
          <p className='m-0 text-primary fw-bold'>{paket.price}</p>
          <button className='btn btn-danger rounded-1'>{paket.buy}</button>
        </div>
        </Col>
        );
        })}
      </Row>
    </Container>
  </div>
  <FaqComponent />
</div>
)
}

export default PaketPage