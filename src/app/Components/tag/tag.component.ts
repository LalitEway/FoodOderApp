import { FoodlistService } from './../../Services/foodlist.service';
import { Tag } from './../../Share/models/tags';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
tags:Tag[]=[];

  constructor(private foodServices :FoodlistService) { }

  ngOnInit(): void {
    this.tags=this.foodServices.etAllTag()
  }

}