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
  public bill: number = 0;
  public customTip: number = 0;
  public numberOfPeople: number = 1;
  public tipPercentage: number = 0;

  showEmoji: boolean = false;

  get tipAmount(): number {
    return (this.bill * this.tipPercentage) / 100 / this.numberOfPeople;
  }

  get totalAmount(): number {
    return (
      (this.bill + (this.bill * this.tipPercentage) / 100) / this.numberOfPeople
    );
  }

  setTip(percentage: number): void {
    this.tipPercentage = percentage;
    this.customTip = 0;
  }

  reset(): void {
    this.bill = 0;
    this.customTip = 0;
    this.numberOfPeople = 1;
    this.tipPercentage = 0;
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
}
