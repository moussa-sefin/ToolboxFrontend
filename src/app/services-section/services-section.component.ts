import { Component } from '@angular/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.css']
})
export class ServicesSectionComponent {

  services = [
    {
      icon: 'lni lni-capsule',
      title: 'Refreshing Design',
      description: 'Lorem ipsum dolor sit amet, adipiscing elit...',
    },
    {
      icon: 'lni lni-bootstrap',
      title: 'Solid Bootstrap 5',
      description: 'Lorem ipsum dolor sit amet, adipiscing elit...',
    },
    {
      icon: 'lni lni-shortcode',
      title: '100+ Components',
      description: 'Lorem ipsum dolor sit amet, adipiscing elit...',
    },
    {
      icon: 'lni lni-dashboard',
      title: 'Speed Optimized',
      description: 'Lorem ipsum dolor sit amet, adipiscing elit...',
    },
    {
      icon: 'lni lni-layers',
      title: 'Fully Customizable',
      description: 'Lorem ipsum dolor sit amet, adipiscing elit...',
    },
    {
      icon: 'lni lni-reload',
      title: 'Regular Updates',
      description: 'Lorem ipsum dolor sit amet, adipiscing elit...',
    },
    // Add more services below
    {
      icon: 'lni lni-briefcase',
      title: 'Business Solutions',
      description: 'Lorem ipsum dolor sit amet, adipiscing elit...',
    },
    {
      icon: 'lni lni-bulb',
      title: 'Innovative Ideas',
      description: 'Lorem ipsum dolor sit amet, adipiscing elit...',
    },
    {
      icon: 'lni lni-chart-bars',
      title: 'Data Analysis',
      description: 'Lorem ipsum dolor sit amet, adipiscing elit...',
    },
  ];



}
