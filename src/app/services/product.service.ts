import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  dataSource = "http://localhost:3000/products"

  constructor(private http: HttpClient) { }

  //return all products
  getAllProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.dataSource);
  }

  //products by id
  getProductById(id: number): Observable<Products> {
    return this.http.get<Products>(this.dataSource + "/" + id);
  }

  //add new product
  createNewProduct(newProduct: Products): Observable<Products> {
    return this.http.post<Products>(this.dataSource, newProduct);
  }

  //edit existing product
  editProductById(id: number, editedProduct: Products): Observable<Products> {
    return this.http.put<Products>(this.dataSource + "/" + id, editedProduct);
  }

  //deelete product
  deleteProductById(id: number): Observable<any> {
    return this.http.delete<any>(this.dataSource + "/" + id);
  }
}