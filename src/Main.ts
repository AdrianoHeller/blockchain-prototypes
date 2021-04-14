interface ICompanyRules{
    numberOfLevels: number,
    maxDepth: number,
    amountPercentage: number,
    amount: number
};

const generateRules = (rulesList: ICompanyRules):ICompanyRules => {
    return{
        ...rulesList
    };
};

const hashMaker = (dataToHash: object):string => {    
    let stringBuffer = Buffer.from(JSON.stringify(dataToHash)).toString('base64');   
    return stringBuffer;
};

const hashDecryptor = (dataToDecrypt: string): object => {
    let decryptedData = Buffer.from(dataToDecrypt,'base64').toString('utf-8');
    let parsedData = JSON.parse(decryptedData);
    return parsedData;
};

interface INodeMaster{
    name: string,
    birthDate: Date,
    userType: string,
    email: string,
    company: string,
    companyRole: string,
    userToken: string
};

const nodeMaster = (userData: INodeMaster,isMultilevel: boolean,multiLevelRules: object) => {
    return {
        ...userData,
        isMultilevel,
        ...multiLevelRules,
        nodeSlaves: []
    };
};

interface INodeSlave{
    name: string,
    birthDate: Date,
    userType: string,
    email: string,
    company: string,
    companyRole: string,
    userToken: string,
    hasMaster: boolean,
    masterToken: string
};

const nodeSlaves = (nodeMaster: INodeMaster,userData: INodeSlave,companyName: string,slaveType: string) => {
    return {
        nodeMaster,
        isMultilevel: true,
        companyName,
        slaveType,
        ...userData
    }
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
