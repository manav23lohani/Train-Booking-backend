import { Client } from 'pg';

export const client = new Client({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'postgres',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_DATABASE || 'postgres'
})

export const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log("Connected to database");
    } catch (error) {
        console.error("Failed to connect to database:", error);
        process.exit(1);
    }
};