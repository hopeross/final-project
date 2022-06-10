import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  productList: Products[] = [];
  searchPhrase: string = '';
  lowNum: number = 0;
  highNum: number = 0;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(allProducts => {
      this.productList = allProducts;
    })
  }

  onDelete(id: number){
    this.productService.deleteProductById(id).subscribe( response => {
      this.router.navigateByUrl("/products");
      window.location.reload();
    })
  }

  searchByName(){
    this.productService.searchForProduct(this.searchPhrase).subscribe(results =>{
      this.productList = results;
    })
  }

  sortAscending(){
    this.productService.sortByNameAscending().subscribe(results =>{
      this.productList = results;
    })
  }

  sortDescending(){
    this.productService.sortByNameDescending().subscribe(results =>{
      this.productList = results;
    })
  }

  filterByPrice(){
    this.productService.filterByPrice(this.lowNum, this.highNum).subscribe(results =>{
      this.productList = results;
    })
  }
}