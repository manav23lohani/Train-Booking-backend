import { createUser, getUserByEmail, getUserByUsername } from './user.repo';
import jwt from 'jsonwebtoken';

export const signupService = async (username: string, email: string, password: string) => {
    const existingUserByEmail = await getUserByEmail(email);
    const existingUserByUsername = await getUserByUsername(username);

    if (existingUserByEmail) {
        throw 'EMAIL ALREADY EXISTS';
    }

    if (existingUserByUsername) {
        throw 'USERNAME ALREADY EXISTS';
    }
    await createUser(username, email, password);
    return 'USER REGISTERED';
};

export const loginService = async (email: string, password: string) => {
    const user = await getUserByEmail(email);
    if (!user) {
        throw 'USER NOT FOUND';
    }
    
    if (user.password !== password) {
        throw 'INVALID CREDENTIALS';
    }

    const token = jwt.sign(
        { userId: user.id }, 
        process.env.JWT_SECRET || 'jwtsecret', 
        { expiresIn: '1h' }
    );

    return token;
};