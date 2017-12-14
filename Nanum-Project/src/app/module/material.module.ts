import { NgModule } from '@angular/core';

// material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCheckboxModule, MatSliderModule, MatIconModule,
  MatDialogModule, MatFormFieldModule, MatCardModule, MatInputModule, MatMenuModule,
  MatStepperModule, MatGridListModule, MatTabsModule, MatTabBody,
  MatChipsModule } from '@angular/material';


@NgModule({
  exports: [
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSliderModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatStepperModule,
    MatGridListModule,
    MatTabsModule,
    MatChipsModule,
  ],
  declarations: []
})
export class MaterialModule { }
