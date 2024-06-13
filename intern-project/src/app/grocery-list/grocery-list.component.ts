// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-grocery-list',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './grocery-list.component.html',
//   styleUrl: './grocery-list.component.css'
// })
// export class GroceryListComponent {

// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; //

interface GroceryItem {
  name: string;
  quantity: number;
  checked: boolean;
}

@Component({
  selector: 'app-grocery-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css',
})
export class GroceryListComponent {
  public newItemName: string = '';
  public newItemQuantity: number = 1;
  public groceryList: GroceryItem[] = [];

  addItem() {
    if (this.newItemName && this.newItemQuantity > 0) {
      this.groceryList.push({
        name: this.newItemName,
        quantity: this.newItemQuantity,
        checked: false,
      });
      this.newItemName = '';
      this.newItemQuantity = 1;
    }
  }

  toggleItemChecked(index: number) {
    this.groceryList[index].checked = !this.groceryList[index].checked;
  }

  removeItem(index: number) {
    this.groceryList.splice(index, 1);
  }
}
