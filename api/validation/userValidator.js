const { isEmail } = require('validator');

const validateUserInput = (data) => {
    const {email, password} = data;
    const errors = {};

    // Validate email
    if (!isEmail(email)) errors.email = 'Invalid email';

    // Validate password
    if (password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }

    return errors;
}

module.exports = {
    validateUserInput
}