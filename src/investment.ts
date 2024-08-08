export class Investment {

  initialAmount: number;
  recurringAmount: number;
  depositInterval: string;
  intrestRate: number;
  capitalisationInterval: string;

  // startAge: 32,
  // endAge: 40,

  constructor(
    initialAmount: number,
    recurringAmount: number,
    depositInterval: string,
    intrestRate: number,
    capitalisationInterval: string,
  ) {
    this.initialAmount = initialAmount;
    this.recurringAmount = recurringAmount;
    this.depositInterval = depositInterval;
    this.intrestRate = intrestRate;
    this.capitalisationInterval = capitalisationInterval;
  }

  getStatusForDay(date: Date): InvestmentSnapshot {
    const currentDate = new Date().getTime();

    const months = (date.getTime() - currentDate) / 1000 / 60 / 60 / 24;


    console.log('Test: ', currentDate.toString());
    console.log('Test asd: ', months);

    return 'Hello, ';
  }

  // Eventy
  // 1. Deposit
  // 2. Withdrawal
  // 3. Capitalization
  // 4. ??

}

class InvestmentSnapshot {

}

// let greeter = new Greeter('world');
