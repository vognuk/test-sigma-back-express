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
}

const isValidPassword = (password) => {
    let schema = new passwordValidator();
    schema.is().min(8)
    if (!schema.validate(password)) {
        toast.error('Password must be longer than 8 characters', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return false;
    }
}

export default isEnoughLongPassword;