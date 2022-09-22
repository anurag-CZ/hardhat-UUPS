const {ethers, upgrades} = require("hardhat")

const proxyAddress = "0xC03bcC7dbd1789398dBaCC89d10eb6a793C8362B"

async function main() {
    const TokenV2 = await ethers.getContractFactory('TokenV2')
    const tokenV2 = await upgrades.upgradeProxy(proxyAddress, TokenV2)

    await tokenV2.deployed()
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });