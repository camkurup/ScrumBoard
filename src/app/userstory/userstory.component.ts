import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserStory } from './userstory';

@Component({
  selector: 'app-userstory',
  templateUrl: './userstory.component.html',
  styleUrls: ['./userstory.component.scss'],
})
export class UserstoryComponent {
  @Input() task: Task | null = null;
  @Output() edit = new EventEmitter<Task>();
}
