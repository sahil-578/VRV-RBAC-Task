import session from 'express-session';
import connectMongo from 'connect-mongo';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const MongoStore = connectMongo(session);

export const sessionConfig = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    // maxAge: 1000 * 60 * 60 * 24, 
  },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,  // Use mongoose connection here
    collectionName: 'sessions', // Optionally specify collection name
  }),
});
