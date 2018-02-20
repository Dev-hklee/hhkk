const Sequelize = require('sequelize');
module.exports = sequelize => {
    const User = sequelize.define('user', {
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        }
    });
    return User;
};
