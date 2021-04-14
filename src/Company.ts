class Company{
    protected _id: string;
    name: string;
    legalName: string;
    cnpj: string;
    address: string;
    complement: string;
    neighborhood: string;
    email: string;
    birthDate: Date;
    isMultiLevel: boolean;
    responsableName: string;

    constructor(name: string,legalName: string,cnpj: string,address: string, email: string,complement: string, neighborhood: string, birthDate: Date, isMultiLevel: boolean,responsableName: string){
        this._id = Buffer.from(name).toString('hex');
        this.name = name;
        this.legalName = legalName;
        this.cnpj = cnpj;
        this.address = address;
        this.email = email;
        this.complement = complement;
        this.neighborhood = neighborhood;
        this.birthDate = birthDate;
        this.isMultiLevel = isMultiLevel;
        this.responsableName = responsableName;
    };

    get(){
        const _company = {...this};
        return _company;
    };
};

export default Company;
