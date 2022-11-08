import '../App.css'

import HomeImage from '../images/wellbie-home-image.png'
import Button from '../components/Button'

const textStyle = {
  textAlign: 'center',
  position: 'relative',
}
const Home = () => {
  return (
    <div>
      <div className='row'>
        <div className='column text' style={textStyle}>
          <h2>Empowering patients with autoimmune diseases</h2>
          <p>
            Your personalised support to help you feel better and in control
            again.
          </p>
          <a href='/register'>
            <Button>Sign up</Button>
          </a>

          <a href='/about'>
            <Button>Learn more</Button>
          </a>
        </div>
        <div className='column home-image'>
          <img src={HomeImage} alt='Happy and healthy people' />
        </div>
      </div>
    </div>
  )
}

export default Home
