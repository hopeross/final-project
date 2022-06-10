import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],

})

export class CreateProductComponent implements OnInit {
  newProduct: Products = new Products();
  selected = '';
  
  constructor(private productService: ProductService, private router: Router) { 

  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.newProduct.productSize = this.selected;
    this.productService.createNewProduct(this.newProduct).subscribe(response => {
      this.router.navigateByUrl("/products");
    })
  }
}