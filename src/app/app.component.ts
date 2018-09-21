import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IUser } from './user.interface';
import { AppService } from './app.service';

interface IState {
  loading: boolean;
  users: IUser[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  state: IState = {
    loading: false,
    users: []
  }

  constructor(public fb: FormBuilder, public service: AppService) {}


  onClick(user: IUser) {
    alert(user.name);
  }

  createForm() {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.maxLength(6)]]
    })

    this.form.valueChanges.subscribe(() => console.log('change', this.form.value))
  }

  fetchUsers() {
    this.state = {...this.state, loading: true};

    this.service.users()
  }

  onSubmit() {
    console.log(this.form.value);
  }

  ngOnInit() {
    this.createForm();
    this.fetchUsers();
    this.service.hello('andres')

  }
}
