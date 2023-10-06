import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-toollist',
  templateUrl: './toollist.component.html',
  styleUrls: ['./toollist.component.css']
})
export class ToollistComponent implements OnInit {
 
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.productService.getProducts().then((data) => (this.products = data));

  }

//   getSeverity(product: Product) {
//     switch (product.inventoryStatus) {
//         case 'INSTOCK':
//             return 'success';

//         case 'LOWSTOCK':
//             return 'warning';

//         case 'OUTOFSTOCK':
//             return 'danger';

//         default:
//             return null;
//     }
// };


}

