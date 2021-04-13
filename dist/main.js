"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
;
var generateRules = function (rulesList) {
    return __assign({}, rulesList);
};
var hashMaker = function (dataToHash) {
    var stringBuffer = Buffer.from(JSON.stringify(dataToHash)).toString('base64');
    return stringBuffer;
};
var hashDecryptor = function (dataToDecrypt) {
    var decryptedData = Buffer.from(dataToDecrypt, 'base64').toString('utf-8');
    var parsedData = JSON.parse(decryptedData);
    return parsedData;
};
;
var nodeMaster = function (userData, isMultilevel, multiLevelRules) {
    return __assign(__assign(__assign(__assign({}, userData), { isMultilevel: isMultilevel }), multiLevelRules), { nodeSlaves: [] });
};
;
var nodeSlaves = function (nodeMaster, userData, companyName, slaveType) {
    return __assign({ nodeMaster: nodeMaster, isMultilevel: true, companyName: companyName,
        slaveType: slaveType }, userData);
};
var hashedData = hashMaker({
    name: 'Adriano',
    birthDate: new Date(),
    userType: 'B2C',
    email: 'adriano@email.com',
    company: 'technoizz',
    companyRole: 'Fullstack dev',
    userToken: Buffer.from('').toString('hex')
});
var decrypted = hashDecryptor(hashedData);
console.log(hashedData);
console.log(decrypted);
