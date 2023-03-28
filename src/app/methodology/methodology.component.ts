import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-methodology',
  templateUrl: './methodology.component.html',
  styleUrls: ['./methodology.component.scss']
})
export class MethodologyComponent implements OnInit {

  traits;
  len;
  showSub:boolean=false;
  //hoverIndex:number = -1;
  hideElement = true;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.traits=this.productService.getJSON();
    this.len=[1,2,3,4];
    console.log(this.traits);
  }

  onHover(){
    this.traits.showSub = 'true';
   }
   
   onLeave(){
    this.traits.showSub = 'true';
   }

}
