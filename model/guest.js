const mongoose = require('mongoose')
const schema = mongoose.Schema

const guestSchema = new schema({
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    name: {
        first: {
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        }
    },
    vaccine: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('guest', guestSchema)