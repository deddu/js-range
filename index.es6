'use strict';

let { ceil, abs } = Math,
    { isFinite } = Number;

let error = message => {

    throw new Error(message);
}

export default (fromNum = 0, toNum, step = 1) => {

    !isFinite(fromNum) || toNum !== undefined &&
    !isFinite(toNum) || !isFinite(step) &&
        error('Wrong number value!');

    typeof toNum === 'undefined' && (toNum = fromNum, fromNum = 0);

    if (step === 0) {

        error('Step should not be 0');
    }
    else if (step === 1) {

        fromNum > toNum && (step = -step);
    }
    else if (fromNum > toNum && step > 0 || fromNum < toNum && step < 0) {

        return [];
    }

    let ln = ceil(abs((toNum - fromNum) / step)), i = 0;
    let range = new Array(ln);

    for (; i < ln; i++) range[i] = fromNum + step * i;

    return range;
};
