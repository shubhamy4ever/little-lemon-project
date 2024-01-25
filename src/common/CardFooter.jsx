import { CardFooter as CardFooterChakra } from '@chakra-ui/react'
import React from 'react'

const CardFooter = ({ children }) => {
    return (
        <div> {children ? <CardFooterChakra>
            {children}
        </CardFooterChakra> : null}
        </div>
    )
}

export default CardFooter