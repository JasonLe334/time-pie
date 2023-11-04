import { Component } from '@angular/core';
import {momentDatePipe} from "../pipe/datemoment.pipe";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  protected readonly momentDatePipe = momentDatePipe;
}
