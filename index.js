#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 1500;
let myIncome = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin != myPin) {
    console.log("Incorrect Pin code");
}
else {
    console.log("Correct pin code !!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "fast cash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "fastcash",
                message: "enter fast cash amount",
                type: "rawlist",
                choices: [500, 1000, 1500, 2000]
            }
        ]);
        {
            if (fastcashAns.fastcash > myBalance) {
                console.log("insufficient balance");
            }
            else {
                myBalance -= fastcashAns.fastcash;
                console.log("your remaining balance after fast cash : " + myBalance);
            }
        }
    }
    else {
        if (operationAns.operation === "withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number"
                }
            ]);
            {
                if (myBalance < amountAns.amount) {
                    console.log("insufficient balance");
                }
                else {
                    myBalance -= amountAns.amount;
                    console.log("your remaining balance is:  " + myBalance);
                }
            }
        }
        else {
            if (operationAns.operation = "check balance")
                console.log("your balance is : " + myBalance);
        }
    }
}
