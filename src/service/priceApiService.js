import db from '../models/index';

const createNewSubscribe = async (data) => {
    try {
        await db.Price.create(data);
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    createNewPrice,
}