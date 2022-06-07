import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})

export class CreateProductComponent implements OnInit {
  newProduct: Products = new Products();
  // productForm:FormGroup;

  // sizes = [
  //   { id: 1, size: "Extra Small (2 x 3 inches)" },
  //   { id: 2, size: "Small (4 x 6 inches)"},
  //   { id: 3, size: "Medium (5 x 7 inches)"},
  //   { id: 4, size: "Large (8 x 10 inches)"},
  //   { id: 5, size: "Extra Large (12 x 15 inches)"}
  // ];

  constructor(private productService: ProductService, private router: Router, private fb:FormBuilder) { 
    // this.productForm = new FormGroup({
    //   id: new FormControl(),
    //   size: new FormControl(),
    //   name: new FormControl(),
    //   description: new FormControl(),
    //   price: new FormControl(),
    //   url: new FormControl(),
    //   stock: new FormControl()
    // });
  }

  ngOnInit(): void {
    // this.productForm = this.fb.group({
    //   size: [null]
    // })
  }

  onSubmit() {
    this.productService.createNewProduct(this.newProduct).subscribe(response => {
      this.router.navigateByUrl("/products");
    })
  }
}