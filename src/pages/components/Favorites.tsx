import Carousel from 'react-bootstrap/Carousel'

function Favorites() {
  return (
    <>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://external-preview.redd.it/yVtNmbIE7iFeT3y0FTEmQsE1cq2ZZ1YfadsGCo_rIBI.jpg?auto=webp&s=745e6d00585bf803677f8323ae40f5e3748a1173"
          alt="First slide"
        />   
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://www.comicdom.gr/wp-content/uploads/2017/10/one-punch-man-mob-psycho-100-one-manga-anime-1200x400.jpg"
          alt="Second slide"
        />    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pbs.twimg.com/media/EUyOODTXYAU8-mV.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Favorites;