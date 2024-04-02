import 'dotenv/config';

export const DB_DEV_NAME =<string> process.env.DB_DEV_NAME;
export const DB_USER = <string>process.env.DB_USER;
export const DB_PASSWORD =<string> process.env.DB_PASSWORD;
export const PORT = <string>process.env.PORT || 5000;
export const DB_TEST_NAME =<string> process.env.DB_TEST_NAME;
export const NODE_ENV = <string>process.env.NODE_ENV;
export const JASONWEBTOKEN =<string>process.env.JASONWEBTOKEN;