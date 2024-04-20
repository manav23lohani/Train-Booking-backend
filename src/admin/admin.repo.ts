import { client } from '../utilities/connect.database';

export const addTrain = async (trainName: string, startStation: string, endStation: string, numberOfSeats: number) => {
    const query = 'INSERT INTO trains (train_name, start_station, end_station, number_of_seats) VALUES ($1, $2, $3, $4) RETURNING train_id';
    
    const result = await client.query(query, [trainName, startStation, endStation, numberOfSeats]);
    
    return result.rows[0].train_id;
};
