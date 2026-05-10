import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User, UserDocument } from '../models/User';
import { RequestHandler } from '../types/express';

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, { expiresIn: '30d' });
};

export const signup: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Signup attempt for:', email);

    const userExists = await User.findOne({ email });
    if (userExists) {
      console.log('User already exists in DB:', email);
      res.status(400).json({ message: 'User already exists' });
      return;
    }

    const user = await User.create({ email, password }) as UserDocument;
    console.log('User created successfully:', email);
    res.status(201).json({
      token: generateToken(user._id.toString()),
      user: {
        id: user._id.toString(),
        email: user.email,
        role: (user as any).role ?? 'user'
      }
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const login: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Login attempt for:', email);

    const user = await User.findOne({ email }) as UserDocument | null;
    if (!user) {
      console.log('User not found in DB:', email);
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    const isMatch = await user.comparePassword(password);
    console.log('Password match:', isMatch);
    
    if (!isMatch) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    res.json({
      token: generateToken(user._id.toString()),
      user: {
        id: user._id.toString(),
        email: user.email,
        role: (user as any).role ?? 'user'
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
