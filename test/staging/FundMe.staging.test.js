const { getNamedAccounts, ethers, network } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")
const { assert } = require("chai")

developmentChains.includes(network.name)
    ? describe.skip
    : describe("FundMe", async function() {
          let fundMe
          let deployer
          const sendValue = ethers.utils.parseEther("0.05")
          beforeEach(async function() {
              deployer = (await getNamedAccounts()).deployer
              fundMe = await ethers.getContract("FundMe", deployer)
          })
          it("allows people to fund an withdraw", async function() {
              await fundMe.fund({ value: sendValue })
              const tx = await fundMe.withdraw()
              await tx.wait(1)
              console.log("waiting on deploying...")
              const endingBalance = await ethers.provider.getBalance(
                  fundMe.address
              )

              assert.equal(endingBalance.toString(), "0")
          })
      })
