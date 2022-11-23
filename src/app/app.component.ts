import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Board', url: '/folder/Board', icon: 'clipboard' },
    { title: 'Create UserStory', url: '/folder/CreateUserStory', icon: 'create' },
    { title: 'Create ParrenTask', url: '/folder/CreateParrenTask', icon: 'create' },
    { title: 'Create ChildeTask', url: '/folder/CreateChildeTask', icon: 'create' },
    //{ title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    //{ title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = [];
  constructor() {}
}
