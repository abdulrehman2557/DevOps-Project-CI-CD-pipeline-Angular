import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
workExperience = [
  {
    company: 'Freelance Clients (via Bubble.io)',
    role: 'Bubble.io Developer(Frontend, Backend, API Integration)',
    duration: '5-6 months experience'
  },
  {
    company: 'Personal Projects / Freelance',
    role: 'Frontend Developer (HTML, CSS, JavaScript, Angular)',
    duration: 'Ongoing'
  }
];

 educationExperience = [
  {
    institution: 'University (2023 - 2027)',
    degree: 'Bachelors in Information Technology',
    duration: '2023 - 2027'
  },
  {
    institution: 'Punjab College Okara',
    degree: 'Intermediate in Computer Science (ICS)',
    duration: '2021 - 2023'
  },
  {
    institution: 'District Public School Okara',
    degree: 'Matriculation',
    duration: '2019 - 2021'
  }
];


 skills = [
  {
    title: 'No-Code & Low-Code',
    icon: 'fa-cubes',
    items: ['Bubble.io', 'Backend Integration', 'API Integration']
  },
  {
    title: 'Programming Languages',
    icon: 'fa-code',
    items: ['C++', 'C', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Frontend',
    icon: 'fa-desktop',
    items: ['Angular', 'HTML', 'CSS', 'Bootstrap']
  },
  {
    title: 'Databases',
    icon: 'fa-database',
    items: ['MySQL', 'MongoDB']
  },
  {
    title: 'Tools',
    icon: 'fa-wrench',
    items: ['Git', 'VS Code', 'GitHub']
  }
];


}
