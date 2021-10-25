const mongoose = require('mongoose')
const { Schema, model } = mongoose
const bcrypt = require('bcryptjs')
const SALT_FACTOR = 6

const userSchema = new Schema({
    name: {
        type: String,
        minlength: 2,
        default: 'Sigma Guest',
    },
    secondName: {
        type: String,
        minlength: 2,
        default: 'Sigma Guest',
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            const re = /\S+@\S+\.\S+/
            return re.test(String(value).toLowerCase())
        },
    },
    password: {
        type: String,
        required: true,
    },
    birthdate: {
        type: String,
        default: 'Guest',    
    },
},
    {
        versionKey: false,
        timestamps: true,
    },
)

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(SALT_FACTOR)
        this.password = await bcrypt.hash(this.password, salt)
    }
    next()
})

userSchema.methods.validPassword = async function (password) {
    return await bcrypt.compare(String(password), this.password)
}

const User = model('user', userSchema)

module.exports = User
