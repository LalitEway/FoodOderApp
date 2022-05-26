import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/Services/cart-service.service';
import { Cart } from 'src/app/Share/models/Cart';
import { CartItem } from 'src/app/Share/models/CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart !: Cart;
  constructor(private cartService:CartServiceService){
    this.setCart()
  }
 
  setCart(){
    this.cart=this.cartService.getCart();
  }
  removeFromCart(cartItme:CartItem){
   this.cartService.removeCart(cartItme.food.id);
    this.setCart();// instance Load Data
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity=parseInt(quantityInString);
   this.cartService.changeQunatity(cartItem.food.id,quantity);
    this.setCart();
  }

  ngOnInit(): void {
  }

}
