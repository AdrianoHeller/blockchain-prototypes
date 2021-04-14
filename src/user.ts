class User{
    name: string;
    address: string;
    complement: string;
    neighborhood: string;
    email: string;
    birthDate: Date;

    constructor(name: string,address: string, email: string,complement: string, neighborhood: string, birthDate: Date){
        this.name = name;
        this.address = address;
        this.email = email;
        this.complement = complement;
        this.neighborhood = neighborhood;
        this.birthDate = birthDate;
    };
    
    user(){
        return{
            ...this
        }
    };
};

export default User;
