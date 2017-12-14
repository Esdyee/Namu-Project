import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-profile-topic-modal',
  templateUrl: './profile-topic-modal.component.html',
  styleUrls: ['./profile-topic-modal.component.css']
})
export class ProfileTopicModalComponent implements OnInit {

  constructor(public thisdialogRef: MatDialogRef<ProfileTopicModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.thisdialogRef.close();
  }

}
