import styled from 'styled-components'
import aboutInformation from './about-information'

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

const Card = (props) => {
  return (
    <div className='about-column'>
      <img src={props.image} alt='Wellbie' style={imageStyle}></img>
      <AboutHeading>{props.heading}</AboutHeading>
      <Paragraph>{props.content}</Paragraph>
    </div>
  )
}

const createCard = (cardName, index) => {
  return (
    <Card
      key={`about-page-card-${index}`}
      image={cardName.image}
      heading={cardName.heading}
      content={cardName.content}
    />
  )
}
const AboutPage = () => (
  <div>
    <h2>About Wellbie</h2>
    <div className='row'>{aboutInformation.map(createCard)}</div>
  </div>
)

export default AboutPage
