import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: number = 0;
  currentProduct = new Products;

  constructor(private productService: ProductService, private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const routeID = this.aRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeID);
    this.productService.getProductById(this.id).subscribe(foundProduct => {
      this.currentProduct = foundProduct;
    })
  }
}