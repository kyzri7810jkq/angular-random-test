
import { NgModule } from '@angular/core';
import { 
    MatToolbarModule, 
    MatIconModule, 
    MatInputModule, 
    MatButtonModule,
} from '@angular/material';
 
@NgModule({
    declarations: [
    ],
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule
    ]
  })
  export class AppMaterial { }
  