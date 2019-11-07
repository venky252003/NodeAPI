const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const customerSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: String,
    city: String,
    orderTotal: Number,
    customerSince: String,
    createdDate: { type: Date}
});

const customer = mongoose.model('customer', customerSchema);
module.exports = customer;