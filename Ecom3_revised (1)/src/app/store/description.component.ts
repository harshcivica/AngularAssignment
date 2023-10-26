import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';


@Component({
 selector: 'description',
 templateUrl: 'description.component.html',

})
export class DescriptionComponent {

  product: Product = new Product();
  constructor(

 private repository : ProductRepository,

    activeRoute: ActivatedRoute

  ) {

      Object.assign(

        this.product,

      repository.getProduct(activeRoute.snapshot.params["id"]));

    }
  }

 