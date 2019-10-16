const checkHouseValidatorMiddleware =  require('./check_house_validator_middleware');
const housePressentMiddleware = require('./is -house-pressent-middleware');
const searchHouseMiddleware = require('./searchHouse_middleware')
const checkUpdateHouseValiddator = require('./checkUpdateHouse');
const checkUpdateHouseMiddleware = require('./houseIdUpdateMiddleware');

module.exports = {
  checkHouseValidatorMiddleware,
  housePressentMiddleware,
  searchHouseMiddleware,
  checkUpdateHouseMiddleware,
  checkUpdateHouseValiddator
};