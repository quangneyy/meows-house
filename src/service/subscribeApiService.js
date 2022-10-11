import db from '../models/index';

const createNewSubscribe = async (data) => {
    try {
        await db.Subscribe.create(data);
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    createNewSubscribe,
}