function accountBalance(input) {
  let index = 0;
  let addMoney = input[index];
  index++;
  let total = 0;
  while (addMoney !== "NoMoreMoney") {
    let balance = Number(addMoney);
    if (balance <= 0) {
      console.log("Invalid operation!");
      break;
    }

    console.log(`Increase: ${balance.toFixed(2)}`);
    addMoney = input[index];
    index++;
    total += balance;
  }

  console.log(`Total: ${total.toFixed(2)}`);
}
accountBalance(["120", "45.55", "-150"]);
