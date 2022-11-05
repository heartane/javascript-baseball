const { Random } = require('@woowacourse/mission-utils');
const { RANDOM_NUMBER } = require('./config');

const randomGoalNumber = function () {
  const { from, to, pick } = RANDOM_NUMBER;
  return Random.pickUniqueNumbersInRange(from, to, pick);
};

/**
 * 유저 입력값의 유효성 체크 함수
 * 오로지 숫자로 이루어진 중복없는 세자리 수
 * @param {string} inputStr 유저가 제시한 임의의 세자리 수, ex.'245'
 * @returns {boolean} 유효성 검사 결과
 */
const validateInput = function (inputStr) {
  return inputStr.match('\\d{3}') && new Set(inputStr).size === 3;
};

module.exports = {
  randomGoalNumber,
  validateInput,
};
