require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades")
require("@nomiclabs/hardhat-etherscan")

require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",

  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY]
    },

    localhost: {
      url: 'http:127.0.0.1:7545'
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};
