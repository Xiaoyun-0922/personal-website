import { Translations } from './en';

export const zh: Translations = {
  nav: {
    about: '关于我',
    experience: '经历',
    competitions: '竞赛',
    vision: '愿景',
  },
  hero: {
    badge: 'AI 算法研究员 & 开发者',
    greeting: '你好，我是 ',
    name: '刘小允',
    university: '数学与应用数学专业 · 中国海洋大学 (2023级)',
    description: '致力于数学理论指导模型算法优化。基于严格的数学推演深入实践与优化 LLM 训练全流程（含预训练、后训练、科研用 Agent 架构设计），并拥有丰富的深度学习跨学科交叉应用落地经验。我坚信计算科学与数学基础的结合将不断拓宽智能系统的边界，致力于用技术解码复杂世界并实现前沿理论的工程化落地。',
    btnPrimary: '个人研究',
    btnSecondary: '我的 GitHub 主页',
    award1: 'iGEM 国际基因工程机器大赛银奖',
    award2: 'ASC 世界大学生超算竞赛二等奖',
    email: 'liuxy@stu.ouc.edu.cn'
  },
  skills: {
    title: '核心技术栈',
    subtitle: '驱动我科研突破与工程开发的专业技能树。',
    categories: [
      {
        name: '人工智能与深度学习',
        items: ['PyTorch', 'HuggingFace', '大模型预训练', 'RLHF/对齐技术', '计算机视觉 (YOLO)']
      },
      {
        name: '高性能计算 (HPC)',
        items: ['CUDA', '并行计算', '超算集群部署', '模型功耗极致优化', '具身智能算法']
      },
      {
        name: '生物信息学与科学计算',
        items: ['宏基因组生信流程', '分子动力学模拟', '偏微分方程建模', '地球动力学仿真']
      },
      {
        name: '开发与工程落地',
        items: ['Python', 'TypeScript', 'Next.js/React', 'Agent 智能体架构', 'Linux / Git']
      }
    ]
  },
  experience: {
    title: '科研与项目经历',
    projectsTitle: '个人其他科研和项目',
    ongoingTitle: '进行中的研究',
    items: [
      {
        title: "AI 与地球动力学算法研究",
        company: "科研项目",
        date: "在投专利",
        description: "研发地球动力学模拟异常检测与归档整理相关的智能体(Agent)。参与撰写两篇将地质学与人工智能结合的在投专利。",
        tags: ["智能体 (Agents)", "地球动力学", "异常检测", "AI 交叉研究"],
        image: "/geodynamics_patent.png"
      },
      {
        title: "文献自动化排版智能体开发",
        company: "磬东厦门商务咨询有限公司",
        date: "企业项目",
        description: "为企业开发自动化文献排版与格式化处理智能体。引入该系统后，自动化排版流水线为排版流程节省了单篇论文约1人天的工作量，并显著降低了约 35% 由人工操作引起的格式错误率，大幅提升了交付效率。",
        tags: ["大模型智能体", "自动化", "企业级解决方案"],
        image: "/latex_agent.png"
      },
      {
        title: "PDF 到 LaTeX 视觉模型预训练",
        company: "科研项目",
        date: "进行中",
        description: "独立设计并优化多模态模型数据管线，从零预训练专用于应对 PDF 到 LaTeX 转化任务的视觉模型。重点解决复杂数学公式提取过程中的失真问题，有效克服了传统工具解析速度慢、结构还原度差的工程痛点。",
        tags: ["视觉模型", "从头预训练", "LaTeX", "文档 AI"],
        subItem: {
          title: "后训练算法改进",
          company: "科研项目",
          date: "进行中",
          description: "专注于提升小尺寸语言模型的数学逻辑推导表现。探索基于 PPO/DPO 的强化学习对齐 (RLHF) 技术及高质量推理轨迹构建，定向增强模型在复杂数学问题上的多步推理能力，实现特定垂直场景下的表现越级。",
          tags: ["大语言模型", "后训练", "数学推理"]
        }
      }
    ],
    personalProjects: [
      {
        title: "sshops",
        desc: "面向 Windows 用户的 SSH 一站式运维工具包：一键引导、诊断、传输回退与远程操作，专为 Linux / HPC 工作流设计。",
        github: true,
        repo: "Xiaoyun-0922/sshops",
        githubUrl: "https://github.com/Xiaoyun-0922/sshops"
      },
      {
        title: "泛函分析解题与问答 Agent",
        desc: "基于大模型构建的专注于高等数学问题解析的智能体。",
        github: true,
        githubUrl: "https://github.com/Xiaoyun-0922"
      },
      {
        title: "Task Council",
        desc: "本地优先的任务推理工作台：结构化记忆、阶段编排与产物驱动输出，面向科研与决策工作流。",
        github: true,
        githubUrl: "https://github.com/Xiaoyun-0922/task-council"
      },
      {
        title: "抗菌肽科研 Agent",
        desc: "基于 AI 驱动的抗菌肽筛选、重排与分子动力学分析智能体。",
        github: true,
        githubUrl: "https://github.com/Xiaoyun-0922"
      },
      {
        title: "背单词小助手",
        desc: "辅助高效语言学习与记忆的个人助手工具。",
        github: true,
        githubUrl: "https://github.com/Xiaoyun-0922"
      },
      {
        title: "耳穴实时识别 YOLO 模型",
        desc: "应用计算机视觉 (YOLO) 实现医学穴位的实时检测。",
        github: false
      }
    ],
    closedSource: "闭源",
    githubLink: "在 GitHub 查看"
  },
  competitions: {
    title: '全球学术竞赛',
    subtitle: '在世界舞台上应用先进的 AI 与数学建模解决复杂问题。',
    linkTextAsc: '赛事主页',
    linkTextIgem: '查看我的成果 (See my work)',
    items: [
      {
        title: "ASC 世界大学生超级计算机竞赛",
        award: "全国二等奖",
        year: "2026",
        description: "负责具身智能 (Embodied AI) 算法优化部分，在超算集群严格的功耗限制下，着重对 Diffusion Model 和其中的 Attention 机制进行了极致优化。",
        url: "https://www.asc-events.net/StudentChallenge/ASC26/preliminary.php",
        skills: ["具身智能", "扩散模型", "注意力机制优化", "高性能计算 (HPC)"]
      },
      {
        title: "国际基因工程机器大赛 (iGEM)",
        award: "全球银奖",
        year: "2025",
        description: "参与并领导 Model 部分。负责抗菌肽筛选与重排智能体搭建，提出利用大语言模型 (LLM) 驱动的抗菌肽序列重排机制，并进行了抗菌肽药物作用的分子动力学模拟和药物扩散模型的偏微分方程建模。",
        url: "https://2025.igem.wiki/ouc-haide/model",
        skills: ["大语言模型", "偏微分方程建模", "分子动力学", "生物信息学"]
      }
    ]
  },
  vision: {
    title: '我与 AI 的',
    highlight: '愿景',
    titleEnd: '',
    p1: '我感觉我对人工智能有很大的情节，我认为我这辈子就是要做这件事情的。这不是一条简单的职业路径，而是我内心的真正使命。',
    p2: '我积极探索和学习相关领域的前沿知识，不断寻求理论基础（如数学推导与算法建模）和实践部署（大语言模型、智能体架构和生物信息学应用）上的突破。',
    p3: '我的目标是拓展智能系统的边界，创造出能够深度推理、理解复杂科学领域的模型和智能体，最终为人类知识体系贡献自己的力量。',
    quote: '"在智能时代中，不断寻求理论与实践的双重突破。"'
  },
  videoShowcase: {
    title: '系统演示展示',
    subtitle: '这是一个结合了“大语言模型 (LLM) 后训练”与“形式化数学验证 (Lean 4)”的前沿 AI 科研项目。将 Lean 当作极其严格的“测谎仪”，探究大模型基于简单计算题所获取的推理能力，能否切实泛化到要求绝对严密的抽象数学证明（如陶哲轩《Analysis I》和 ProofNet 问题）中。项目涵盖从自动抽取 sorry 占位符、双卡并行推理、验证到基于错误反馈的 SFT 微调完整闭环。',
    placeholder: 'Coming Soon: Lean 4 + LLM Post-training Demo Video'
  },
  publications: {
    title: '学术论文',
    subtitle: '参与以下同行评审研究中的数据处理、生物信息学流程开发与计算建模工作。',
    items: [
      {
        title: 'Metagenomic analysis reveals Northwest Pacific Ocean as a reservoir and evolutionary hub of antibiotic resistance genes',
        authors: 'Ziyi Guo, Hongyue Ma, Yaxin Liu, Jiangtao Xie, Xiaoyun Liu, Yidan Chang, Ziwei Wang, Pengfei Cui',
        journal: 'Environmental Pollution',
        year: '2025',
        status: '已发表',
        contribution: '负责宏基因组数据处理、抗生素耐药基因注释流程开发以及共现网络建模。',
        doi: 'https://doi.org/10.1016/j.envpol.2025.126938',
        tags: ['数据处理', '生信流程开发', '网络建模', '宏基因组学']
      },
      {
        title: 'Beach sand beneath our feet: an overlooked reservoir of antibiotic resistance genes and pathogens, revealed by metagenomic evidence from Qingdao\'s recreational beaches',
        authors: 'Chenglu Li, Hongyue Ma, Yidan Chang, Hezi Ge, Xiaoyun Liu, Jiangtao Xie, He Zhang, Pengfei Cui',
        journal: 'bioRxiv Preprint',
        year: '2025',
        status: '预印本',
        contribution: '参与宏基因组测序数据分析、耐药基因识别以及病原体分布的统计建模。',
        doi: 'https://doi.org/10.1101/2025.06.25.661489',
        tags: ['数据分析', '统计建模', '基因识别', '宏基因组学']
      }
    ]
  },
  footer: {
    tagline: '用数学与人工智能驱动未来智能系统的发展。',
    contact: '联系我',
    rights: 'All rights reserved.'
  }
};
