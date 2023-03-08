export class School{
  id: number;
  name: string;
  phone: string;
  address: string;
  active: boolean;
  createdDate: Date;
  lastModifiedDate: Date;


  constructor(id: number, name: string, phone: string, address: string, active: boolean, createdDate: Date, lastModifiedDate: Date) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.address = address;
    this.active = active;
    this.createdDate = createdDate;
    this.lastModifiedDate = lastModifiedDate;
  }
}
