const { Random } = require('@woowacourse/mission-utils');
const { RANDOM_NUMBER } = require('./config');

const randomGoalNumber = function () {
  const { from, to, pick } = RANDOM_NUMBER;
  return Random.pickUniqueNumbersInRange(from, to, pick);
};

module.exports = {
  randomGoalNumber,
};
