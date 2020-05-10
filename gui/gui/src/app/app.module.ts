import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { ChatguiComponent } from './components/chat/chatgui/chatgui.component';
import { ChatlistComponent } from './components/chat/chatlist/chatlist.component';
import { ChatbodyComponent } from './components/chat/chatbody/chatbody.component';
import { ChatinputComponent } from './components/chat/chatinput/chatinput.component';
import { ChatmessageComponent } from './components/chat/chatmessage/chatmessage.component';
import { ChatheaderComponent } from './components/chat/chatheader/chatheader.component';
import { ChatmembersComponent } from './components/chat/chatmembers/chatmembers.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ChatguiComponent,
    ChatlistComponent,
    ChatbodyComponent,
    ChatinputComponent,
    ChatmessageComponent,
    ChatheaderComponent,
    ChatmembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
