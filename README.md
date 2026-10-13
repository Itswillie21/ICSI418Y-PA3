# ICSI 418Y Programming Assignment 2

## Full Stack Login and Signup

This project is a full stack Login and Signup application built using:

- React
- Node.js
- Express
- MongoDB

## Features

### Signup
Users can create an account using:

- First Name
- Last Name
- Username
- Password

The application checks for missing fields and prevents duplicate usernames.

### Login
Existing users can log in using:

- Username
- Password

The application check for missing fields, nonexistent usernames, and incorrect passwords

### User Feedback
The interface displays clear success and error messages for Signup and Login attempts

## Project Structure

- `client/` - React frontend
- `server/` - Express backend
- `server/models/User.js` - MongoDB user model