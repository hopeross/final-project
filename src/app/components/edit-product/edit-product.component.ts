import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id: number = 0;
  currentProduct: Products = new Products();

  constructor(private productService: ProductService, private router: Router, private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const routeID = this.aRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeID);
    this.productService.getProductById(this.id).subscribe(foundProduct => {
      this.currentProduct = foundProduct;
    })
  }

  onSubmit(){
    this.productService.editProductById(this.id, this.currentProduct).subscribe(editedProduct => {
      this.router.navigateByUrl("/products");
    })
  }

  onDelete(id: number){
    this.productService.deleteProductById(id).subscribe( response => {
      this.router.navigateByUrl("/products");
    })
  }
}