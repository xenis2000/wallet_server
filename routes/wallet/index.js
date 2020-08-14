const router = require('express').Router();
const wallet = require('./wallet');
const web3Middleware = require('../../my_modules/web3/web3') //web3 미들웨어 import

router.post('/newMnemonic', wallet.newMnemonic);
router.post('/newWallet', wallet.newWallet);

router.use(web3Middleware).post('/getBalance', wallet.getBalance);

module.exports = router