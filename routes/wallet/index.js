const router = require('express').Router();
const wallet = require('./wallet');
const web3Middleware = require('../../my_modules/web3/web3') //web3 미들웨어 import

router.post('/newMnemonic', wallet.newMnemonic);
router.post('/newWallet', wallet.newWallet);

router.use(web3Middleware)
router.post('/getBalance', wallet.getBalance);
router.post("sendEth", wallet.sendEth);

module.exports = router