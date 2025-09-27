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

Clone this git repository in your desired folder location with the command below

###
    git clone https://github.com/peterparker303e24/Base.git

Go into the Frontend directory.

###
    cd Base/TheDarkKnight/Frontend

Install the project dependencies. (ethers.js for blockchain interactions, jszip.js for ZIP file interactions, express.js for initiating a local frontend server)

###
    npm install

Run a local server of the frontend and access the website on localhost with default port 3000. ([http://localhost:3000/](http://localhost:3000/))

###
    node frontendServer.js

Your frontend setup should now be complete. At this point you can choose to connect your frontend to a blockchain running locally on your computer or to the live Sepolia testnet online.

## How To Setup Blockchain Locally 

## How To Connect MetaMask To Freelance Society

### Connect MetaMask To Sepolia Blockchain

### Connect MetaMask To Local Blockchain

## Tutorial

## Closing Remarks

This project is currently in beta testing to allow for participation from anyone, but may also have bugs since it has not been widely tested. However, the Sepolia blockchain is a testnet, so no valuable cryptocurrency will be lost. Though, if you also have a mainnet Ethereum wallet, then you may still want to make sure you separate the wallets and accounts as much as possible so you do not accidentally mix up transactions between the blockchains or leak any seeds.

Freelance Society interacts with online cryptocurrencies with freedom of privacy and anonymity. This incentivizes attacks from hackers to this platform, so contributions to this project should be taken slowly and with caution.

For more information on the Freelance Society project, view further documentation here: [Freelance Society Learning](https://peterparker303e24.github.io/Base/TheDarkKnight/Frontend/pages/learning/theory/freelanceSociety.html).
