require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()

require("@nomiclabs/hardhat-etherscan")

require("hardhat-gas-reporter")
require("solidity-coverage")
require("hardhat-deploy")

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY

module.exports = {
    solidity: {
        compilers: [{ version: "0.8.8" }, { version: "0.6.6" }]
    },
    networks: {
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
            blockConfirmations: 6
        }
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        // coinmarketcap: COINMARKETCAP_API_KEY,
        token: "MATIC"
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY
    },

    namedAccounts: {
        deployer: {
            default: 0
        }
    }
}
