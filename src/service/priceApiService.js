import db from '../models/index';

const createNewPrice = async (data) => {
    try {
        await db.Price.create(data);
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    createNewPrice,
}