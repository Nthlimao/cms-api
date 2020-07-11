const { UserController } = require('../../app/components');

module.exports = {
  Query: {
    users: () => UserController.index(),
  },
};
