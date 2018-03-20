import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core";


import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { ParentNameComponent } from './parent-name/parent-name.component';
import { ChildNameComponent } from './parent-Name/child-name/child-name.component';
import { SkillsComponent } from './parent/skills/skills.component';
import { ImagesComponent } from './parent/images/images.component';
import { HometaskComponent } from './hometask/hometask.component';
import { GameComponent } from './hometask/game/game.component';
import { OddComponent } from './hometask/odd/odd.component';
import { EvenComponent } from './hometask/even/even.component';
import { LessNewDirectiveComponent } from './less-new-directive/less-new-directive.component';
import { OrangeColorDirective } from './less-new-directive/orange-color.directive';
import { MouseEventsComponent } from './mouse-events/mouse-events.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    SkillsComponent,
    ParentNameComponent,
    ChildNameComponent,
    ImagesComponent,
    HometaskComponent,
    GameComponent,
    OddComponent,
    EvenComponent,
    LessNewDirectiveComponent,
    OrangeColorDirective,
    MouseEventsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
