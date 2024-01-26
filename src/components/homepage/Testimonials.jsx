import { Img } from '@chakra-ui/react';
import React from 'react'
import CardBody from '../../common/CardBody';

const Testimonials = () => {

  const testimonialsData = [{
    "id": 1,
    "name": "Pasquale",
    "rating": 7,
    "review": "great services",
    "image": "http://dummyimage.com/60x60.png/5fa2dd/ffffff"
  }, {
    "id": 2,
    "name": "Isabelle",
    "rating": 8,
    "review": "staff were ambitous",
    "image": "http://dummyimage.com/60x60.png/9fa2dd/ffffff"
  }, {
    "id": 3,
    "name": "Linn",
    "rating": 2,
    "review": "love the food",
    "image": "http://dummyimage.com/60x60.png/5df3f6/ffffff"
  }, {
    "id": 4,
    "name": "Hendrik",
    "rating": 9,
    "review": "relaxing ambience",
    "image": "http://dummyimage.com/60x60.png/5fa2dd/ffffff"
  }];

  return (
    <div id='testimonials'>
      <h1>Testimonials</h1>
      <div className='testimonials-card-container'>

        {testimonialsData.map((each) => {
          return (
            <div key={each?.id} className='testimonial-detail-container'>
              <CardBody className={"testimonial-card"}>
                <div className='testimonial-detail-header'>
                  <strong>
                    <Img src={each?.image} />
                  </strong>
                  <span className='testimonial-price'>
                    {each?.name}
                  </span>
                </div>
                <p className='testimonial-detail-description'>
                  "{each.review}"
                </p>
              </CardBody>
            </div>

          )
        })}
      </div>

    </div>
  )
}

export default Testimonials