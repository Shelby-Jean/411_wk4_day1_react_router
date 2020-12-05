import React from 'react';
import cars from '../cars.json';
import { Container, Paper, Chip } from '@material-ui/core';

const Car = (props) => {
    const id = props.match.params.id;
    const filteredCar = cars.find(car => car.id == id);
    console.log(filteredCar);

    return (
        <div>
            <Container maxWidth="sm" className="car-container">
                <Paper className="car-paper">
                    <div>
                    <h3>{filteredCar.Name}</h3>
                    </div>
                    <div>
                        <Chip size="medium" label={`id: ${filteredCar.id}`} />
                        <Chip size="medium" label={`Name: ${filteredCar.Name}`} />
                        <Chip size="medium" label={`Miles_per_Gallon: ${filteredCar.Miles_per_Gallon}`} />
                        <Chip size="medium" label={`Cylinders: ${filteredCar.Cylinders}`} />
                        <Chip size="medium" label={`Displacement: ${filteredCar.Displacement}`} />
                        <Chip size="medium" label={`Horsepower: ${filteredCar.Horsepower}`} />
                        <Chip size="medium" label={`Weight_in_lbs: ${filteredCar.Weight_in_lbs}`} />
                        <Chip size="medium" label={`Acceleration: ${filteredCar.Acceleration}`} />
                        <Chip size="medium" label={`Year: ${filteredCar.Year}`} />
                        <Chip size="medium" label={`Origin: ${filteredCar.Origin}`} />
                    </div>
                </Paper>
            </Container>
        </div>
    )
}

export default Car;