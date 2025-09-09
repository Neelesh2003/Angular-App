import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
educationList = [
  {
    title: 'B.Tech (CSE) - SRIT Jabalpur (2021 - 2025)',
    details: [
      { label: 'CGPA', value: '8.53' }
    ],
    badges: ['Computer Science', 'Engineering', 'SRIT', 'Academic Excellence'],
    disabled: false
  },
  {
    title: 'Higher Secondary (MP-Board) (2019-2021)',
    details: [
      { label: 'Percentage', value: '90%' }
    ],
    badges: ['CBSE', 'Academic Excellence', 'Science & Maths', 'High Score'],
    disabled: false
  },
  {
    title: 'Coming Soon',
    details: [],
    badges: [],
    disabled: true
  },
  {
    title: 'Coming Soon',
    details: [],
    badges: [],
    disabled: true
  }
];

internshipList = [
  {
    title: 'Cybersecurity Virtual Intern',
    description: 'Cisco Networking Academy',
    content: 'Focused on <b>network security, threat detection & prevention</b>.',
    badges: ['Cybersecurity', 'Networking', 'Threat Detection', 'Cisco Academy', 'Internship'],
    disabled: false
  },
  {
    title: 'Contributor - GSSoC 2024',
    description: 'Open Source Program',
    content: 'Worked on <b>full-stack projects & collaborative coding</b>.',
    badges: ['GSSoC', 'Open Source', 'Full-Stack', 'Collaboration', 'Coding'],
    disabled: false
  },
  {
    title: 'Coming Soon',
    description: '',
    content: 'More exciting projects and contributions are on the way!',
    badges: ['Upcoming', 'Projects', 'Learning'],
    disabled: true
  },
  {
    title: 'Coming Soon',
    description: '',
    content: 'More exciting projects and contributions are on the way!',
    badges: ['Upcoming', 'Projects', 'Learning'],
    disabled: true
  }
];

}
