const Customer = require('../models/customerModel');
const logger = require('../logger');

module.exports = {
    async index(ctx){        
        const customers = await Customer.find({});
        logger.log(`Customer API Called data: ${customers}`); 
        //send the customers
        ctx.body = customers;
    },
    async searchCustomer(ctx){
        try {
            const {searchText} = ctx.params;        
            const customer = await Customer.find({'name': /searchText/});
            logger.log(`Customer Search API Called data: ${customers}`); 
            ctx.body = customer;
        } catch (error) {
            logger.log(`Customer Search API Called Error: ${error}`); 
        }       
    }
}