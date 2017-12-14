import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-profile-follow-modal',
  templateUrl: './profile-follow-modal.component.html',
  styleUrls: ['./profile-follow-modal.component.css']
})
export class ProfileFollowModalComponent implements OnInit {

  constructor(public thisdialogRef: MatDialogRef<ProfileFollowModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.thisdialogRef.close();
  }

}
