import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatBotService {
  private insults: string[] = [
    "You're really bad at this.",
    'Is that the best you can do?',
    "I've seen toddlers play better.",
    "Maybe this game isn't for you.",
    'Ouch! That was pathetic.',
    "Don't quit your day job.",
    "I've seen rocks make better decisions.",
    'Wow, just... wow.',
    'Do you even know how to play?',
    "You're the reason they put directions on shampoo.",
    'Were you even trying?',
    'Better luck next time... or not.',
    'Epic fail!',
    "You're a natural... at losing.",
    'Is this your first time playing?',
    'That was embarrassing.',
    "I've met cats with better game strategies.",
    'You should consider a different game.',
    "You're making this too easy.",
    'Pathetic attempt!',
  ];

  constructor() {}

  getInsult(): string {
    const randomIndex = Math.floor(Math.random() * this.insults.length);
    return this.insults[randomIndex];
  }
}
