import {Container, Row, Col} from 'react-bootstrap'
import FaqComponent from '../components/FaqComponent'

const GaleriPage = () => {
return (
<div className='galeri-page'>
  <div className="galeri min-vh-100">
    <Container>
      <Row>
        <Col>
        <h1 className='fw-bold text-center mb-2 animate__animated animate__fadeInUp animate__delay-1s'>Galeri</h1>
        <p className='text-center animate__animated animate__fadeInUp animate__delay-1s'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quo!</p>
        </Col>
      </Row>
      <Row className='pt-5'>
        <Col>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At eius inventore reprehenderit in! Voluptatibus
          aperiam eum perspiciatis. Odio sunt voluptatum exercitationem corrupti omnis quod rerum praesentium aut iusto
          amet modi, est repudiandae perferendis earum? Eum cumque aliquid atque ab sunt magni impedit voluptates
          mollitia quia dignissimos, officia fuga. Cumque, aperiam.</p>
        </Col>
      </Row>
      <Row className='py-3'>
        <Col>
        <h4 className='fw-bold'>1. Lorem</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit corporis placeat eum minima, cupiditate
          sint laudantium quia libero pariatur laborum ipsam aperiam sapiente facere aliquam atque suscipit, asperiores
          voluptatum consectetur ut labore eveniet. Nam architecto blanditiis, est quod amet ab.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, blanditiis, deserunt quidem laborum iure minima
          numquam voluptates harum fuga dicta sunt placeat doloremque temporibus. Quasi officia quos ut numquam est nam
          id ad saepe voluptatem. Labore aut nemo officiis ad libero nam possimus, consectetur optio magnam qui
          voluptatum alias, sunt nostrum corrupti deleniti, quia molestiae eius obcaecati quo ipsa rem!</p>
        </Col>
      </Row>
      <Row className='py-3'>
        <Col>
        <h4 className='fw-bold'>2. Lorem</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium delectus hic labore aspernatur totam
          perferendis architecto, voluptatem natus nulla dolorem corrupti quod enim, eos eveniet! Nisi eos molestias
          laudantium in ipsam sit eius incidunt iusto architecto ea animi exercitationem vel repellendus perferendis
          tempora nam vero dolor quis, qui ipsa eligendi mollitia, consectetur repudiandae. Quia error numquam pariatur
          aliquam, omnis odit?</p>
        </Col>
      </Row>
    </Container>
  </div>
</div>
)
}

export default GaleriPage