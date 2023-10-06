import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
})
export class PricingComponent {
  pricingPlans = [
    {
      title: 'Starter',
      price: '$0/mo',
      description: 'Lorem Ipsum is simply dummy text of the printing and industry.',
      features: [
        'Cras justo odio.',
        'Dapibus ac facilisis in.',
        'Morbi leo risus.',
        'Excepteur sint occaecat velit.',
      ],
    },
    {
      title: 'Exclusive',
      price: '$99/mo',
      description: 'Lorem Ipsum is simply dummy text of the printing and industry.',
      features: [
        'Cras justo odio.',
        'Dapibus ac facilisis in.',
        'Morbi leo risus.',
        'Excepteur sint occaecat velit.',
      ],
    },
    {
      title: 'Premium',
      price: '$150/mo',
      description: 'Lorem Ipsum is simply dummy text of the printing and industry.',
      features: [
        'Cras justo odio.',
        'Dapibus ac facilisis in.',
        'Morbi leo risus.',
        'Excepteur sint occaecat velit.',
      ],
    },
  ];
}
