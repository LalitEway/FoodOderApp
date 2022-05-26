import { ActivatedRoute, Router} from '@angular/router';


import { Component, OnInit } from '@angular/core';
import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
  selector: 'app-serch',
  templateUrl: './serch.component.html',
  styleUrls: ['./serch.component.css']
})
export class SerchComponent implements OnInit {
 serchItem:string ="";
  constructor(private route:ActivatedRoute,
    private router:Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params['serchItem']){
      this.serchItem=params['serchItem'];
      }

    })
  }
    Search():void{
      if(this.serchItem){
        this.router.navigateByUrl('/serch/'+ this.serchItem);
        }
    }






}
