import { Router } from "@angular/router";

import { Component } from "@angular/core";
import { Discount } from "../model/coupon.model";

@Component({
  selector: "coupon",

  templateUrl: "coupon.component.html",
})
export class CouponComponent {
    constructor(private router:Router, public discount: Discount){}

  redirectToSummerSaleTemplate() {
    this.router.navigate(["/store"]);
  }
  applyCoupon(){

    this.discount.CheckDiscount();

  }
}
