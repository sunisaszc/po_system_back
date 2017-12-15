import index from '../controllers/index.controller';
const path = '/api/index';

module.exports = (app) => {
       app.post('/', index.index);
};
