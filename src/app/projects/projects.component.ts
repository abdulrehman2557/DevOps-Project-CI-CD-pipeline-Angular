import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
projects = [
   {
      title: 'Tutorly – A Student-Tutor Matching Platform',
      description: "Tutorly is a Bubble.io-based platform that connects students with tutors. It features tuition posting, tutor applications, chat, and profile management — all designed for a smooth student-tutor experience.",

      technology:"bubble.io",
      project_cover:"assets/tutorlycover.png",
      my_role:"Full Stack Development",
      github: 'https://github.com/your-repo/portfolio',
      live: 'https://tutorly-71284.bubbleapps.io/version-test'
    },
  {
      title: 'Workplace App (Bubble.io – Gregory John Course)                                   ',
      description: "A task and team management web app built using Bubble.io, featuring user authentication, project boards, real-time updates, and role-based access control",

      technology:"bubble.io",
      project_cover:"assets/workplacecover.png",
      my_role:"Full Stack Development",
      github: 'https://github.com/your-repo/portfolio',
      live: 'https://your-portfolio.com'
    },
    {
      title: 'OpenFrame – Social Sharing Platform',
      description: "OpenFrame is a modern, fully responsive social sharing platform built on Bubble.io. It enables users to sign up via Google or email, create and share posts, like and bookmark content, and manage personal settings. Designed for seamless user interaction and scalability, it's perfect for community-driven apps.",

      technology:"bubble.io",
      project_cover:"assets/openframecover.jpg",
      my_role:"Design and Backend",
      github: 'https://github.com/your-repo/portfolio',
      live: 'https://your-portfolio.com'
    },
    {
      title: 'dats-a-rap(mobile application) ',
      description: 'A platform where artists can showcase their artwork (images, videos, music, etc.) and users (voters) can like, vote, or comment on their favorite content. It’s like Instagram + Talent Show.',
      technology:"bubble.io",
      project_cover:"assets/datarapcover.png",
      my_role:"Design and Backend of login/signup and profile section",
      github: 'https://github.com/your-repo/portfolio',
      live: 'https://your-portfolio.com'
    },
    {
      title: 'Photography Portfolio',
      description: 'A website for showing photography gallery and portfolio',
      technology:"HTML,CSS,Javascript",
      project_cover:"assets/photositecover.png",
      my_role:"Full Development",
      github: 'https://abdulahadch.github.io/Photography-Portfolio/#',
      live: 'https://your-portfolio.com'
    },
     
    
  ];
}
