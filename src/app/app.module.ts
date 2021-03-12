import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ResetBtn } from "./reset/reset.component";
import { ChangeBtn } from "./change/change.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ResetBtn, ChangeBtn],
  bootstrap: [AppComponent]
})
export class AppModule {}
