import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/Services/cart-service.service';
import { Cart } from 'src/app/Share/models/Cart';
import { CartItem } from 'src/app/Share/models/CartItem';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart !: Cart;
  quantityNumber!:number;


  constructor(private cartService:CartServiceService){
    this.setCart()
    console.log(this.cart);
    console.log(this.quantityNumber);
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
    this.quantityNumber =parseInt(quantityInString);
   this.cartService.changeQunatity(cartItem.food.id,quantity);
    this.setCart();
  }

  ngOnInit(): void {
  }


  // carasol
  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag: true,
  //   dots: true,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }

}
