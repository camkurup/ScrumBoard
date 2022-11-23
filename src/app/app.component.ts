import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Board', url: '/folder/Board', icon: 'mail' },
    { title: 'Create UserStory', url: '/folder/CreateUserStory', icon: 'paper-plane' },
    { title: 'Create ParrenTask', url: '/folder/CreateParrenTask', icon: 'heart' },
    { title: 'Create ChildeTask', url: '/folder/CreateChildeTask', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = [];
  constructor() {}
}
