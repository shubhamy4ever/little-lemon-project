import React from 'react'
import { Card, CardBody as CardBodyChakra } from "@chakra-ui/react";


const CardBody = ({ children, className }) => {
    return (
        <Card className={className}>
            <CardBodyChakra>
                {children}
            </CardBodyChakra>
        </Card>
    )
}

export default CardBody