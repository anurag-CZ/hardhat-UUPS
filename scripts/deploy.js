const {ethers, upgrades} = require("hardhat");

async function main() {
  const Token = await ethers.getContractFactory('Token')
  const token = await upgrades.deployProxy(Token)

  await token.deployed()

  console.log("address:", token.address)
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
