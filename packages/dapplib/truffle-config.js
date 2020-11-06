require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn purity grace hidden swing sense'; 
let testAccounts = [
"0xc4567ee95cdfd859a6e3ae2e77d07264d9b848716dcea316527266d1f32d3d88",
"0x6e016c410db7d6dc60d17a15141713901e29be735ce306e7a754bfe46c9900e7",
"0x63844531371c5712b1be580a12b36418b2a3083fbe814ec56e9c86c094702b1a",
"0xcc706d09920f0f352526c6a81e02399e2016240fc6280c048042a0563040294e",
"0x923fa5f1087b5dae8424cac45a5d664f968101a35131880cceb63a34c00c0b22",
"0x797810f95ae821f8c44540e9c6288d1476a6b6c83645a756a1845f5d1d5ac9b8",
"0x874cbf6d1557e9c350b38fd416df0599c6d55dc3f737234df38019f17ed8178c",
"0xafbba40421085c3404aa1a319de3cb354b82c02f4a4e6bd3f0551ee8d6abfba2",
"0xa18a8387c59190f4c9d76e09bffa36d9a51c389d1b390acb0b54405d0b39a3a4",
"0xb65c31d22ecb7854052dd58b3070d89723af2275b2bdb99e22feb6d58a368cc8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
