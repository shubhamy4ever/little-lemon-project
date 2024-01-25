import { Button } from '@chakra-ui/react'
import React from 'react'

const HeroSection = () => {
  return (
    <div id='herosection'>
      <aside id='aside-hero'>
        <h1>Little Lemon</h1>
        <h4>Mumbai</h4>
        <p>We are a family owned
          Mediterranean restaurant,
          focused on traditional
          recipes served with a modern
          twist.</p>
        <Button mt={2} colorScheme='yellow' size='md'>
          Reserve a Table
        </Button>
      </aside>
      <main id='image-hero'>
        <img src="https://media.istockphoto.com/id/1174831696/photo/black-sesame-tuna-with-potato-greens-and-candied-tomatoes-exquisite-dish-creative-restaurant.jpg?s=612x612&w=0&k=20&c=WyM20G_62JRYZSTNI_5wqiUMVcmLfWI3xGw3nYiA4Vw=" alt="coverimage" />
      </main>
    </div>
  )
}

export default HeroSection