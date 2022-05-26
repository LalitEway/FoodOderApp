import { Tag } from './../Share/models/tags';
import { Injectable } from '@angular/core';
import { Foods } from '../Share/models/foodDetails';


@Injectable({
  providedIn: 'root'
})
export class FoodlistService {

  constructor() { }



  // methodes For foodList
  getall():Foods[]{
    return[

      {id:1,
        name:'Sicilian Pizza',
        cookTime:'10-20',
        price:200,
        favorite:false,
        origins:['India'],
        star:4.5,
        imageUrl:'assets/img/menu/food1.jpg',
        tags:["FastFood","SlowFood","Lunch"]

      },
      {id:2,
        name:'Potato Corn Burger.',
        cookTime:'10-20',
        price:150,
        favorite:false,
        origins:['India Dominose'],
        star:2.5,
        imageUrl:'assets/img/menu/food2.jpg',
        tags:["Fastfood","SlowFood","Lunch"]

      },
      {id:3,
        name:'Chicago Pizza',
        cookTime:'10-20',
        price:150,
        favorite:true,
        origins:['India'],
        star:3.5,
        imageUrl:'assets/img/menu/food3.jpg',
        tags:["Fastfood","pizza","Lunch"]

      },
      {id:4,
        name:'North Indian Thali',
        cookTime:'10-20',
        price:250,
        favorite:false,
        origins:['India'],
        star:4.5,
        imageUrl:'assets/img/menu/food4.jpg',
        tags:["FastFood","Pizza","Lunch"]

      },
      {id:5,
        name:'Butter Chicken Burgers.',
        cookTime:'10-20',
        price:100,
        favorite:true,
        origins:['India'],
        star:4.5,
        imageUrl:'assets/img/menu/food5.jpg',
        tags:["FastFood","Pizza","Lunch"]

      },
      {id:6,
        name:'South Indian Dosa',
        cookTime:'10-20',
        price:80,
        favorite:false,
        origins:['South Indain'],
        star:4.5,
        imageUrl:'assets/img/menu/food6.jpg',
        tags:["FastFood","Pizza","Lunch"]

      }
     
      
       
   
  ];
    }//End of Getallmethode


    getFoodById(id:number):Foods{
      return this.getall().find(food=>food.id==id)!;

    }
    getTags(tag:string): Foods[]{
        return tag =="All"?
         this.getall():this.getall().filter(food=>food.tags ?.
          includes(tag));
        // you can write this statment is very simple type lets do it
    }
    etAllTag():Tag[]{
      return[
        {name:'All',count:14},
        {name:'FastFood',count:4},
        {name:'Pizza',count:2},
        {name:'Lunch',count:3},
        {name:'SlowFood',count:2},
        // {name:'Hamburger',count:1},
        {name:'Fry',count:1},
        // {name:'Soup',count:1}
     ]
    }
}//End of class
