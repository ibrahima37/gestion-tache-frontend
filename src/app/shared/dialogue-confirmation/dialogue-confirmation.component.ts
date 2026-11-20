import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialogue-confirmation',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './dialogue-confirmation.component.html',
  styleUrls: ['./dialogue-confirmation.component.scss']
})
export class DialogueConfirmationComponent {

  // ✅ Personnalisation via @Input()
  @Input() title: string = 'Confirmation';
  @Input() message: string = 'Êtes-vous sûr de vouloir effectuer cette action ?';
  @Input() confirmText: string = 'Confirmer';
  @Input() cancelText: string = 'Annuler';

  // ✅ Événements pour le parent
  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  onConfirm() {
    this.confirmed.emit();
  }

  onCancel() {
    this.cancelled.emit();
  }

}
