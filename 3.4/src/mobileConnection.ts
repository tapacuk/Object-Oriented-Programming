import { EventArgs } from './eventArgs.js';
import type { EventHandler } from './eventHandler.js';

export class MobileConnection {
  private balance: number;
  private minBalance: number;
  private balanceLowHandlers: EventHandler<EventArgs>[] = [];

  constructor(startBalance: number, minBalance: number) {
    this.balance = startBalance;
    this.minBalance = minBalance;
  }

  public onBalanceLow = (handler: EventHandler<EventArgs>) => {
    this.balanceLowHandlers.push(handler);
  };

  protected raiseBalanceLow = (e: EventArgs) => {
    for (const handler of this.balanceLowHandlers) {
      handler(this, e); // sender = this
    }
  };

  public topUp = (amount: number) => {
    this.balance += amount;

    console.log(
      `Баланс поповнено на ${amount}. Поточний баланс: ${this.balance}`
    );
  };

  public useService = (cost: number) => {
    if (this.balance >= cost) {
      this.balance -= cost;
      console.log(`Використано ${cost}. Залишок: ${this.balance}`);

      if (this.balance < this.minBalance) {
        const args = new EventArgs(
          this.balance,
          `Баланс нижче ${this.minBalance}! Поточний баланс: ${this.balance}.`
        );
        this.raiseBalanceLow(args);
      }
    } else {
      console.log(`Недостатньо коштів для операції.`);
    }
  };

  public getBalance = () => {
    return this.balance;
  };
}
