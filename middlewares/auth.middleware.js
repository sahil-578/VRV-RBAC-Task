import { roles } from '../utils/constants.js';
import createHttpError from 'http-errors';


//  Middleware to ensure the user is an admin.

export function ensureAdmin(req, res, next) {
  if (req.user.role === roles.admin) {
    return next();
  } else {
    req.flash('warning', 'You are not authorized to see this route');
    res.redirect('/');
  }
}


//  Middleware to ensure the user is a moderator.
 
export function ensureModerator(req, res, next) {
  if (req.user.role === roles.moderator) {
    return next();
  } else {
    req.flash('warning', 'You are not authorized to see this route');
    res.redirect('/');
  }
}


//  Middleware to ensure the user is logged in.

export function ensureLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash('warning', 'You need to log in first');
    res.redirect('/auth/login');
  }
}
