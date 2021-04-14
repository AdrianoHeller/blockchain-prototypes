class User{
    _id: string;
    name: string;
    address: string;
    complement: string;
    neighborhood: string;
    email: string;
    birthDate: Date;
    hasCompany: boolean;

    constructor(name: string,address: string, email: string,complement: string, neighborhood: string, birthDate: Date, hasCompany: boolean){
        this._id = Buffer.from(name).toString('hex');
        this.name = name;
        this.address = address;
        this.email = email;
        this.complement = complement;
        this.neighborhood = neighborhood;
        this.birthDate = birthDate;
        this.hasCompany = hasCompany;
    };

    user(){
        return{
            ...this
        }
    };
};

export default User;
