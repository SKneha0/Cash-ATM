#! /usr/bin/env node
import inquirer from "inquirer";
let mybalanc = 10000; //DOLLAR
let mypin = 1611;
let pinAnser = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin",
    type: "number",
  },
]);
//12345 === 1234-false
if (pinAnser.pin === mypin) {
  console.log("correct pin code!!!");
  let operationAns = await inquirer.prompt([
    {
      name: "operetion",
      message: "plese selec option",
      type: "list",
      choices: ["withdraw", "check balance", "fast cash"],
    },
  ]);
  console.log(operationAns);

  if (operationAns.operetion === "fast cash") {
    let amountAns2 = await inquirer.prompt([
      {
        name: "fast",
        message: "How mach cash you want to withdraw",
        type: "list",
        choices: [800, 700, 1000, 9000, 6000],
      },
    ]);
    mybalanc -= amountAns2.fast;
    console.log(`your balanc is : ${mybalanc}`);
    //= ,-= ,+=
  } else if (operationAns.operetion === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ]);

    if (mybalanc <= amountAns.amount) {
      console.log("Wrong Amount");
    } else {
      mybalanc -= amountAns.amount;
      console.log(`your balanc is : ${mybalanc}`);
    }
  }else if (operationAns.operetion === "check balance"){
    console.log(`Your Balance is: ${mybalanc}`)
  }

} else console.log("incorrect pin code");
console.log("thank you");
