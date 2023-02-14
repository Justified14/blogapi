const handleErrors = (err) => {
    //err messages err codes - 11000
    let errors = {email: "", password: "", name: "",};
    if (err.code === 11000) {
        errors.email = 'Email is already in use'
        return errors
    }
    if (err.message === 'incorrect Email'){
        errors.email = 'This Email has not been registered'
        return errors;
    }
    if (err.message === 'incorrect Password'){
        errors.email = 'This Email or Password is incorrect'
        errors.password = 'This Email or Password is incorrect'
        return errors;
    }
    if (err.message.includes('User validation failed')){
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    };

    return errors;
};

module.exports = handleErrors