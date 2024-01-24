import React from 'react'
import { Card as CardChakra, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";


const Card = ({children,headerContent,footerContent,cardProperties}) => {
  return (
    <CardChakra {...cardProperties}>
      {headerContent ?<CardHeader>
        {headerContent}
      </CardHeader>:null}
      <CardBody>
        {children}
      </CardBody>
     {footerContent? <CardFooter>
        {footerContent}
      </CardFooter>:null}
    </CardChakra>
  )
}

export default Card