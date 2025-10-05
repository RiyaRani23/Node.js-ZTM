const launches = new Map();

const launch = {
    flightNumber: 100, //flight number
    mission: 'Kepler Exploration X', //name
    rocket: 'Explorer IS1', //rocket
    launchDate: new Date('December 27, 2030'), //date
    destination: 'Kepler-442 b', //planet
    customer: ['ZTM', 'NASA'], //customers
    upcoming: true, //upcoming
    success: true, //success
    };

    launches.set(launch.flightNumber, launch);
    
    module.exports = {
        launches,
    };