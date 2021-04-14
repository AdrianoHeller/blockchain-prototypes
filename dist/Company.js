"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Company {
    constructor(name, legalName, cnpj, address, email, complement, neighborhood, birthDate, isMultiLevel, responsableName) {
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
    }
    ;
    get() {
        const _company = Object.assign({}, this);
        return _company;
    }
    ;
}
;
exports.default = Company;
