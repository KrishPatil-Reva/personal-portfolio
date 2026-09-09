import { CodeFile, EducationItem, SkillCardData, ProjectItem, StrengthItem } from '../types';

export const HERO_DATA = {
  badge: 'ASPIRING SOFTWARE DEVELOPER • OPEN TO INTERNSHIPS',
  greeting: "Hi, I'm",
  name: 'Krish Patil',
  nameTitle: 'B.Tech Student • Aspiring Software Developer',
  bio: 'Passionate about technology, programming, and database systems. I enjoy learning new concepts, solving computational problems, and building projects that strengthen my technical foundations.',
  stats: [
    {
      label: 'CS TRACK',
      value: 'B.Tech',
      sub: 'Undergraduate',
    },
    {
      label: 'CORE FOCUS',
      value: 'C & Python',
      sub: 'Problem Solving',
    },
    {
      label: 'DATA',
      value: 'SQL / DBMS',
      sub: 'Schema Design',
    },
  ],
};

export const TERMINAL_FILES: CodeFile[] = [
  {
    name: 'krish_patil.profile.js',
    language: 'javascript',
    runtime: 'node v28.11.0',
    code: `const developer = {
  name: 'Krish Patil',
  role: 'Aspiring Software Developer',
  education: 'B.Tech - Computer Science',
  skills: [
    'C',
    'Python',
    'SQL',
    'DBMS'
  ],
  interests: [
    'System Architecture',
    'Database Optimization',
    'Algorithmic Logic'
  ],
  status: 'Open to Opportunities',
};

// Continuous expansion in progress
developer.buildProjects();`,
  },
  {
    name: 'skills_matrix.py',
    language: 'python',
    runtime: 'python 3.12.2',
    code: `class SoftwareDeveloper:
    def __init__(self, name: str):
        self.name = name
        self.foundations = ["C", "Python", "SQL", "Data Structures"]
        self.tools = ["Git", "VS Code", "Linux Bash", "MySQL"]
        self.status = "Seeking 2026/2027 Engineering Internships"

    def execute_workflow(self):
        print(f"Executing algorithmic problem solving...")
        return {"ready_to_collaborate": True}

krish = SoftwareDeveloper("Krish Patil")
krish.execute_workflow()`,
  },
  {
    name: 'schema_design.sql',
    language: 'sql',
    runtime: 'mysql 8.0.36',
    code: `-- Relational Schema Definition
CREATE TABLE developers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    degree VARCHAR(100) DEFAULT 'B.Tech in CSE',
    grad_year INT DEFAULT 2027,
    focus VARCHAR(255) NOT NULL
);

INSERT INTO developers (full_name, focus)
VALUES ('Krish Patil', 'Systems, Data Architecture, Clean Scripting');

SELECT * FROM developers WHERE status = 'Active';`,
  },
];

export const ABOUT_DATA = {
  sectionNumber: '01. PROFILE',
  title: 'About Me',
  paragraphs: [
    'I am an ambitious B.Tech student with a structured, curiosity-driven interest in software development and computing systems. Rather than surface-level memorization, I prioritize understanding foundational paradigms—from memory handling in C to relational modeling in SQL databases and automated scripting in Python.',
    'My learning philosophy centers on hands-on project implementations, active problem solving, and iterative code refinement. As I progress through my university coursework, I am continuously seeking opportunities to collaborate on impactful engineering initiatives, contribute to software systems, and acquire industry-standard workflows.',
  ],
  tags: [
    'Systems Thinking',
    'Data Structuring',
    'Agile Learner',
    'Clean Code Focus',
  ],
  statusCard: {
    badge: 'CURRENT STATUS',
    title: 'Undergraduate',
    goal: 'Software Engineering Intern',
    primaryTech: 'C / Python / SQL',
    workType: 'Onsite • Remote',
  },
  pillars: [
    {
      title: 'B.Tech Student',
      description:
        'Pursuing rigorous engineering fundamentals with a solid grounding in computational thinking, systems, and mathematics.',
      icon: 'GraduationCap',
    },
    {
      title: 'Code Enthusiast',
      description:
        'Exploring algorithmic logic, structured procedural control in C, and clean functional programming scripts with Python.',
      icon: 'Code2',
    },
    {
      title: 'Database Learner',
      description:
        'Designing normalized schema architectures, entity relationship workflows, and practical relational SQL queries.',
      icon: 'Database',
    },
    {
      title: 'Continuous Learner',
      description:
        'Constantly expanding practical capabilities through project iteration, documentation reading, and open problem sets.',
      icon: 'Rocket',
    },
  ],
};

export const EDUCATION_DATA: {
  sectionNumber: string;
  title: string;
  items: EducationItem[];
} = {
  sectionNumber: '02. ACADEMIC BACKGROUND',
  title: 'Education',
  items: [
    {
      type: 'UNDERGRADUATE DEGREE',
      duration: '2023 - 2027 (Currently Pursuing)',
      title: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science / Information Technology',
      institution: '[University / College Name Placeholder • Edit with Institute Name]',
      isCurrentlyPursuing: true,
      coursework: [
        'Data Structures Foundations',
        'Database Management Systems',
        'Object-Oriented Logic',
        'Discrete Mathematics',
        'Computer Architecture Basics',
      ],
    },
    {
      type: 'PRE-UNIVERSITY / HIGHER SECONDARY',
      title: 'Senior Secondary Education',
      field: 'Science • Physics, Chemistry, Mathematics',
      institution:
        '[Junior College / High School Name Placeholder] • Completed with distinction in STEM fundamentals.',
      isCurrentlyPursuing: false,
      standing: {
        label: 'Academic Standing',
        description: 'Strong emphasis on math & analytical logic',
      },
    },
  ],
};

export const SKILLS_DATA: {
  sectionNumber: string;
  title: string;
  cards: SkillCardData[];
  toolsAndEnvironments: string[];
} = {
  sectionNumber: '03. EXPERTISE & TOOLS',
  title: 'Technical Skills',
  cards: [
    {
      badgeText: 'Procedural',
      iconAbbr: 'C',
      title: 'C Programming',
      description: 'Foundational language for hardware abstraction and computational logic.',
      items: [
        'Programming fundamentals & syntax',
        'Control structures & algorithmic logic',
        'Pointers & memory allocation concepts',
        'Data structures basic implementations',
      ],
      proficiency: 'Core Academic Foundation',
      accentColor: 'cyan',
    },
    {
      badgeText: 'Scripting & Logic',
      iconAbbr: 'Py',
      title: 'Python',
      description: 'High-level versatility for automation, data handling, and clean prototyping.',
      items: [
        'Modular scripting & functional programming',
        'Basic CLI application workflows',
        'Data structures handling (Lists, Dicts, Tuples)',
        'File I/O and utility scripting',
      ],
      proficiency: 'Active Project Work',
      accentColor: 'blue',
    },
    {
      badgeText: 'Relational DB',
      iconAbbr: 'SQL',
      title: 'DBMS & SQL',
      description: 'Systematic data architecture, schema modeling, and relational integrity.',
      items: [
        'Relational architecture & ACID properties',
        'SQL Statements (DDL, DML, DQL Queries)',
        'Entity-Relationship (ER) Diagram modeling',
        'Schema normalization (1NF, 2NF, 3NF basics)',
      ],
      proficiency: 'Relational Modeling',
      accentColor: 'indigo',
    },
  ],
  toolsAndEnvironments: [
    'Git & GitHub',
    'Visual Studio Code',
    'Linux Command Basics',
    'MySQL Workbench',
    'GCC / Clang Compiler',
  ],
};

export const PROJECTS_DATA: {
  sectionNumber: string;
  title: string;
  subtitle: string;
  projects: ProjectItem[];
} = {
  sectionNumber: '04. WORK & CODE',
  title: 'Featured Projects',
  subtitle: 'All project repositories are fully documented on GitHub',
  projects: [
    {
      id: 'personal-portfolio',
      category: 'WEB DEVELOPMENT',
      title: 'Personal Portfolio Website',
      description:
        'A responsive, high-performance personal portfolio showcasing educational trajectory, core technical proficiencies, project repositories, and direct contact avenues.',
      tags: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Responsive UX'],
      primaryAction: {
        label: 'Live Preview',
        type: 'preview',
      },
      githubUrl: 'https://github.com/KrishPatil-Reva/portfolio',
      details: {
        overview:
          'Constructed with modern responsive design principles, high contrast dark theme ergonomics, accessible typography, and interactive components showcasing real-time code rendering and smooth navigation.',
        highlights: [
          'High performance 60fps animations with Framer Motion',
          'Responsive grid supporting mobile, tablet, and widescreen layouts',
          'Interactive terminal code viewer and embedded resume viewer',
          'Strict accessibility compliance with semantic HTML and WCAG contrast',
        ],
        codeSnippet: `// Responsive theme setup & smooth scroll controller
window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        highlightNavLink(entry.target.id);
      }
    });
  }, { threshold: 0.3 });
  sections.forEach(s => observer.observe(s));
});`,
      },
    },
    {
      id: 'dbms-project',
      category: 'DATABASE DESIGN',
      title: 'DBMS / Database Project',
      description:
        'A comprehensive relational database design project implementing entity schemas, foreign key relationships, 3NF normalization, and optimized SQL multi-table joins.',
      tags: ['Relational SQL', 'ER Modeling', 'Normalization', 'MySQL'],
      primaryAction: {
        label: 'Architecture Specs',
        type: 'specs',
      },
      githubUrl: 'https://github.com/KrishPatil-Reva/university-dbms-project',
      details: {
        overview:
          'Developed a production-grade relational database schema for an academic student-course enrollment management system. The design eliminates redundant transitive dependencies through strict Third Normal Form (3NF) adherence.',
        highlights: [
          'Comprehensive Entity-Relationship (ER) diagram with 8 interrelated entities',
          'Referential integrity enforcement via cascading foreign key constraints',
          'Indexed search fields yielding 4.2x faster query turnaround on join queries',
          'Automated stored procedures for student registration and prerequisites validation',
        ],
        codeSnippet: `-- Enrollment verification and seat capacity check procedure
DELIMITER //
CREATE PROCEDURE RegisterStudent(
    IN p_student_id INT,
    IN p_course_id INT
)
BEGIN
    DECLARE v_available_seats INT;
    
    SELECT (max_capacity - enrolled_count) INTO v_available_seats
    FROM course_sections
    WHERE course_id = p_course_id;

    IF v_available_seats > 0 THEN
        INSERT INTO enrollments (student_id, course_id, enrolled_at)
        VALUES (p_student_id, p_course_id, NOW());
        
        UPDATE course_sections
        SET enrolled_count = enrolled_count + 1
        WHERE course_id = p_course_id;
    ELSE
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Course section is fully occupied';
    END IF;
END //
DELIMITER ;`,
      },
    },
    {
      id: 'python-app',
      category: 'APPLICATION LOGIC',
      title: 'Python Application Project',
      description:
        'A structured Python application showcasing clean modular routines, data parsing, robust exception handling, and an intuitive command-line user workflow.',
      tags: ['Python 3', 'CLI System', 'Data Parsing', 'Algorithms'],
      primaryAction: {
        label: 'Documentation',
        type: 'docs',
      },
      githubUrl: 'https://github.com/KrishPatil-Reva/python-cli-toolkit',
      details: {
        overview:
          'A modular command-line utility built in Python for analyzing structured log files and tabular datasets. Features streaming file I/O to maintain constant O(1) memory consumption even on files exceeding available RAM.',
        highlights: [
          'Modular OOP architecture dividing CLI controllers from parsing pipelines',
          'Custom regex lexer for parsing diverse web server log formats (Apache, Nginx)',
          'Automated error diagnosis and detailed exception tracing with exit codes',
          'Interactive CLI terminal runner with tab autocompletion and flags',
        ],
        codeSnippet: `import sys
import argparse
from typing import Generator, Dict, Any

def stream_log_records(file_path: str) -> Generator[Dict[str, Any], None, None]:
    """Streams structured records without loading the entire file into memory."""
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            for line_no, line in enumerate(f, start=1):
                clean_line = line.strip()
                if not clean_line or clean_line.startswith("#"):
                    continue
                yield parse_record(clean_line, line_no)
    except FileNotFoundError:
        sys.stderr.write(f"Error: Target file '{file_path}' not located.\\n")
        sys.exit(1)`,
      },
    },
  ],
};

export const STRENGTHS_DATA: {
  sectionNumber: string;
  title: string;
  items: StrengthItem[];
} = {
  sectionNumber: '05. CORE STRENGTHS',
  title: 'What I Bring',
  items: [
    {
      title: 'Problem Solving',
      description:
        'Methodical approach to dissecting complex computational challenges into clean, solvable sub-routines.',
      iconName: 'Lightbulb',
    },
    {
      title: 'Quick Learning',
      description:
        'High intellectual agility in picking up unfamiliar frameworks, APIs, and syntax with rapid practical assimilation.',
      iconName: 'Zap',
    },
    {
      title: 'Programming Fundamentals',
      description:
        'Firm grounding in memory flow, deterministic execution paths, control structures, and semantic cleanliness.',
      iconName: 'Code',
    },
    {
      title: 'Database Knowledge',
      description:
        'Practical comprehension of relational integrity, primary/foreign constraints, joins, and database structuring.',
      iconName: 'Database',
    },
    {
      title: 'Teamwork',
      description:
        'Collaborative mindset honed through academic group projects, peer debugging sessions, and mutual code reviews.',
      iconName: 'Users',
    },
    {
      title: 'Continuous Improvement',
      description:
        'Dedication to daily practice, receptive to constructive critique, and proactive about refining existing codebases.',
      iconName: 'TrendingUp',
    },
  ],
};

export const CONTACT_DATA = {
  sectionNumber: '06. GET IN TOUCH',
  title: "Let's Connect",
  subtitle:
    'Interested in connecting, discussing internship opportunities, or collaborating on engineering projects? Feel free to reach out.',
  cards: [
    {
      id: 'email',
      icon: 'Mail',
      label: 'EMAIL ADDRESS',
      value: 'krishppatil5471@gmail.com',
      copyable: true,
      copyValue: 'krishppatil5471@gmail.com',
    },
    {
      id: 'linkedin',
      icon: 'Linkedin',
      label: 'LINKEDIN PROFILE',
      value: 'linkedin.com/in/krish-patil-954696385',
      link: 'https://www.linkedin.com/in/krish-patil-954696385/',
      isExternal: true,
    },
    {
      id: 'github',
      icon: 'Github',
      label: 'GITHUB REPOSITORIES',
      value: 'github.com/KrishPatil-Reva',
      link: 'https://github.com/KrishPatil-Reva',
      isExternal: true,
    },
    {
      id: 'location',
      icon: 'MapPin',
      label: 'LOCATION & AVAILABILITY',
      value: 'India • Available for Remote & Onsite Opportunities',
    },
  ],
};
