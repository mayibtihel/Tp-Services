import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  text:any
  ListProduct:Product[]=[]
  len!: number
  data!:number
  selectedRow!:number



  constructor( private productservice:ProductService) { }


  ngOnInit(): void {

    this.productservice.getAllProducts().subscribe((pr)=>this.ListProduct=pr)

  }


  ChercherP(){
    this.productservice.getNbProductsByLibelle(this.text).subscribe(data => this.len = data) 
  }

  chercherPbyL(value: any){

    this.productservice.getNbProductsByLibelle(value).subscribe(data => this.data = data)
  }


  
}
