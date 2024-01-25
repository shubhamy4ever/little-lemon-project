import { CardHeader as CardHeaderChakra } from '@chakra-ui/react'
import React from 'react'

const CardHeader = ({ children }) => {
    return (
        <div> {children ? <CardHeaderChakra>
            {children}
        </CardHeaderChakra> : null}
        </div>
    )
}

export default CardHeader