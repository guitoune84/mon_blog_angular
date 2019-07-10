import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import { PostListService } from './services/post-list.service';
import { NewPostComponentComponent } from './new-post-component/new-post-component.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    NewPostComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PostListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
