import { MobileConnection } from './mobileConnection.js';
import { EventArgs } from './eventArgs.js';

export class App {
  private connection: MobileConnection;

  constructor() {
    this.connection = new MobileConnection(100, 20);
    this.connection.onBalanceLow(this.handleBalanceLow);
  }

  private handleBalanceLow(sender: any, e: EventArgs) {
    console.log(`Подія: ${e.message}`);
    // console.log(`Ініціатор події:`, sender);
  }

  public run() {
    this.connection.useService(30);
    this.connection.topUp(20);
    this.connection.useService(50);
    this.connection.useService(10);
    this.connection.useService(5);
  }
}

const app = new App();
app.run();
