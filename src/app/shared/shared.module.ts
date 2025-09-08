import { NgModule } from "@angular/core";
import { MaterialModule } from "./materials/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
    declarations: [],
    imports:[
    MaterialModule,
    BrowserAnimationsModule,  
    DragDropModule
    ],
    exports:[MaterialModule,DragDropModule]
})
export class SharedModule {}