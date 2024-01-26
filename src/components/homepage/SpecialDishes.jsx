import { Button, Img } from '@chakra-ui/react'
import React from 'react'
import CardBody from '../../common/CardBody'
import { MdDeliveryDining } from "react-icons/md";


const SpecialDishes = () => {

  const foodDetails = [{
    "id": 1,
    "title": "Mushroom",
    "description": "parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis",
    "price": "$9.92",
    "image": "http://dummyimage.com/250x250.png/dddddd/000000"
  }, {
    "id": 2,
    "title": "Muffin Mix",
    "description": "quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id quam fringilla quam fringilla quam fringilla",
    "price": "$8.45",
    "image": "http://dummyimage.com/250x250.png/dddddd/000000"
  }, {
    "id": 3,
    "title": "Grouper",
    "description": "et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut",
    "price": "$8.03",
    "image": "http://dummyimage.com/250x250.png/dddddd/000000"
  }]

  return (
    <div id='specialdetails'>
      <main id='order-online-header'>
        <h1>This week's special!</h1>
        <Button colorScheme='yellow' size={"lg"}>Online Menu</Button>
      </main>
      <main id='week-special-container'>
        {foodDetails.map((each) => {
          return (
            <div key={each?.id} className='food-details-container'>
              <CardBody >
                <Img src={each?.image} />
                <div className='food-detail-header'>
                  <strong>
                    {each?.title}
                  </strong>
                  <span className='food-price'>
                    {each?.price}
                  </span>
                </div>
                <p className='food-detail-description'>
                  {each.description}
                </p>
                <strong className='food-order-link'>Order a delivery <MdDeliveryDining size={20} style={{ marginLeft: 4 }} /> </strong>
              </CardBody>
            </div>

          )
        })}
      </main >
    </div >
  )
}

export default SpecialDishes