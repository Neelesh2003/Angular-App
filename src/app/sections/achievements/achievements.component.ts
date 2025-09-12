import { Component, OnInit, OnDestroy } from '@angular/core';

interface Achievement{
  icon: string;
  title: string;
  description: string;
  link:string;
}

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementComponent implements OnInit, OnDestroy {

achievements: Achievement[] = [
  {
    icon: 'fa fa-certificate',
    title: 'Wipro TalentNext – Java Full Stack (2024)',
    description: `Successfully completed the <b>Digital Skills Readiness Program</b> under Wipro TalentNext, 
       gaining hands-on expertise in <b>Java Full Stack Development</b> including Spring Boot, REST APIs, 
       and Angular integration.`,
    link: 'https://www.linkedin.com/in/neelesh-gupta18/'
  },
  {
    icon: 'fa fa-database',
    title: 'Database Management System – NPTEL, IIT Kharagpur (2024)',
    description: `Earned <b>Elite Certification</b> in <b>Database Management Systems</b> through NPTEL, 
       covering relational models, SQL, transactions, and database design principles.`,
    link: 'https://www.linkedin.com/in/neelesh-gupta18/'
  },
  {
    icon: 'fa fa-code',
    title: 'Data Structures & Algorithms Using Java – NPTEL, IIT Kharagpur (2023)',
    description: `Achieved <b>Elite Certification</b> in <b>DSA with Java</b> via NPTEL. 
       Strengthened problem-solving skills through algorithms, dynamic programming, and advanced data structures.`,
    link: 'https://www.linkedin.com/in/neelesh-gupta18/'
  },
  {
    icon: 'fa fa-shield-alt',
    title: 'Cisco Cybersecurity Virtual Internship (2024)',
    description: `Completed <b>Cybersecurity Virtual Internship</b> at Cisco Networking Academy, 
       with practical exposure to <b>network defense, cryptography, ethical hacking</b>, and cyber risk assessment.`,
    link: 'https://www.linkedin.com/in/neelesh-gupta18/'
  },
  {
    icon: 'fa fa-users',
    title: 'GSSoC 2024 Contributor',
    description: `Contributed to <b>GirlScript Summer of Code 2024</b>, actively working on 
       <b>open-source projects</b> involving full-stack development and issue resolution.`,
    link: 'https://www.linkedin.com/in/neelesh-gupta18/'
  },
  {
    icon: 'fa fa-trophy',
    title: 'Hackatron - Top 10 at IIITM Gwalior',
    description: `Secured <b>Top 10 position</b> in Hackatron, organized under Infotsav'24 at IIITM Gwalior, 
       with team <b>Code_Busters</b>, delivering innovative solutions to real-world challenges.`,
    link: 'https://www.linkedin.com/in/neelesh-gupta18/'
  },
  {
    icon: 'fa fa-code',
    title: 'Core Team Member - GDG on Campus SRIT',
    description: `Serving as a <b>core team member</b> of the <b>Google Developer Group (GDG) SRIT</b>, 
       contributing to technical sessions, workshops, and community growth initiatives.`,
    link: 'https://www.linkedin.com/in/neelesh-gupta18/'
  },
  {
    icon: 'fa fa-certificate',
    title: 'CodeChef Certification – Learn C (2023)',
    description: `Completed <b>Learn C Certification</b> by CodeChef, 
       mastering C programming fundamentals including loops, arrays, and pointers.`,
    link: 'https://www.linkedin.com/in/neelesh-gupta18/'
  },
  // Certificates from uploads
  {
    icon: 'fa fa-certificate',
    title: 'Hackathon Participation – ABV IIITM Gwalior (2024)',
    description: `Successfully participated in <b>Hackatron at Infotsav'24</b>, hosted by ABV IIITM Gwalior. 
       Gained invaluable experience in teamwork, collaboration, and real-world problem solving as part of <b>Team Code_Busters</b>.`,
    link: 'https://www.linkedin.com/in/neelesh-gupta18/'
  },
  {
    icon: 'fa fa-file-alt',
    title: 'Research Paper Publication – IJSDR (2024)',
    description: `Published a research paper titled <b>“Sentiment Analysis of Twitter Data Using Machine Learning Techniques”</b> 
       in the <b>International Journal of Scientific Development and Research (IJSDR)</b>, Volume 9, Issue 5, May 2024.`,
    link: 'https://www.linkedin.com/in/neelesh-gupta18/'
  },
  {
    icon: 'fa fa-graduation-cap',
    title: 'Python Programming – Spoken Tutorial, IIT Bombay (2024)',
    description: `Certified in <b>Python Programming</b> by IIT Bombay through the <b>Spoken Tutorial Project</b>, 
       gaining practical knowledge in Python fundamentals, data handling, and scripting.`,
    link: 'https://www.linkedin.com/in/neelesh-gupta18/'
  }
];

  currentIndex = 0;
  private autoSlideInterval: any;

  ngOnInit() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.achievements.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
