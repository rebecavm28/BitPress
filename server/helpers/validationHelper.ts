import {validationResult} from 'express-validator'
import { Request, Response, NextFunction} from 'express';

export const validateResult = (request: Request, response: Response, next: NextFunction) => {
    const errors = validationResult(request);
    if (errors.isEmpty()) {
        next();
    }
    else{
        return response.status(400).json({ errors: errors.array() });
    } 
};