import { Component, OnInit, OnDestroy, ElementRef, QueryList, ViewChildren } from '@angular/core';

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

  
  programmingLanguages = [
    { name: 'Java', percentage: 95, isVisible: false },
    { name: 'C#', percentage: 80, isVisible: false },
    { name: 'C++', percentage: 85, isVisible: false },
    { name: 'C', percentage: 50, isVisible: false },
    { name: 'Python', percentage: 20, isVisible: false },
    { name: '', percentage: 20, isVisible: false },
  ];

  frontendDevelopment = [
    { name: 'Angular', percentage: 85, isVisible: false },
    { name: 'JavaScript', percentage: 60, isVisible: false },
    { name: 'TypeScript', percentage: 80, isVisible: false },
    { name: 'HTML', percentage: 95, isVisible: false },
    { name: 'CSS', percentage: 90, isVisible: false },
    { name: 'Bootstrap', percentage: 60, isVisible: false }
  ];

  backendDevelopment = [
    { name: 'dot Net', percentage: 70, isVisible: false },
    { name: 'Spring Boot', percentage: 30, isVisible: false },
    { name: 'MySQL', percentage: 75, isVisible: false },
    { name: 'MongoDB', percentage: 60, isVisible: false },
    { name: 'JDBC', percentage: 80, isVisible: false },
    { name: 'Postgress', percentage: 70, isVisible: false }
  ];

  toolsTechnologies = [
    { name: 'Git', percentage: 85, isVisible: false },
    { name: 'GitHub', percentage: 80, isVisible: false },
    { name: 'Visual Studio', percentage: 85, isVisible: false },
    { name: 'VS Code', percentage: 90, isVisible: false },
    { name: 'Eclipse', percentage: 40, isVisible: false },
    { name: 'IntelliJ IDEA', percentage: 75, isVisible: false }
  ];

  @ViewChildren('section') sections!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const sectionId = entry.target.getAttribute('data-section');
        if (entry.isIntersecting) {
          this.triggerAnimation(sectionId, true);
        } else {
          this.triggerAnimation(sectionId, false);
        }
      });
    }, { threshold: 0.3 });

    this.sections.forEach(section => {
      observer.observe(section.nativeElement);
    });
  }

  triggerAnimation(sectionId: string | null, isVisible: boolean) {
    if (!sectionId) return;

    switch (sectionId) {
      case 'programming':
        this.programmingLanguages.forEach(skill => skill.isVisible = isVisible);
        break;
      case 'frontend':
        this.frontendDevelopment.forEach(skill => skill.isVisible = isVisible);
        break;
      case 'backend':
        this.backendDevelopment.forEach(skill => skill.isVisible = isVisible);
        break;
      case 'tools':
        this.toolsTechnologies.forEach(skill => skill.isVisible = isVisible);
        break;
    }
  }

  skills: string[] = ['C#', '.Net', 'Angular', 'Postgress', 'Git Extension', 'Angular Material', 'CLI', 'JDBC',
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
    this.currentIndex = (this.currentIndex - 1 + this.skills.length) % this.skills.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.skills.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
