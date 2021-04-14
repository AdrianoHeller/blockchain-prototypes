class Wallet{
    private _id: string;
    private _idSender: string;
    private _idReceiver: string;
    private amountSent: number;

    constructor(_idSender: string,_idReceiver: string,amountSent: number){
        this._id = Buffer.from(`${_idSender}.${_idReceiver}.${amountSent}`).toString('hex');
        this._idSender = _idSender;
        this._idReceiver = _idReceiver;
        this.amountSent = amountSent;
    };

    public get WalletId():object{
        const _this = this;

        return {
            ..._this
        };
    };

    public set Wallet(dataSent:{_idSender: string,_idReceiver: string, amountSent: number}){
        this._id = Buffer.from(`${dataSent['_idSender']}.${dataSent['_idReceiver']}.${dataSent['amountSent']}`).toString('hex'),
        this._idSender = dataSent['_idSender'],
        this._idReceiver = dataSent['_idReceiver'],
        this.amountSent += dataSent['amountSent']
    };
};

export default Wallet;

const repass = new Wallet('xyz','zzx',23200);

console.log(repass.WalletId);
