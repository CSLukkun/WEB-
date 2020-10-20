import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataChildComponent } from './parent-to-child/data-child/data-child.component';
import { DataParentComponent } from './parent-to-child/data-parent/data-parent.component';
import { DataChildSetterComponent } from './parent-to-child/data-child-setter/data-child-setter.component';
import { DataChildChangesComponent } from './parent-to-child/data-child-changes/data-child-changes.component';
import { LocalChildComponent } from './parent-child-local/local-child/local-child.component';
import { LocalParentComponent } from './parent-child-local/local-parent/local-parent.component';
import { EventChildComponent } from './parent-child-event/event-child/event-child.component';
import { EventParentComponent } from './parent-child-event/event-parent/event-parent.component';
import { ChildViewComponent } from './parent-child-view/child-view/child-view.component';
import { ParentViewComponent } from './parent-child-view/parent-view/parent-view.component';
import { ServiceParentComponent } from './parent-child-service/service-parent/service-parent.component';
import { ServiceChildComponent } from './parent-child-service/service-child/service-child.component';

@NgModule({
  declarations: [
    AppComponent,
    DataChildComponent,
    DataParentComponent,
    DataChildSetterComponent,
    DataChildChangesComponent,
    LocalChildComponent,
    LocalParentComponent,
    EventChildComponent,
    EventParentComponent,
    ChildViewComponent,
    ParentViewComponent,
    ServiceParentComponent,
    ServiceChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
