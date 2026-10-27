// Edit this file to update the portfolio. Keep both en and ko translations.
window.PORTFOLIO = {
  name: 'Daehee Kang',
  linkedin: 'https://www.linkedin.com/in/daehee-kang-02481928b/',
  github: 'https://github.com/archivehee',
  profile: {
    role: {en:'M.S. & Ph.D. Student · Artificial Intelligence',ko:'인공지능 석·박사통합과정'},
    affiliation: {en:'Data Intelligence Lab, UNIST',ko:'Data Intelligence Lab, UNIST'},
    headline: {en:'Understanding the\nOmnivorous World\nAround Us',ko:'우리 주변의\nOmnivorous World를\n이해합니다.'},
    bio: {en:'I study recommender systems and graph neural networks, with a focus on user preference modeling, debiased multi-domain recommendation, and mitigating negative transfer.',ko:'추천 시스템과 Graph Neural Networks를 연구합니다. 사용자 선호 모델링, 편향을 완화하는 다중 도메인 추천, Negative Transfer 완화에 집중하고 있습니다.'},
    interests:['User Preference Modeling','Cross-Domain Recommendation','Negative Transfer','Graph Representation Learning'],
    education:[
      {date:'2025.03 — Present',en:'M.S. & Ph.D. in Artificial Intelligence · UNIST',ko:'UNIST 인공지능 석·박사통합과정',detail:'GPA 4.12 / 4.3'},
      {date:'2019.02 — 2025.02',en:'Bachelor in Business Administration · UNIST',ko:'UNIST 경영학 학사',detail:'GPA 3.8 / 4.3'}
    ],
    experience:[
      {date:'2024.01 — 2025.02',en:'Research Intern · Data-driven Management Engineering Lab, UNIST',ko:'UNIST Data-driven Management Engineering Lab 연구 인턴'},
      {date:'2023.07 — 2024.02',en:'Digital Marketer · DNU',ko:'DNU 디지털 마케터'}
    ]
  },
  international:[{
    title:'Multi-TAP: Multi-criteria Target Adaptive Persona Modeling for Cross-domain Recommendation',
    venue:'KDD 2026',date:'2026.08.16',
    description:{en:'What to transfer: multi-preference personas. \nHow to transfer: doppelganger-based source-domain personas.',ko:'무엇을 전이할 것인가: 다중 선호 페르소나. 어떻게 전이할 것인가: Doppelganger 기반 Source-domain 페르소나.'},
    authors: ['Daehee Kang', 'Yeon-Chang Lee†'],
    paper:'https://dl.acm.org/doi/10.1145/3770855.3818138',code:'https://github.com/archivehee/Multi-TAP'
  }],
  domestic:[
    {title:'Impact Analysis of Inter-Domain Embedding Generation Strategies in Cross-Domain Recommender Systems',
     venue:'KCC 2025',
     date:'2025.06',
     authors: ['Daehee Kang', 'Yeon-Chang Lee†'],
},
    {title:'A Comparative Study of Machine Learning and DeepLearning Methods for Water Pipeline Leakage Classification',
     venue:'KSC 2025',
     date:'2025.12',
     authors: ['Daehee Kang', 'Yeon-Chang Lee†'],
}
  ],
  projects:[{
    title:'Korea Patent–Firm Matched Data (1947–2023)',date:'2024.05 — 2024.12',category:'DATA MINING',
    description:{en:'Building a linked dataset that connects Korean corporate patent applications with company metadata, addressing the gap between patent records and firm-level information.',ko:'한국 기업의 특허 출원 정보와 기업 메타데이터를 연결하는 데이터셋 구축 프로젝트입니다. 특허 기록과 기업 기본 정보 사이의 연결 데이터 부족 문제를 다룹니다.'},
    tags:['Data Mining','Entity Matching','UNIST'],
    authors: ['Daehee Kang', 'Seungryul Ryan Shin†'],
    url:'https://zenodo.org/records/17510786'
  }],
  patents:[],
  skills:[{title:'Research',items:['Recommender Systems','LLM','Graph Neural Networks','Knowledge Transfer']},{title:'Methods & Tools',items:['PyTorch','Data Mining','Regression Analysis','SPSS']}],
  certificate:{en:'Social Research Analyst, Level 2 · HRD Korea · Nov 2023',ko:'사회조사분석사 2급 · 한국산업인력공단 · 2023년 11월'},
  hobby:{title:{en:"Coffee turns the care of a moment into flavor.\nIsn’t that fascinating?",ko:'순간의 태도가 맛이 되는 커피,\n재밌지 않나요?'},description:{en:"I love a round, fruit-like acidity. If you’d like to share a cup of coffee, you’re always welcome!",ko:'과일같은 둥근 산미를 좋아해요, 커피를 공유하고 싶은 사람이라면 언제든!'}}
};
