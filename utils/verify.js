const { run } = require("hardhat")

const verify = async (ContractAddress, args) => {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: ContractAddress,
            constructorArguments: args
        })
    } catch (e) {
        if (e.message.toLowercase().includes("already verified")) {
            console.log("Already verified")
        } else {
            console.log(e)
        }
    }
}
module.exports = { verify }
