import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Scroll } from '../../services/scroll';

@Component({
  selector: 'app-section2',
  imports: [],
  templateUrl: './section2.html',
  styleUrl: './section2.scss',
})
export class Section2 {
experience = EXPERIENCE;
projects = PROJECTS;
skills = SKILLS;
education = EDUCATION;
scrollService=inject(Scroll);
  @ViewChild('contentContainer') container!: ElementRef;

scrollTo(section: string) {

  const element = this.container.nativeElement.querySelector('#' + section);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}


}
export const EXPERIENCE = [
  {
    startDate: "May 2024",
    endDate: "June 2025",
    role: "Software Developer Intern",
    company: "Unlock Future",
    companyLink: "https://www.unlockfuture.ai/",
    description:
      "Worked on fintech production systems including valuation and pitch deck platforms. Built and maintained subscription modules integrated with Zoho Subscription APIs.",

    skills: [
      "Angular",
      "TypeScript",
      "JavaScript",
      ".NET Core",
      "Web API",
      "MSSQL",
      "Git",
      "GitHub",
      "C#"
    ]
  },
  {
    startDate: "July 2025",
    endDate: "Present",
    role: "Software Developer (Full Stack)",
    company: "Centralogic Pvt Ltd",
    companyLink: "https://centralogic.ai/",
    description:
      "Working on an attestation system for document verification. Developing full-stack features, handling vulnerability fixes, deployment on Azure, and performance improvements using Redis.",

    skills: [
      "Angular",
      "Azure",
      "TypeScript",
      "JavaScript",
      ".NET Core",
      "Web API",
      "MSSQL",
      "Blob Storage",
      "Entity Framework",
      "Git",
      "GitHub",
      "Redis"
    ]
  }
];
export const PROJECTS = [
  {
    title: "MCP Server AI Context Platform",
    type: "Professional Project",
    description:
      "Built an MCP server that connects cloud data sources to provide contextual knowledge for AI chatbots. The system retrieves information from PDFs and company training documents and supplies that context to an AI assistant for accurate responses.",

    features: [
      "Context retrieval from PDF knowledge base",
      "Cloud-based MCP server architecture",
      "AI chatbot integration for answering company-specific queries",
      "Secure document data handling and indexing"
    ],

    technologies: [
      "Node.js",
      "TypeScript",
      "Cloud Services",
      "AI Context Retrieval",
      "API Integration"
    ],

    status: "Completed"
  },

  {
    title: "Healthcare Management System",
    type: "College Project",
    description:
      "Developed a healthcare management system during college to manage patient records, appointments, and hospital workflows. The system improves efficiency by digitizing patient data and streamlining medical operations.",

    features: [
      "Patient record management",
      "Doctor appointment scheduling",
      "Medical history tracking",
      "Admin dashboard for hospital operations"
    ],

    technologies: [
      "Angular",
      ".NET Core",
      "Web API",
      "MSSQL",
      "JavaScript"
    ],

    status: "Completed"
  }
];

export const SKILLS = [
  {
    category: "Frontend",
    technologies: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS/SCSS",
      "Responsive Design",
      "Web Accessibility"
    ]
  },
  {
    category: "Backend",
    technologies: [
      ".NET Core",
      "C#",
      "ASP.NET Web API",
      "Entity Framework",
      "SQL Server"
    ]
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      "Microsoft Azure",
      "Azure App Service",
      "Azure Virtual Machines",
      "Azure SQL Database",
      "Azure API Management",
      "Azure Blob Storage",
      "Git",
      "GitHub",
      "CI/CD"
    ]
  },
  {
    category: "Tools & Platforms",
    technologies: [
      "Node.js",
      "Redis",
      "Zoho APIs",
      "MCP Server",
      "REST APIs"
    ]
  }
];

export const EDUCATION = [
  {
    degree: "Master of Science (M.Sc)",
    field: "Computer Science",
    institution: "Abasaheb Garware College, Pune",
    graduationYear: "2025",
    description:
      "Master's degree in Computer Science with a focus on advanced software development, system design, and modern web technologies."
  },
  {
    degree: "Bachelor of Science (B.Sc)",
    field: "Computer Science",
    graduationYear: "2023",
    description:
      "Completed a Bachelor's degree in Computer Science with a strong foundation in programming, software development, data structures, and web technologies."
  },
  {
    title: "Professional Learning",
    description:
      "Continuously improving skills in Angular, .NET, APIs, cloud technologies, and scalable web application development through real-world projects and self-learning."
  }
];
