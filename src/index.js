module.exports = function reverse (n) {

    let reversResult = [];

    reversResult = n.toString().split('').reverse();

    for (let i = 0; i < reversResult.length; i++) {
        if (reversResult[0] === '0') {
            reversResult.splice(0,1);
        } else {
            if (reversResult[i] === '-') {
                reversResult.splice(i, 1);
            }
        }
    }

    reversResult = +reversResult.join('');

  return reversResult;
};
