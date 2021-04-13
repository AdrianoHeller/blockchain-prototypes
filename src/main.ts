interface ICompanyRules{
    numberOfLevels: number,
    maxDepth: number,
    amountPercentage: number,
    amount: number
};

const generateRules = (rulesList: ICompanyRules) => {
    return{
        ...rulesList
    };
};

const hashMaker = (dataToHash: object):string => {    
    let stringBuffer = Buffer.from(JSON.stringify(dataToHash)).toString('base64');   
    return stringBuffer;
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

const nodeSlaves = (nodeMaster: object,userData: object,companyName: string,slaveType: string) => {
    return {
        nodeMaster,
        isMultilevel: true,
        companyName,
        slaveType,
        ...userData
    }
};