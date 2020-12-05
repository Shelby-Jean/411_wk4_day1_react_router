import React from 'react';
import cars from '../cars.json';
import { Container, Paper, Chip } from '@material-ui/core';

const Car = (props) => {
    const id = props.match.params.id;
    const filteredCar = cars.filter(car => car.id == id);
    console.log(filteredCar);

    return (
        <div>
            <Container maxWidth="sm" className="car-container">
                <Paper className="car-paper">
                    <div>
                    <h3>{filteredCar[0].Name}</h3>
                    </div>
                    <div>
                        <Chip size="medium" label={`id: ${filteredCar[0].id}`} />
                        <Chip size="medium" label={`Name: ${filteredCar[0].Name}`} />
                        <Chip size="medium" label={`Miles_per_Gallon: ${filteredCar[0].Miles_per_Gallon}`} />
                        <Chip size="medium" label={`Cylinders: ${filteredCar[0].Cylinders}`} />
                        <Chip size="medium" label={`Displacement: ${filteredCar[0].Displacement}`} />
                        <Chip size="medium" label={`Horsepower: ${filteredCar[0].Horsepower}`} />
                        <Chip size="medium" label={`Weight_in_lbs: ${filteredCar[0].Weight_in_lbs}`} />
                        <Chip size="medium" label={`Acceleration: ${filteredCar[0].Acceleration}`} />
                        <Chip size="medium" label={`Year: ${filteredCar[0].Year}`} />
                        <Chip size="medium" label={`Origin: ${filteredCar[0].Origin}`} />
                    </div>
                </Paper>
            </Container>
        </div>
    )
}

export default Car;