import 'dotenv/config';

export const DB_DEV_NAME = <string | undefined> process.env.DB_DEV_NAME;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const PORT = process.env.PORT || 5000;
export const DB_TEST_NAME = process.env.DB_TEST_NAME;
export const NODE_ENV = process.env.NODE_ENV;
export const JWT_SECRET = <string> process.env.JWT_SECRET;