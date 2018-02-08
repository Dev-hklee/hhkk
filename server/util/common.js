const META = require('../meta');
const ENV = META.env;
const path = require('path');
const fs = require('fs');

/**
 * base를 extend를 이용해 확장시킴 (extend가 우선순위가 높다)
 * @param base
 * @param extend
 */
let mergeMeta = (base, extend) => {
    Object.keys(extend).forEach(extendKey => {
        let extendValue = extend[extendKey];
        if (!base[extendKey]) {
            base[extendKey] = extendValue;
        } else {
            if (extendValue instanceof Object) {
                mergeMeta(base[extendKey], extendValue);
            } else {
                base[extendKey] = extendValue;
            }
        }
    });
};

let createEnum = (enumObject) => {
    let result = [];
    Object.keys(enumObject).forEach(key => {
        result.push(enumObject[key]);
    });
    enumObject.enum = result;
    return enumObject;
};

module.exports.mergeMeta = mergeMeta;
module.exports.createEnum = createEnum;
