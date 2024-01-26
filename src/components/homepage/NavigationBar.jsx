import { VStack } from '@chakra-ui/react'
import React from 'react'

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <img src='https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/Logo.370f832fad423c516d56.png' alt='little lemon' width={150} />
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/orderonline">Order online</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  )
}

export default NavigationBar