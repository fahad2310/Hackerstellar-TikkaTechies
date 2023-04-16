//https://eth-sepolia.g.alchemy.com/v2/HFl-MLjMf-svDwA-0GZ5CZQGm9q-8vAz

require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks : {
    ropsten:{
      url:'https://eth-sepolia.g.alchemy.com/v2/HFl-MLjMf-svDwA-0GZ5CZQGm9q-8vAz',
      accounts:[ '2c2fb3a8404cf948fb51298031f9425866c36904b8878d09de6dbbbf528520b7' ]
    }
  }
};
  