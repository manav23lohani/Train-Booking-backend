import { client } from '../utilities/connect.database';

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