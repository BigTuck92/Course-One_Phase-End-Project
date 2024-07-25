import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Client } from '../../modul/client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-management',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './client-management.component.html',
  styleUrl: './client-management.component.css'
})

export class ClientManagementComponent {
  newClientRadio = document.getElementById("inlineRadio1");
  viewClientRadio = document.getElementById("inlineRadio2");
  showClientRegister = false;
  showClientList = false;

  NewClientForm(){
    this.showClientRegister = true;
    this.showClientList = false;
  }

  ClientListView(){
    this.showClientRegister = false;
    this.showClientList = true;
  }
  
  clients: Client[] = [
    new Client(1, "Jake", "jake@project.com", "Password123"),
    new Client(2, "Sia", "sia@project.com", "Password123"),
    new Client(3, "George", "george@project.com", "Password123"),
    new Client(4, "Kim", "kim@project.com", "Password123"),
    new Client(5, "Leo", "leo@project.com", "Password123"),
    new Client(6, "Mike", "mike@project.com", "Password123"),
    new Client(7, "Fionna", "fionna@project.com", "Password123"),
  ];

  clientForm = new FormGroup(
    {
      cid: new FormControl(0),
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      rePasswaord: new FormControl('')
    }
  );

  addClientToDB(){ }
}
