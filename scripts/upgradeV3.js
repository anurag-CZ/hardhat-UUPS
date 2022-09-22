const {ethers, upgrades} = require("hardhat")

const proxyAddress = "0xC03bcC7dbd1789398dBaCC89d10eb6a793C8362B"

async function main() {
    const TokenV3 = await ethers.getContractFactory('TokenV3')
    const tokenV3 = await upgrades.upgradeProxy(proxyAddress, TokenV3)

    await tokenV3.deployed()
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });