import { Injectable } from '@angular/core';
import { Cart } from '../Share/models/Cart';
import { CartItem } from '../Share/models/CartItem';
import { Foods } from '../Share/models/foodDetails';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  // Step1
  // Create private Cart 
 private cart:Cart=new Cart();
 

// Step2
// Create AddToCArt methode
addTocart(food:Foods){
  let cartItem=this.cart.items.find(item =>item.food.id === food.id)
  if(cartItem){
    this.changeQunatity(food.id , cartItem.quantity +1)
   return;
  }
  this.cart.items.push(new CartItem(food)); 
}
// remove Cart
removeCart(foodId:number){
  this.cart.items=this.cart.items.filter(item=> item.food.id !=foodId)

}
//  Change quantity
changeQunatity(quantity:number,foodId:number){
let cartItem =this.cart.items.find(item=>item.food.id===foodId);
if(!cartItem)return;
cartItem.quantity=quantity;
}



getCart(){
  return this.cart;
}

}
