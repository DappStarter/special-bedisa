require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth maze prosper harvest only equal gather'; 
let testAccounts = [
"0xe918acb07ec7febff47e0c93c4f1f45f36d8243e7c09e70d3f8988774dee5661",
"0x7b5b7eedcdc5d44b6072105c6ca5c7c04f0c946187604b386455b92f519589d8",
"0x8fe7e1a0a6fddf3da7b1c447cdd55d33607b2f19eee49e7cd15a135aa64ce8ee",
"0x518eb5ae1642f2286dc087e82aa4a286bfa990c23e805e4aac46e14ada7e2570",
"0xe4c9cb2f967a6dfa0ab69828d3aa51bcaa4067555bafc8547773e6a8a3eacd3d",
"0xb5e1644a51831ec1d67b3552bde5254dd592d34f81b77ac9f766f3d072ca265e",
"0xe848a6c3a50d30e0a34f06a3015a30fccb7c65eb7fc5f1f38c57c81ba0208d25",
"0x445cfd029cbfcc791e009b567cec38db3b912b7cc8e948925bf0256975404f33",
"0xfdfe4993d8843a7315173f49d17acb96eb12240b6e0b2f12fabec7f20c6136ea",
"0xae8206fe54c09f1f6b50c4aa9f805ff00d4121b7c7f4bd211de25b8207af9a5b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
