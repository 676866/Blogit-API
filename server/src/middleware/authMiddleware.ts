import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';


export interface AuthRequest extends Request {
  user?: any;
}

export const verifyToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1]; 

  try {
   
    const decoded = jwt.verify(token, JWT_SECRET);
    
    
    req.user = decoded;

    next();
  } catch (err) {
    console.error("JWT verification failed:", err); 
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};
