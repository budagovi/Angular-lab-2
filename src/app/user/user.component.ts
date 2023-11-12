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

  list: User[] = [];

  listEventHandler = () => {
    const newUser:User = this.addUser();
    this.list.push(newUser);
    this.passListEvent.emit(this.list);
  }
}
