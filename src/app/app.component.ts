import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  codeVideo:string="xSZkMTM5gag";
  //fullCodeVideo:string="https://www.youtube.com/embed/"+this.codeVideo;
  fullCodeVideo:string="https://www.youtube.com/embed/xSZkMTM5gag";
  title = 'app works!';
  wi:number=560;
  hi:number=315;
}
