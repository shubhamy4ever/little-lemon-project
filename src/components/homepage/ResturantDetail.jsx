import { Button } from '@chakra-ui/react'
import React from 'react'

const ResturantDetail = () => {
  return (
    <div id='resturantdetails'>
      <aside id='aside-resturantdetails'>
        <h1 >Little Lemon</h1>
        <h4>Mumbai</h4>
        <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
      </aside>
      <main id='image-resturantdetails'>
        <img src="http://dummyimage.com/320x320.png/8fa2dd/ffffff" alt="coverimage" />
        <img src="http://dummyimage.com/320x320.png/5fa2dd/ffffff" alt="coverimage" />
      </main>
    </div>
  )
}

export default ResturantDetail