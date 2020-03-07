import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LlistaReceptesComponent } from './llista-receptes/llista-receptes.component';
import { ReceptesComponent } from './receptes/receptes.component';
import { PipesPipe } from './pipes.pipe';
import { SelectorPipe } from './selector.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LlistaReceptesComponent,
    ReceptesComponent,
    PipesPipe,
    SelectorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
