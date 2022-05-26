import { FoodlistService } from './../../Services/foodlist.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Foods } from 'src/app/Share/models/foodDetails';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {
 food!:Foods;
 constructor(private foodService:FoodlistService,
  private router :ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.router.params.subscribe((params)=>{
      if(params['id'])
     this.food=this.foodService.getFoodById(params['id'])
   })
  }

}
