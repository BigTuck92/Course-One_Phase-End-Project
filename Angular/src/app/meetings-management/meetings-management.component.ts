import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meeting } from '../../modul/meeting';

@Component({
  selector: 'app-meetings-management',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './meetings-management.component.html',
  styleUrl: './meetings-management.component.css'
})
export class MeetingsManagementComponent {

  newMeetingRadio = document.getElementById("inlineRadio1");
  viewMeetingRadio = document.getElementById("inlineRadio2");
  showMeetingCreate = false;
  showMeetingList = false;

  NewMeetingForm(){
    this.showMeetingCreate = true;
    this.showMeetingList = false;
  }

  MeetingListView(){
    this.showMeetingCreate = false;
    this.showMeetingList = true;
  }
  
  meetings: Meeting[] = [
    new Meeting(1, "New Client Orientation", "2024-05-13 14:30:00"),
    new Meeting(2, "New Supplier Introduction", "2024-05-14 13:45:00"),
    new Meeting(3, "KPI Review", "2024-05-15 09:00:00"),
  ];

  meetingsForm = new FormGroup (
    {
      mid: new FormControl(0),
      topic: new FormControl(''),
      dateTime: new FormControl(''),
    }
  );

  addMeetingToDB(){ }

}
