const companyRules: object = {
    
};

const hashMaker = (dataToHash: object):string => {    
    let stringBuffer = Buffer.from(JSON.stringify(dataToHash)).toString('base64');   
    return stringBuffer;
};

const nodeMaster = (userData:object,isMultilevel:boolean,multiLevelRules: object) => {
    return {
        ...userData,
        isMultilevel,
        ...multiLevelRules,
        nodeSlaves: []
    };
};

const nodeSlaves = (nodeMaster: object,userData:object,companyName: string,slaveType: string) => {
    return {
        nodeMaster,
        isMultilevel: true,
        companyName,
        slaveType,
        ...userData
    }
};