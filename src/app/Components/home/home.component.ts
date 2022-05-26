import { Component, OnInit } from '@angular/core';
import { FoodlistService } from 'src/app/Services/foodlist.service';
import { Foods } from 'src/app/Share/models/foodDetails';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   foods:Foods[]=[];
  constructor(private foodSevice:FoodlistService,
    private router :ActivatedRoute
    ) { }

  ngOnInit(): void {
   this.router.params.subscribe(params=>{
    if(params['serchItem']){
      this.foods=this.foodSevice.getall().filter(food=>food.name.toLocaleLowerCase()
      .includes(params['serchItem'].toLocaleLowerCase()));
    }
    else if(params['tag']){
    this.foods=this.foodSevice.getTags(params['tag']);
    }
    else{
      this.foods = this.foodSevice.getall();
    }
    
   })





   console.log(this.foods)
  }

}
