const lodash = require('lodash');

const names = ['olya', "elie", 'elijah', 'ava'];
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);