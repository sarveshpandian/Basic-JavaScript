function showMenu() {
  alert(
    "1. Water Bottle - Rs.20\n" +
    "2. Chocolate - Rs.30\n" +
    "3. Softdrinks - Rs.40\n" +
    "4. Chips - Rs.15\n" +
    "5. Cupcakes - Rs.35\n" +
    "6. Biscuits - Rs.15"
  );
}

function buyItem(choice, money) {
  let name = "";
  let price = 0;

  if (choice == 1) {
    name = "Water Bottle";
    price = 20;
  } else if (choice == 2) {
    name = "Chocolate";
    price = 30;
  } else if (choice == 3) {
    name = "Softdrinks";
    price = 40;
  } else if (choice == 4) {
    name = "chips";
    price = 15;
  } else if (choice == 5) {
    name = "cupcakes";
    price = 35;
  } else if (choice == 6) {
    name = "Biscuits";
    price = 15;
  } else {
    alert("Invalid item number!");
    return false;
  }

  if (money < price) {
    alert("Not enough balance! " + name + " costs Rs." + price);
    return false;
  }
  else{
    let change = money - price;
    if (change == 0) {
    alert("You bought " + name + ". Exact amount, no change.");
  }
  else {
    alert("You bought " + name + ". Your change is Rs." + change);
  }
  return true;
}
}

function startVendingMachine() {
  let again = true;
  while (again == true) {
    showMenu();

    let choice = Number(prompt("Enter item number (1-6):"));
    let money = Number(prompt("Enter how much money you have:"));
    if (isNaN(choice) || choice < 1 || choice > 6) {
      alert("Invalid item number!");
    }
    else if (isNaN(money) || money < 0) {
      alert("Invalid amount! Please enter a positive number.");
    }
    else {
      buyItem(choice, money);
    }

    again = confirm("Do you want to buy something else?");
  }
}

startVendingMachine();
