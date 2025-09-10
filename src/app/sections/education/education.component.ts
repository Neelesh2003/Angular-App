import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educationList = [
    {
      title: 'B.Tech - Shri Ram Institute of Technology,Jabalpur(2021 - 2025)',
      details: [
        { label: 'CGPA', value: '8.67' }
      ],
      badges: ['Computer Science', 'Engineering', 'SRIT', 'Academic Excellence'],
      disabled: false
    },
    {
      title: 'Higher Secondary (MP-Board) (2019-2021)',
      details: [
        { label: 'Percentage', value: '90%' }
      ],
      badges: ['MP-Board', 'Academic Excellence', 'Science & Maths', 'High Score'],
      disabled: false
    },
    {
      title: 'Secondary (MP-Board) (2017-2019)',
      details: [
        { label: 'Percentage', value: '90%' }
      ],
      badges: ['MP-Board', 'Academic Excellence', 'Science & Maths', 'High Score'],
      disabled: false
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
      title: 'Google Developer Community - 2024-2025',
      description: '',
      content: '  I actively participate in the Google Developer Group (GDG) at Shri Ram Institute of Technology as a Web Developer',
      badges: ['SRIT', 'GDG', 'Web-Development'],
      disabled: false
    },
    {
      title: 'Contributor - GSSoC 2024',
      description: 'Open Source Program',
      content: 'Worked on <b>full-stack projects & collaborative coding</b>.',
      badges: ['GSSoC', 'Open Source', 'Full-Stack', 'Collaboration', 'Coding'],
      disabled: false
    }

  ];

}
