import { Component, OnInit, OnDestroy } from '@angular/core';

interface Project {
  icon: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, OnDestroy {

  skills: string[] = ['C#', '.Net', 'Angular','Postgres',
    'Java', 'Spring Boot', 'VS Code', 'Eclipse', 'IntelliJ IDEA',
    'Git', 'GitHub', 'MySQL', 'MongoDB', 'C++',
    'Data Structures', 'OOPs', 'HTML', 'CSS', 'JavaScript', 'Boostrap'
  ];

  currentIndex = 0;
  private autoSlideInterval: any;

  ngOnInit() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this. skills.length) % this.skills.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this. skills.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
