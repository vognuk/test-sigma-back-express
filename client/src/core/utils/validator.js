import passwordValidator from 'password-validator'
import { toast } from "react-toastify";

const isEnoughLongPassword = (password) => {
    let schema = new passwordValidator();
    schema.is().min(8)
    if (!schema.validate(password)) {
        toast.error('Password must be longer than 8 characters', {
            position: "top-right",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return false;
    }
    return true;
}

const isIncludeUppercaseLetters = (password) => {
    let schema = new passwordValidator();
    schema.is().has().uppercase();
    if (!schema.validate(password)) {
        toast.error('Password must contain uppercase letters', {
            position: "top-right",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return false;
    }
    return true;
}

const isIncludeDigits = (password) => {
    let schema = new passwordValidator();
    schema.has().digits(2);
    if (!schema.validate(password)) {
        toast.error('Password must contain at least 2 digits', {
            position: "top-right",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return false;
    }
    return true;
}

export {isEnoughLongPassword, isIncludeUppercaseLetters, isIncludeDigits};