import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShopingListService } from '../shoping-list.services';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputReference: ElementRef;
  @ViewChild('amoutInput') amoutInputReference: ElementRef;

  constructor(private slService: ShopingListService) { }

  ngOnInit() {
  }

  onAddIteam() {
    const ingName = this.nameInputReference.nativeElement.value;
    const ingAmount = this.amoutInputReference.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  }

}
