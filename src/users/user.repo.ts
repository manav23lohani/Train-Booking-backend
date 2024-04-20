import { client } from '../middlewares/connect.database';

export const getUserByEmail = async (email: string) => {
    const query = 'SELECT * FROM users WHERE email = $1';
    const result = await client.query(query, [email]);
    return result.rows[0];
};

export const getUserByUsername = async (username: string) => {
    const query = 'SELECT * FROM users WHERE username = $1';
    const result = await client.query(query, [username]);
    return result.rows[0];
};

export const createUser = async (username: string, email: string, password: string) => {
    await client.query(
        `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *`,
        [username, email, password]
    );
};

export const getTrainsBetweenStations = async (source: string, destination: string) => {
    const query = `
        SELECT * FROM trains WHERE start_station = $1 AND end_station = $2`;
    const result = await client.query(query, [source, destination]);
    return result.rows;
};

export const bookSeat = async (trainId: number, userId: number): Promise<boolean> => {
        await client.query('BEGIN');
        
        await client.query('SELECT * FROM trains WHERE train_id = $1 FOR UPDATE', [trainId]);
        
        const result = await client.query('SELECT number_of_seats FROM trains WHERE train_id = $1', [trainId]);
        const numberOfSeats = result.rows[0].number_of_seats;
        
        if (numberOfSeats > 0) {
            await client.query('UPDATE trains SET number_of_seats = number_of_seats - 1 WHERE train_id = $1', [trainId]);
            
            await client.query('COMMIT');
            return true;
        } else {
            await client.query('ROLLBACK');
            return false;
        }
};