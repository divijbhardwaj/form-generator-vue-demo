const MASTER_RULES = {
  email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
  // mobile: /^\+\d{1,3}-\d{9,10}$/
}
export default {
  // will be applied to all fields ------------
  FILTER:  value => {
      if (typeof value === 'number') {
        if (value < 0) {
          return 'Cannot be negative';
        }
      }
      return '';
    },


  // VALIDATION TYPES (common logic for multiple regex type validations)---------
  regex: function (value, rules = {}, fields) {
    const regex = rules.regex || MASTER_RULES[rules.ruleName];
    const errMsg = rules.errorMsg || 'Invalid input';
    if (!regex || !regex.constructor == RegExp) {
      console.error(`${regex} is not a valid RegExp`);
      return '';
    }
    return regex.test(value) ? '' : errMsg;
  },

  condition: function (value, rules = {}, fields) {
    const { condition } = rules || { condtion: undefined };
    if (!['function', 'boolean'].includes(typeof condition)) {
      console.error(`condition should be a function returning boolean or boolean itself`);
      return '';
    }

    const result = typeof condition === 'function' ? condition() : condition;

    return result ? '' : rules.errorMsg || 'Invalid input';
  },

  // VALIDATION FOR SPECIFIC FIELD -------------
  confirmPassword: function (value, rules = {}, fields) {
    const password = fields.password;
    const errorMsg = 'Confirm your password';
    const success = '';
    const findMatch = () => {
      return password == value ? success : errorMsg;
    }
    return password ? findMatch() : success;
  }
}