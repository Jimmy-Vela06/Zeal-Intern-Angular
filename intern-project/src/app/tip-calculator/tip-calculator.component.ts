import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tip-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tip-calculator.component.html',
  styleUrl: './tip-calculator.component.css',
})
export class TipCalculatorComponent {
  // tipPercentage: number = 0;
  showEmoji: boolean = false;

  billAmount: number = 0;
  tipPercentage: number = 12;

  setTipPercentage(percentage: number) {
    this.tipPercentage = percentage;
  }

  calculateTipAmount(): number {
    return (this.billAmount * this.tipPercentage) / 100;
  }

  checkTipPercentage() {
    console.log('Tip percentage:', this.tipPercentage);
    if (this.tipPercentage === 100) {
      console.log('Reached 100%');
      this.showEmoji = true;
      setTimeout(() => {
        this.showEmoji = false;
      }, 2000);
    }
  }

  calculateTotalAmount(): number {
    return this.billAmount + this.calculateTipAmount();
  }
}
