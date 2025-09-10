import { Component, OnInit } from '@angular/core';

interface Project {
  icon: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      icon: 'fas fa-baseball-ball',
      title: 'Real-Time Cricket Score Checker',
      description: `The <b>Real-Time Cricket Score Checker app</b> lets users view live cricket scores 
        and updates in real-time. Built with <b>Spring Boot</b> (backend) and <b>Angular</b> (frontend).`,
      technologies: ['Spring Boot', 'Angular', 'Web-Scraping'],
      github: 'https://github.com/Neelesh2003/ReakTimeCrickScorer'
    },
    {
      icon: 'fas fa-user-check',
      title: 'Smart Attendance System by Face Recognition',
      description: `<b>Smart Attendance System</b> employs face recognition technology to automate attendance. 
        Uses Python libraries and provides real-time accuracy.`,
      technologies: ['Python', 'OpenCV', 'Face Recognition', 'Tkinter'],
      github: 'https://github.com/Neelesh2003/Real_Time_Attendance_by_Face-Recognition'
    },
    {
      icon: 'fa fa-comments',
      title: 'Real-Time Chat Application',
      description: `A real-time chat app built with <b>Java Socket Programming</b>, <b>Spring Boot</b>, 
        and <b>MySQL</b>. Supports multi-user interactive chat rooms.`,
      technologies: ['firebase',"Java","Networking", 'MySQL', 'Socket Programming'],
      github: 'https://github.com/Neelesh2003/Chat-Application'
    },
     {
    icon: 'fas fa-gamepad',
    title: 'Tic-Tac-Toe Game',
    description: `A classic <b>Tic-Tac-Toe game</b> built with <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>. 
      Allows two players to play in real-time with a clean and interactive interface.`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Neelesh2003/Tic-Tac-Toe-Game'
  },
    {
      icon: 'fas fa-map-marked-alt',
      title: 'Travel_Safe Web App',
      description: `<b>Travel_Safe</b> is a safety app for solo travelers. Features Safety Map, 
        Crime Data, SOS alerts, chatbot, and push notifications.`,
      technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'MongoDB'],
      github: 'https://github.com/Neelesh2003/Safety_Traveling-Wep_App'
    },
    {
      icon: 'fa fa-user',
      title: 'Personal Portfolio',
      description: `A personal portfolio built with <b>Angular</b>. Showcases skills, projects, 
        and contact details with a modern UI.`,
      technologies: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/Neelesh2003/MyPorfolioWebApp'
    },
    {
      icon: 'fa fa-cloud',
      title: 'Simple Weather Web App',
      description: `Fetches live weather updates using <b>OpenWeather API</b>. Built with HTML, CSS, and JavaScript.`,
      technologies: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
      github: 'https://github.com/Neelesh2003/Simple-Weather-Tracker'
    },
      {
    icon: 'fa fa-graduation-cap',
    title: 'Student Management System',
    description: `A comprehensive <b>Student Management System</b> built with <b>Angular</b> (frontend), 
      <b>.NET</b> (backend), and <b>MySQL</b>. Allows managing student records, attendance, grades, and reports.`,
    technologies: ['Angular', '.NET', 'MySQL', 'REST API'],
    github: 'https://github.com/Neelesh2003/Student-Management-System'
  }
  ];

  currentIndex = 0;

  ngOnInit() {}

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
