import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyAZOrCEdWJnSi7oH9jXd2RqtbNcCCbSBIk",
      authDomain: "mon-blog-1d4fb.firebaseapp.com",
      databaseURL: "https://mon-blog-1d4fb.firebaseio.com",
      projectId: "mon-blog-1d4fb",
      storageBucket: "mon-blog-1d4fb.appspot.com",
      messagingSenderId: "1006956639440",
      appId: "1:1006956639440:web:0fd38eebff9b875d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
