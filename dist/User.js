"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, address, email, complement, neighborhood, birthDate, hasCompany) {
        this._id = Buffer.from(name).toString('hex');
        this.name = name;
        this.address = address;
        this.email = email;
        this.complement = complement;
        this.neighborhood = neighborhood;
        this.birthDate = birthDate;
        this.hasCompany = hasCompany;
    }
    ;
    get() {
        const _user = Object.assign({}, this);
        return _user;
    }
    ;
}
;
exports.default = User;
