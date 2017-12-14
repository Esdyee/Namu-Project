import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface Topic {
  name: string;
  imge: string;
  follow: boolean;
}


@Component({
  selector: 'app-topic-select',
  templateUrl: './topic-select.component.html',
  styleUrls: ['./topic-select.component.css']
})
export class TopicSelectComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  topics: Topic[] = [
    { name: 'shiba1', imge: 'https://material.angular.io/assets/img/examples/shiba1.jpg', follow: true },
    { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: true },
    { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: false },
    { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: true },
    { name: 'shina2', imge: 'https://material.angular.io/assets/img/examples/shiba2.jpg', follow: false },
    { name: 'shiba1', imge: 'https://material.angular.io/assets/img/examples/shiba1.jpg', follow: true },
    { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: true },
    { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: false },
    { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: true },
    { name: 'shina2', imge: 'https://material.angular.io/assets/img/examples/shiba2.jpg', follow: false },
    { name: 'shiba1', imge: 'https://material.angular.io/assets/img/examples/shiba1.jpg', follow: true },
    { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: true },
    { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: false },
    { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: true },
    { name: 'shina2', imge: 'https://material.angular.io/assets/img/examples/shiba2.jpg', follow: false },
    { name: 'shiba1', imge: 'https://material.angular.io/assets/img/examples/shiba1.jpg', follow: true },
    { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: true },
    { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: false },
    { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: true },
    { name: 'shina2', imge: 'https://material.angular.io/assets/img/examples/shiba2.jpg', follow: false },
    { name: 'shiba1', imge: 'https://material.angular.io/assets/img/examples/shiba1.jpg', follow: true },
    { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: true },
    { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: false },
    { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: true },
    { name: 'shina2', imge: 'https://material.angular.io/assets/img/examples/shiba2.jpg', follow: false },
    { name: 'shiba1', imge: 'https://material.angular.io/assets/img/examples/shiba1.jpg', follow: true },
    { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: true },
    { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: false },
    { name: 'topic name', imge: 'http://via.placeholder.com/135x135', follow: true },
    { name: 'shina2', imge: 'https://material.angular.io/assets/img/examples/shiba2.jpg', follow: false }
  ];

  constructor(private _formBuilder: FormBuilder,
    public thisdialogRef: MatDialogRef<TopicSelectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onNoClick(): void {
    this.thisdialogRef.close();
  }

}
