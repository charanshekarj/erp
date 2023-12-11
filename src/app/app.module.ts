import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { TraitsListComponent } from './traits-list/traits-list.component';
import { Phase1Component } from './phase1/phase1.component';
import { Phase2Component } from './phase2/phase2.component';
import { Phase3Component } from './phase3/phase3.component';
import { Phase4Component } from './phase4/phase4.component';
import { Phase5Component } from './phase5/phase5.component';
import { PhasesComponent } from './phases/phases.component';
import { AboutComponent } from './about/about.component';
import { MethodologyComponent } from './methodology/methodology.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FileViewComponent } from './file-view/file-view.component';
import { FileManagerModule } from '@syncfusion/ej2-angular-filemanager';


@NgModule({
  declarations: [
    AppComponent,
    TraitsListComponent,
    Phase1Component,
    Phase2Component,
    Phase3Component,
    Phase4Component,
    Phase5Component,
    PhasesComponent,
    AboutComponent,
    MethodologyComponent,
    FooterComponent,
    HeaderComponent,
    FileViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    FileManagerModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
