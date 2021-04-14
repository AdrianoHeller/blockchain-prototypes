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
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, address, email, complement, neighborhood, birthDate, hasCompany) {
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
    User.prototype.user = function () {
        return __assign({}, this);
    };
    ;
    return User;
}());
;
exports.default = User;
