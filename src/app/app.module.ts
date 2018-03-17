import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { ParentNameComponent } from './parent-name/parent-name.component';
import { ChildNameComponent } from './parent-Name/child-name/child-name.component';
import { SkillsComponent } from './parent/skills/skills.component';
import { ImagesComponent } from './parent/images/images.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    SkillsComponent,
    ParentNameComponent,
    ChildNameComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
