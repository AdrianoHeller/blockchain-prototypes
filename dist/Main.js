"use strict";
;
const generateRules = (rulesList) => {
    return Object.assign({}, rulesList);
};
const hashMaker = (dataToHash) => {
    let stringBuffer = Buffer.from(JSON.stringify(dataToHash)).toString('base64');
    return stringBuffer;
};
const hashDecryptor = (dataToDecrypt) => {
    let decryptedData = Buffer.from(dataToDecrypt, 'base64').toString('utf-8');
    let parsedData = JSON.parse(decryptedData);
    return parsedData;
};
;
const nodeMaster = (userData, isMultilevel, multiLevelRules) => {
    return Object.assign(Object.assign(Object.assign(Object.assign({}, userData), { isMultilevel }), multiLevelRules), { nodeSlaves: [] });
};
;
const nodeSlaves = (nodeMaster, userData, companyName, slaveType) => {
    return Object.assign({ nodeMaster, isMultilevel: true, companyName,
        slaveType }, userData);
};
const hashedData = hashMaker({
    name: 'Adriano',
    birthDate: new Date(),
    userType: 'B2C',
    email: 'adriano@email.com',
    company: 'technoizz',
    companyRole: 'Fullstack dev',
    userToken: Buffer.from('').toString('hex')
});
const decrypted = hashDecryptor(hashedData);
console.log(hashedData);
console.log(decrypted);
