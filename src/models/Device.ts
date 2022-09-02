import { v4 as uuidv4 } from 'uuid';
export default class Device {
  private serial_number: string;

  constructor() {
    this.serial_number = uuidv4();
  }

  getSerialNumber(): string {
    return this.serial_number;
  }
}
