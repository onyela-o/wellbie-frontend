import PlaceholderImage from '../images/placeholder.png'
import styled from 'styled-components'

const AboutHeading = styled.h3`
  text-align: center;
`
const Paragraph = styled.p`
  font-size: smaller;
  text-align: center;
`

const imageStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '60%',
}

const AboutPage = () => (
  <div>
    <h2>About Wellbie</h2>
    <div className='row'>
      <div className='about-column'>
        <img src={PlaceholderImage} alt='Wellbie' style={imageStyle}></img>
        <AboutHeading>Holistic, personalised care in one app</AboutHeading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Paragraph>
      </div>
      <div className='about-column'>
        <img src={PlaceholderImage} alt='Wellbie' style={imageStyle}></img>
        <AboutHeading>Clinically proven and safe</AboutHeading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Paragraph>
      </div>
      <div className='about-column'>
        <img src={PlaceholderImage} alt='Wellbie' style={imageStyle}></img>
        <AboutHeading>Sustainable & affordable</AboutHeading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Paragraph>
      </div>
    </div>
  </div>
)

export default AboutPage
