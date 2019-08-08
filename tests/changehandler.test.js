let { ChangeHandler } = require("../src/changehandler");

describe("Tests for ChangeHandler", function() {
  // Set up a test below...
  test("The ChangeHandler class is defined.", function() {
    // Remember, you can arrange, act, and assert...start small
    expect(ChangeHandler).toBeDefined();
  });
  //string is just a description for me. nothing more.
  it("amountDue is set based on an argument", function() {
    //arrange
    let vendingMachine = new ChangeHandler(105);
    //assert
    expect(vendingMachine.amountDue).toBe(105);
  });

  it("cashTendered is set to zero", function() {
    let vendingMachine = new ChangeHandler(100);
    expect(vendingMachine.cashTendered);
  });

  it("Inserting a penny adds one to cash tendered", function() {
    const vendingMachine = new ChangeHandler(105);
    vendingMachine.insertCoin("penny");
    expect(vendingMachine.cashTendered).toBe(1);
  });
  it("Inserting a nickel adds five to cash tendered", function() {
    const vendingMachine = new ChangeHandler(105);
    vendingMachine.insertCoin("nickel");
    expect(vendingMachine.cashTendered).toBe(5);
  });
  it("Inserting a dime adds ten to cash tendered", function() {
    const vendingMachine = new ChangeHandler(105);
    vendingMachine.insertCoin("dime");
    expect(vendingMachine.cashTendered).toBe(10);
  });
  it("Inserting a quarter adds twenty-five to cash tendered", function() {
    const vendingMachine = new ChangeHandler(105);
    vendingMachine.insertCoin("quarter");
    expect(vendingMachine.cashTendered).toBe(25);
  });
  it("Calling the function multiple times to check the addition", function() {
    const vendingMachine = new ChangeHandler(105);
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("dime");
    vendingMachine.insertCoin("nickel");
    vendingMachine.insertCoin("penny");
    expect(vendingMachine.cashTendered).toBe(41);
  });
  it("Returns true if cashTendered more than amountDue.", function() {
    const vendingMachine = new ChangeHandler(50);
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    expect(vendingMachine.isPaymentSufficient()).toBe(true);
  });
  it("Returns false if cashTendered less than amountDue.", function() {
    const vendingMachine = new ChangeHandler(100);
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    expect(vendingMachine.isPaymentSufficient()).toBe(false);
  });
  it("Return change: 68", function() {
    const vendingMachine = new ChangeHandler(5);
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("dime");
    vendingMachine.insertCoin("dime");
    vendingMachine.insertCoin("penny");
    vendingMachine.insertCoin("penny");
    vendingMachine.insertCoin("penny");
    console.log(vendingMachine.cashTendered - vendingMachine.amountDue);
    expect(vendingMachine.giveChange()).toEqual({
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 3
    });
  });
  it("Return change: 32", function() {
    const vendingMachine = new ChangeHandler(5);
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("dime");
    vendingMachine.insertCoin("penny");
    vendingMachine.insertCoin("penny");
    console.log(vendingMachine.cashTendered - vendingMachine.amountDue);
    expect(vendingMachine.giveChange()).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2
    });
  });
  it("Return change: 10", function() {
    const vendingMachine = new ChangeHandler(5);
    vendingMachine.insertCoin("dime");
    vendingMachine.insertCoin("nickel");
    console.log(vendingMachine.cashTendered - vendingMachine.amountDue);
    expect(vendingMachine.giveChange()).toEqual({
      quarters: 0,
      dimes: 1,
      nickels: 0,
      pennies: 0
    });
  });
  it("Return change: 27", function() {
    const vendingMachine = new ChangeHandler(5);
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("nickel");
    vendingMachine.insertCoin("penny");
    vendingMachine.insertCoin("penny");
    console.log(vendingMachine.cashTendered - vendingMachine.amountDue);
    expect(vendingMachine.giveChange()).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 0,
      pennies: 2
    });
  });
});
