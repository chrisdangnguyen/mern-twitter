const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTweetInput(data) {
    let errors = {};

    data.text =validText(data.text) ? data.text : '';
    
    if (!Validator.isLength(data.text, { min: 5, max: 140})) {
        errors.test = 'Tweet must be between 5 and 140 characters';
    }

    if (Validator.isEmpty(data.text)) {
        errors.text = 'Text failed is required';
    }

    return {
        errors, 
        isValid: Object.keys(errors).length === 0
    };
};