import React from 'react'
import { Card, CardBody as CardBodyChakra } from "@chakra-ui/react";


const CardBody = ({ children }) => {
    return (
        <Card>
            <CardBodyChakra>
                {children}
            </CardBodyChakra>
        </Card>
    )
}

export default CardBody