import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() imagen!: string;
  @Input() texto!: string;
  @Input() titulo!: string;
  @Input() url!: string;
  @Input() urlRepo!: string;

}
