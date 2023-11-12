import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Output() passListEvent = new EventEmitter<User[]>

  firstname:string = '';
  lastname:string = '';
  dob:Date = new Date('');
  mobile:string = '';
  email:string = '';
  age:number = 1;

  addUser = () => {
    return {
      firstname: this.firstname,
      lastname: this.lastname,
      dob: new Date(this.dob),
      mobileNum: this.mobile,
      email: this.email,
      age: this.age
    }
  }

  list: User[] = [
    {
      firstname: 'Luka',
      lastname: 'Budagovi', 
      dob: new Date('2002-07-27'), 
      mobileNum: '514-14-14-14', 
      email: 'budagovi@example.com', 
      age: 21
    },
    {
      firstname: 'Iva',
      lastname: 'Saatashvili', 
      dob: new Date('2003-02-18'), 
      mobileNum: '533-44-55-66', 
      email: 'saata@example.com', 
      age: 20
    },
    {
      firstname: 'Guram',
      lastname: 'Jajanidze', 
      dob: new Date('2004-05-22'), 
      mobileNum: '555-00-55-00', 
      email: 'gurijajo@example.com', 
      age: 19
    },
  ]

  listEventHandler = () => {
    const newUser:User = this.addUser();
    this.list.push(newUser);
    this.passListEvent.emit(this.list);
  }
}
