import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // ✅ "styleUrls" not "styleUrl"
})
export class HomeComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {
    // Optional: you can leave this out
  }

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      once: false, // 🔄 allow animations again when scrolling up
      easing: 'ease-in-out',
    });
    AOS.refresh(); // ✅ ensures it detects all sections
  }
}
