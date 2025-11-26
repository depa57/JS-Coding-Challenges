import _ from 'lodash';

const deepa = ["d", "e", "e", "p", "a", "g", "r", "g"];
const chunked = _.chunk(deepa, 2);
console.log(chunked);
