export const en = {
  nav: {
    about: 'About',
    experience: 'Experience',
    competitions: 'Competitions',
    vision: 'Vision',
  },
  hero: {
    badge: 'AI Researcher & Developer',
    greeting: "Hello, I'm ",
    name: 'Xiaoyun Liu',
    university: 'Mathematics & Applied Mathematics · Ocean University of China (Class of 2023)',
    description: 'Dedicated to optimizing model algorithms through mathematical theory. Grounded in rigorous mathematical reasoning, I deeply engage in and optimize the entire LLM training pipeline (including pre-training, post-training, and research-oriented Agent architecture design), with extensive experience in interdisciplinary applications of deep learning. I believe the synergy of computational science and mathematical foundations will continuously expand the boundaries of intelligent systems, driving the engineering implementation of cutting-edge theories.',
    btnPrimary: 'My Research',
    btnSecondary: 'My GitHub',
    award1: 'iGEM Silver Medalist',
    award2: 'ASC Supercomputer Challenge 2nd Prize',
    email: 'liuxy@stu.ouc.edu.cn'
  },
  skills: {
    title: 'Core Expertise',
    subtitle: 'Technical stack and domain knowledge driving my research and development.',
    categories: [
      {
        name: 'AI & Deep Learning',
        items: ['PyTorch', 'HuggingFace', 'LLM Pre-training', 'RLHF / Alignment', 'Computer Vision (YOLO)']
      },
      {
        name: 'High Performance Computing',
        items: ['CUDA', 'Parallel Computing', 'Cluster Deployment', 'Power Optimization', 'Embodied AI']
      },
      {
        name: 'Bioinformatics & Science',
        items: ['Metagenomics Pipeline', 'Molecular Dynamics', 'PDE Modeling', 'Geodynamics Simulation']
      },
      {
        name: 'Development & Engineering',
        items: ['Python', 'TypeScript', 'Next.js', 'Agent Architecture', 'Linux / Git']
      }
    ]
  },
  experience: {
    title: 'Research & Projects',
    projectsTitle: 'Other Research & Projects',
    ongoingTitle: 'Ongoing Research',
    items: [
      {
        title: "AI & Geodynamics Researcher",
        company: "Research Project",
        date: "Patents Under Review",
        description: "Developing intelligent agents for geodynamic simulation anomaly detection and archiving. Co-authoring two patents integrating geoscience with AI.",
        tags: ["Agents", "Geodynamics", "Anomaly Detection", "AI Research"],
        image: "/geodynamics_patent.png"
      },
      {
        title: "Literature Automation Agent Developer",
        company: "Qingdong Xiamen Business Consulting Co., Ltd.",
        date: "Past Experience",
        description: "Developed an automated literature typesetting and formatting agent for enterprise use. The automated pipeline saved approximately 1 person-day of workload per paper and significantly reduced formatting errors caused by manual operations by about 35%, drastically improving delivery efficiency.",
        tags: ["LLM Agents", "Automation", "Enterprise Solutions"],
        image: "/latex_agent.png"
      },
      {
        title: "PDF to LaTeX Visual Model Pre-training",
        company: "Research Project",
        date: "Ongoing",
        description: "Independently designed and optimized the multimodal data pipeline, pre-training a specialized vision model from scratch for PDF-to-LaTeX conversion. Specifically addresses formula distortion during complex mathematics extraction, overcoming the engineering pain points of slow parsing and poor layout fidelity found in traditional tools.",
        tags: ["Vision Models", "Pre-training", "LaTeX", "Document AI"],
        subItem: {
          title: "Post-training Algorithm Improvement",
          company: "Research Project",
          date: "Ongoing",
          description: "Focusing on improving the mathematical reasoning capabilities of small-scale language models. Exploring RLHF alignment techniques (PPO/DPO) and high-quality reasoning trajectory construction to directionally enhance multi-step reasoning capabilities for complex mathematical problems, achieving superior performance in specific vertical domains.",
          tags: ["LLM", "Post-training", "Math Reasoning"]
        }
      }
    ],
    personalProjects: [
      {
        title: "sshops",
        desc: "Windows-first SSH bootstrap, diagnostics, transfer fallback, and remote ops toolkit for Linux and HPC workflows.",
        github: true,
        repo: "Xiaoyun-0922/sshops",
        defaultStars: 85,
        githubUrl: "https://github.com/Xiaoyun-0922/sshops"
      },
      {
        title: "Functional Analysis Solver & Q&A Agent",
        desc: "An intelligent agent built for advanced mathematics context resolution.",
        github: true,
        githubUrl: "https://github.com/Xiaoyun-0922"
      },
      {
        title: "Task Council",
        desc: "A local-first task reasoning workbench for research and decision workflows, with structured memory, stage-based orchestration, and artifact-driven outputs.",
        github: true,
        githubUrl: "https://github.com/Xiaoyun-0922/task-council"
      },
      {
        title: "Antimicrobial Peptide Research Agent",
        desc: "An AI-driven agent for antimicrobial peptide screening, rearrangement, and molecular dynamics analysis.",
        github: true,
        githubUrl: "https://github.com/Xiaoyun-0922"
      },
      {
        title: "Vocabulary Assistant",
        desc: "A personalized assistant to help with efficient language learning and retention.",
        github: true,
        githubUrl: "https://github.com/Xiaoyun-0922"
      },
      {
        title: "Real-time Ear Acupoint Recognition YOLO Model",
        desc: "Applied computer vision (YOLO) for real-time medical acupoint detection.",
        github: false
      }
    ],
    closedSource: "Closed Source",
    githubLink: "View on GitHub"
  },
  competitions: {
    title: 'Global Competitions',
    subtitle: 'Applying advanced AI and mathematical modeling to solve hard problems on the world stage.',
    linkTextAsc: 'View Detail',
    linkTextIgem: 'See my work',
    items: [
      {
        title: "ASC Student Supercomputer Challenge",
        award: "Second Prize",
        year: "2026",
        description: "Responsible for the optimization of Embodied AI algorithms. Focused extensively on optimizing the Diffusion Model and its attention mechanisms under strict power constraints on a supercomputer cluster.",
        url: "https://www.asc-events.net/StudentChallenge/ASC26/preliminary.php",
        skills: ["Embodied AI", "Diffusion Models", "Attention Mechanisms", "HPC Optimization"]
      },
      {
        title: "International Genetically Engineered Machine (iGEM)",
        award: "Silver Medal",
        year: "2025",
        description: "Led the modeling section. Responsible for antimicrobial peptide screening and rearrangement agent construction. Proposed an LLM-driven antimicrobial peptide sequence rearrangement mechanism. Conducted partial differential equation modeling for drug diffusion and molecular dynamics simulations of peptide efficacy.",
        url: "https://2025.igem.wiki/ouc-haide/model",
        skills: ["LLM", "PDE Modeling", "Molecular Dynamics", "Bioinformatics"]
      }
    ]
  },
  vision: {
    title: 'My ',
    highlight: 'Vision',
    titleEnd: ' for AI',
    p1: 'I have a profound connection with Artificial Intelligence. I believe that dedicating my life to advancing this field is not just a career path, but a fundamental calling.',
    p2: 'I actively explore and learn the latest advancements, constantly seeking breakthroughs in both theoretical foundations (like mathematical analysis) and practical implementations (LLMs, Agents, and Bioinformatics applications).',
    p3: 'My goal is to push the boundaries of what intelligent systems can achieve, creating models and agents that reason deeply, understand complex scientific domains, and ultimately contribute to human knowledge.',
    quote: '"Seeking theoretical and practical breakthroughs in the age of intelligence."'
  },
  videoShowcase: {
    title: 'Live Demonstrations',
    subtitle: 'A cutting-edge AI research project combining LLM post-training with formal mathematical verification (Lean 4). By utilizing Lean as a strict "lie detector," this project investigates whether reasoning capabilities acquired from simple computational problems can successfully transfer to highly abstract, rigorous mathematical proofs (e.g., Terence Tao\'s Analysis I and ProofNet). The pipeline features automated extraction of sorry placeholders, dual-GPU parallel inference, rigorous verification, and error-feedback SFT fine-tuning.',
    placeholder: 'Coming Soon: Lean 4 + LLM Post-training Demo Video'
  },
  publications: {
    title: 'Publications',
    subtitle: 'Contributed to data processing, bioinformatics pipeline development, and computational modeling in the following peer-reviewed studies.',
    items: [
      {
        title: 'Metagenomic analysis reveals Northwest Pacific Ocean as a reservoir and evolutionary hub of antibiotic resistance genes',
        authors: 'Ziyi Guo, Hongyue Ma, Yaxin Liu, Jiangtao Xie, Xiaoyun Liu, Yidan Chang, Ziwei Wang, Pengfei Cui',
        journal: 'Environmental Pollution',
        year: '2025',
        status: 'Published',
        contribution: 'Responsible for metagenomic data processing, ARG annotation pipeline development, and co-occurrence network modeling.',
        doi: 'https://doi.org/10.1016/j.envpol.2025.126938',
        tags: ['Data Processing', 'Bioinformatics Pipeline', 'Network Modeling', 'Metagenomics']
      },
      {
        title: 'Beach sand beneath our feet: an overlooked reservoir of antibiotic resistance genes and pathogens, revealed by metagenomic evidence from Qingdao\'s recreational beaches',
        authors: 'Chenglu Li, Hongyue Ma, Yidan Chang, Hezi Ge, Xiaoyun Liu, Jiangtao Xie, He Zhang, Pengfei Cui',
        journal: 'bioRxiv Preprint',
        year: '2025',
        status: 'Preprint',
        contribution: 'Participated in metagenomic sequencing data analysis, resistance gene identification, and statistical modeling of pathogen distribution.',
        doi: 'https://doi.org/10.1101/2025.06.25.661489',
        tags: ['Data Analysis', 'Statistical Modeling', 'Gene Identification', 'Metagenomics']
      }
    ]
  },
  footer: {
    tagline: 'Advancing intelligent systems through mathematics and AI.',
    contact: 'Contact',
    rights: 'All rights reserved.'
  }
};

export type Translations = typeof en;
