"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Wallet {
    constructor(_idSender, _idReceiver, amountSent) {
        this._id = Buffer.from(`${_idSender}.${_idReceiver}.${amountSent}`).toString('hex');
        this._idSender = _idSender;
        this._idReceiver = _idReceiver;
        this.amountSent = amountSent;
    }
    ;
    get WalletId() {
        const _this = this;
        return Object.assign({}, _this);
    }
    ;
    set Wallet(dataSent) {
        this._id = Buffer.from(`${dataSent['_idSender']}.${dataSent['_idReceiver']}.${dataSent['amountSent']}`).toString('hex'),
            this._idSender = dataSent['_idSender'],
            this._idReceiver = dataSent['_idReceiver'],
            this.amountSent += dataSent['amountSent'];
    }
    ;
}
;
exports.default = Wallet;
const repass = new Wallet('xyz', 'zzx', 23200);
console.log(repass.WalletId);
