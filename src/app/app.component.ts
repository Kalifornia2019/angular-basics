import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: "Angular componets learning", text: "Angular block", id: 1},
    {title: "Next angular components", text: "Angular component block 2", id: 2}
  ]
}
