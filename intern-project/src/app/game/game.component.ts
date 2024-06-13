import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBotService } from '../chat-bot.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent {
  public gameOver: boolean = false;
  public chatBotMessage: string = '';
  public userChoice: string = '';
  public botChoice: string = '';
  public choices: string[] = ['Rock', 'Paper', 'Scissors'];

  constructor(private chatBotService: ChatBotService) {}

  playGame(choice: string) {
    this.userChoice = choice;
    this.botChoice =
      this.choices[Math.floor(Math.random() * this.choices.length)];

    if (this.userChoice === 'Rock') {
      this.botChoice = 'Paper';
    } else if (this.userChoice === 'Paper') {
      this.botChoice = 'Scissors';
    } else if (this.userChoice === 'Scissors') {
      this.botChoice = 'Rock';
    }

    this.gameOver = true;
    this.chatBotMessage = this.chatBotService.getInsult();
  }

  resetGame() {
    this.gameOver = false;
    this.chatBotMessage = '';
    this.userChoice = '';
    this.botChoice = '';
  }
}
