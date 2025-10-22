import { MobileConnection } from './mobileConnection.js';
import { EventArgs } from './eventArgs.js';
import type { EventHandler } from './eventHandler.js';

export class App {
  private connection: MobileConnection;

  constructor() {
    this.connection = new MobileConnection(100, 20);

    const handler: EventHandler<EventArgs> = this.handleBalanceLow;
    this.connection.onBalanceLow(handler);
  }

  private handleBalanceLow = (sender: any, e: EventArgs) => {
    console.log(`----- Подія: ${e.message}`);
    console.log(`• Ініціатор події:`, sender.constructor.name);
  };

  public run = () => {
    console.log('=== Початок симуляції мобільного зв’язку ===');
    this.connection.useService(30);
    this.connection.useService(50);
    this.connection.topUp(10);
    this.connection.useService(10);
    this.connection.useService(5);
  };
}

const app = new App();
app.run();
