import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Product } from '../Model/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Products :Product[]=[
    { idProduct: 1, code: 127,libelle: "PC", prixunitaire : 2000, tauxTva :10},
    { idProduct: 2, code: 128,libelle: "TV", prixunitaire : 1000, tauxTva :20},
    { idProduct: 3, code: 128,libelle: "Table", prixunitaire : 200, tauxTva :30},
    ]


  constructor(private http:HttpClient) {}


    
  getAllProducts():Observable <Product[]>{
    const listproduct= of(this.Products)
    return listproduct;
  }


  getNbProductsByLibelle(libelle:string):Observable<number>{
    const samelib=[]
    for (let p of this.Products){
      if (p.libelle === libelle){
      samelib.push(p);
      }

    }
    
    return of(samelib.length);

  }



}
