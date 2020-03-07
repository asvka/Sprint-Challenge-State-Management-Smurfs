import React from 'react';

import { Card, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap';

const SmurfCard = ({ name, age, height }) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>Age: {age}</CardText>
                    <CardSubtitle>{height}</CardSubtitle>
                </CardBody>
            </Card>
        </div>
    )
}
export default SmurfCard;