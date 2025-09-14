require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 100,
      },
      viaIR: true,
    }
  },
  defaultNetwork: "sepolia", 
  networks: {
    hardhat: {
      chainId: 1337
    },
    sepolia: {
      url: API_URL,
      accounts: [PRIVATE_KEY],
      gasPrice: 100_000_000
    }
  }
};
