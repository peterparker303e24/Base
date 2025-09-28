# Freelance Society

Freelance Society is a decentralized free market platform to provide efficient transactions of labor and capital.

[Access Freelance Society Here](https://peterparker303e24.github.io/Base/TheDarkKnight/Frontend/index.html) (Requires blockchain wallet extension such as MetaMask for interactions)

This project is currently built on the Ethereum testnet, Sepolia. This testnet does not require any payment since the Sepolia cryptocurrency can be freely accessed with faucets through websites such as in the link below. Also, a wallet browser extension is required, such as MetaMask, though this is also free to install.

[Get free SepoliaETH here](https://faucetlink.to/sepolia)

## Table Of Contents

[What Is Freelance Society](#what-is-freelance-society)

[Why Use Freelance Society](#why-use-freelance-society)

[How To Setup Frontend Locally](#how-to-setup-frontend-locally)

[How To Setup Blockchain Locally](#how-to-setup-blockchain-locally)

[How To Connect MetaMask To Freelance Society](#how-to-connect-metamask-to-freelance-society)

[Tutorial](#tutorial)

[Closing Remarks](#closing-remarks)

## What Is Freelance Society

## Why Use Freelance Society

## How To Setup Frontend Locally

You should already have the following dependencies installed on your system, and if you do not already, then you can search online to find out how to install them:
- git
- node
- node package manager

1. Clone this git repository in your desired folder location with the command below.

###
    git clone https://github.com/peterparker303e24/Base.git

2. Go into the Frontend directory.

###
    cd Base/TheDarkKnight/Frontend

3. Install the project dependencies. (ethers.js for blockchain interactions, jszip.js for ZIP file interactions, express.js for initiating a local frontend server, and cookie-parser for handling browser cookies)

###
    npm install

4. Run a local server of the frontend and access the website on localhost with default port 3000 ([http://localhost:3000/](http://localhost:3000/)). The frontend will be configured to target the online Sepolia blockchain by default. Use the parameter `--local-blockchain` to configure the frontend to target a locally running blockchain.

###
    node frontendServer.js

or

###
    node frontendServer.js --local-blockchain

- If you want to connect to the Sepolia blockchain, then your frontend setup is complete and you can move on to the section [Connect MetaMask To Sepolia Blockchain](#connect-metamask-to-sepolia-blockchain).

- If you want to instead connect to a locally running blockchain, then complete the steps in the section [How To Setup Blockchain Locally](#how-to-setup-blockchain-locally).

## How To Setup Blockchain Locally

You should already have the following dependencies installed on your system, and if you do not already, then you can search online to find out how to install them:
- git
- node
- node package manager

1. Clone this git repository in your desired folder location with the command below. (If you have already done so in the frontend setup, then skip this step)

###
    git clone https://github.com/peterparker303e24/Base.git

2. Go into the Backend directory.

###
    cd Base/TheDarkKnight/Backend

3. Install the project dependencies. (ethers.js for blockchain interactions, dotenv.js for getting environment variables)

###
    npm install

4. Run a local blockchain server using hardhat on localhost with default port 8545. ([http://localhost:8545/](http://localhost:8545/))

###
    npx hardhat node

5. In a new terminal window at the same location (`Base/Backend`), run one of the commands below to deploy the contracts onto the local blockchain with optional test data to deploy with.

- deploy with no data

###
    npx hardhat run scripts/deploy.js --network localhost

- or deploy with test data

###
    npx hardhat run scripts/deployWithData.js --network localhost

Your backend blockchain setup should now be complete. You can move on to the section [Connect MetaMask To Local Blockchain](#connect-metamask-to-local-blockchain).

## How To Connect MetaMask To Freelance Society

### Connect MetaMask To Sepolia Blockchain

### Connect MetaMask To Local Blockchain

## Tutorial

## Closing Remarks

This project is currently in beta testing to allow for participation from anyone, but may also have bugs since it has not been widely tested. However, the Sepolia blockchain is a testnet, so no valuable cryptocurrency will be lost. Though, if you also have a mainnet Ethereum wallet, then you may still want to make sure you separate the wallets and accounts as much as possible so you do not accidentally mix up transactions between the blockchains or leak any seeds.

Freelance Society interacts with online cryptocurrencies with freedom of privacy and anonymity. This incentivizes attacks from hackers on this platform, so contributions to this project should be taken slowly and with caution.

For more information on the Freelance Society project, view further documentation here: [Freelance Society Learning](https://peterparker303e24.github.io/Base/TheDarkKnight/Frontend/pages/learning/theory/freelanceSociety.html).
