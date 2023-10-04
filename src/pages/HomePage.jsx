import {Container, Row, Col} from 'react-bootstrap'
import HeroImage from '../assets/img/hero.png'

import {paketTerbaru, dataSwiper, benefit, galeri} from '../data/index'
import {useNavigate} from 'react-router-dom'
import FaqComponent from '../components/FaqComponent'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const HomePage = () => {
let navigate = useNavigate();

return (
<div className="homepage">
  <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
    <Container>
      <Row className='header-box d-flex align-items-center pt-lg-5'>
        <Col lg="6">
        <h1 className='mb-4 animate__animated animate__fadeInUp animate__delay-1s'>Temukan <br /> <span>Wisata di Kota Malang</span> <br /> Bersama Kami!</h1>
        <p className='mb-4 animate__animated animate__fadeInUp animate__delay-1s'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis commodi sed quod fugit explicabo fugiat?
        </p>
        <button className='btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s' onClick={() => navigate('/paket')}>Lihat Destinasi</button>
        <button className='btn btn-outline-light btn-lg rounded-1 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s'>Pesan Sekarang</button>
        </Col>
      </Row>
    </Container>
  </header>
  <div className="kelas w-100 min-vh-100">
    <Container>
      <Row>
        <Col>
        <h1 className='text-center fw-bold'>Paket Destinasi</h1>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Col>
      </Row>
      <Row>
        {paketTerbaru.map((paket)=>{
        return(
        <Col key={paket.id} className='shadow rounded' data-aos="fade-up" 
        data-aos-duration='1000' data-aos-delay= {paket.delay}  >
        <img src={paket.image} alt="unsplash.com" className='w-100 mb-5 rounded-top' />
        <h5 className='mb-3 px-3'>{paket.title}</h5>
        <p className='px-3'>{paket.desc}</p>
        <div className='ket d-flex justify-content-between align-items-center px-3 pb-3'>
          <p className='m-0 text-primary fw-bold'>{paket.price}</p>
          <button className='btn btn-danger rounded-1'>{paket.buy}</button>
        </div>
        </Col>
        );
        })}
      </Row>
      <Row>
        <Col className='text-center'>
        <button className='btn btn-success rounded-5 btn-lg' 
        data-aos='fade-up' data-aos-duration='1000' onClick={() => navigate('/paket')}>Lihat Semua Destinasi
          <i className='fa-solid fa-chevron-right ms-1'></i>
        </button>
        </Col>
      </Row>
    </Container>
  </div>
  <div className="benefit w-100">
    <Container>
      <Row>
        <Col>
        <h1 className='text-left fw-bold my-5'>Mengapa harus Tinggal Jalan</h1>
        </Col>
        {benefit.map((benefit)=>{
          return(
        <Col key={benefit.id} data-aos="fade-up"
        data-aos-duration='1000' data-aos-delay={benefit.delay} >
        <img src={benefit.image} alt="benefit" className='w-80 mb-5 rounded px-3' />
        <h5 className='mb-2 px-3'>{benefit.title}</h5>
        <div className='desc d-flex justify-content-between align-items-center px-3 pb-3'>
          <p className='m-0'>{benefit.desc}</p>
        </div>
        </Col>

          );
        })}
      </Row>
    </Container>    
  </div>

  <div className="galeri w-100">
    <Container>
      <Row>
        <Col>
        <h1 className='text-center fw-bold my-5'>Gallery</h1>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Col>
      </Row>
      <Row>
      <Swiper slidesPerView={1} spaceBetween={10} pagination={{
          clickable: true,
        }} breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }} modules={[Pagination]} className="myGaleri">
          {galeri.map((data) => {
          return(
          <SwiperSlide key={data.id} className='shadow-sm'>
            <div className='photo'>
              <img src={data.image} alt="" />
            </div>
          </SwiperSlide>
          );
          })}
        </Swiper>

      </Row>
    </Container>
  </div>

  <div className="testimonial py-5">
    <Container>
      <Row>
        <Col>
        <h1 className='text-center fw-bold my-5'>Testimonial</h1>
        </Col>
      </Row>
      <Row>
        <Swiper slidesPerView={1} spaceBetween={10} pagination={{
          clickable: true,
        }} breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }} modules={[Pagination]} className="mySwiper">
          {dataSwiper.map((data) => {
          return(
          <SwiperSlide key={data.id} className='shadow-sm'>
            <p className='desc'>{data.desc}</p>
            <div className='people'>
              <img src={data.image} alt="" />
              <div>
                <h5 className='mb-1'>
                  {data.name}
                </h5>
                <p className='m-0 fw-bold'>
                  {data.skill}
                </p>
              </div>
            </div>
          </SwiperSlide>
          );
          })}
        </Swiper>
      </Row>
    </Container>
  </div>

  {/* Section FAQ */}
  <FaqComponent />
  {/* Section FAQ */}
</div>
)
}

export default HomePage