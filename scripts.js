/* scripts.js
   Save as scripts.js in same folder as index.html and styles.css
   This file:
   - Initializes particles.js, AOS, Typed.js
   - Provides a resources dataset (editable)
   - Implements search/filter and domain detail modal rendering
*/

document.addEventListener('DOMContentLoaded', function(){

  /* -------------------------
     1) THEME / UI SETUP
     ------------------------- */
  const themeBtn = document.getElementById('theme-toggle');
  const body = document.body;
  // Dark theme default (explicit)
  body.classList.remove('light');
  themeBtn.textContent = '🌙';
  themeBtn.addEventListener('click', () => {
    // allow light toggle if user wants
    body.classList.toggle('light');
    themeBtn.textContent = body.classList.contains('light') ? '☀️' : '🌙';
  });

  /* -------------------------
     2) LIBRARY INITS
     ------------------------- */
  // AOS
  if(window.AOS) AOS.init({duration:700,easing:'ease-out-quart',once:true});

  // Typed.js
  if(window.Typed){
    new Typed('#typed-target', {
      strings: [
        "Roadmaps • YouTube Playlists • Interviews",
        "Certifications • Books • Podcasts",
        "Cheat Sheets • Challenges • Tools",
        "Communities • News & Trends"
      ],
      typeSpeed: 45, backSpeed: 25, backDelay: 1600, loop: true
    });
  }

  // Particles.js config
  if(window.particlesJS){
    particlesJS('particles-js', {
      "particles": {
        "number": {"value": 60, "density": {"enable": true, "value_area": 800}},
        "color": {"value": ["#7c3aed","#06b6d4","#5eead4"]},
        "shape": {"type": "circle"},
        "opacity": {"value":0.65},
        "size": {"value":3},
        "line_linked": {"enable": true, "distance":130, "color":"#ffffff", "opacity":0.06, "width":1},
        "move": {"enable": true, "speed":2, "direction":"none", "random":false, "straight":false}
      },
      "interactivity": {
        "detect_on":"canvas",
        "events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},
        "modes":{"grab":{"distance":170,"line_linked":{"opacity":0.12}},"push":{"particles_nb":4}}
      },
      "retina_detect": true
    });
  }

  /* -------------------------
     3) RESOURCES DATASET (editable)
     ------------------------- */
  // Each domain has arrays for the resource categories you requested.
  // Add/remove entries here; link fields may include URLs, YouTube playlists, or text.
  const resources = [
    {
      domain: "Data Analyst",
      summary: "Data analytics examines raw data to uncover patterns, trends, and insights, helping organizations make informed, data-driven decisions efficiently and End-to-end data handling, analysis, visualization, and insight extraction.",
      roadmaps: [
        {title:"Data Science Roadmap (Roadmap.sh)", url:"https://roadmap.sh/data-analyst"},
        {title:"Complete Data Science Roadmap (Greek for Greek)", url:"https://www.geeksforgeeks.org/blogs/data-analyst-roadmap/"}
      ],
      playlists: [
        {title:"Data Analytics Full Course - Alex The Analyst", url:"https://www.youtube.com/watch?v=rGx1QNdYzvs&list=PLUaB-1hjhk8FE_XZ87vPPSfHqb6OcM0cF"},
        {title:"Data Analytics for Beginners-WsCube Tech", url:"https://www.youtube.com/watch?v=rGx1QNdYzvs&list=PLUaB-1hjhk8FE_XZ87vPPSfHqb6OcM0cF"}
      ],
      certifications: [
        {title:"IBM Data Science Professional Certificate (Coursera)", url:"https://www.coursera.org/professional-certificates/ibm-data-science"},
        {title:"Oneroadmap Data Analyst Professional Certificate (free)", url:"https://oneroadmap.io/skills/da"}
        
      ],
      interview_prep: [
        {title:"Data Science Interview Questions (greekforgreek)", url:"https://www.geeksforgeeks.org/data-science/data-analyst-interview-questions-and-answers/"},
        {title:"Data Analyst Interview Questions (Interview bit)", url:"https://www.geeksforgeeks.org/data-science/data-analyst-interview-questions-and-answers/"}
      ],
      books: [
        {title:"Python for Data Analysis - Wes McKinney", url:"Python for Data Analysis - Wes McKinney"},
        {title:"Data Analytics using Python by Bharti Motwani", url:"https://www.scribd.com/document/733034218/Data-Analytics-using-Python"}
      ],
      podcasts: [
        {title:"Small Town to Remote Software Engineer! ₹14,000 to ₹1.5 Lakh/Month  Data Engineering Roadmap 2026", url:"https://www.youtube.com/watch?v=mOq2qlazJGs&list=PL_HlKez9XCSPnXx8ZSiXW2sA6SmbYj-26"},
        {title:"How to Land HIGH Paying JOB as Data Analyst", url: "https://www.youtube.com/watch?v=2hGZtf7bxZo"}
      ],
      blogs: [
        {title:"Towards Datacamp", url:"https://www.datacamp.com/blog/category/data-analysis"},
        {title:"AWS", url:"https://aws.amazon.com/free/analytics/?trk=8ba909f7-e3f7-40e2-8b67-b546c7ba8a38&sc_channel=ps&ef_id=Cj0KCQjwgKjHBhChARIsAPJR3xcjrNxU2w919h9ZlGOR2lwLDDoaH_6PHGRgyXfxnCeBeiVmTWQZ__IaAvKPEALw_wcB:G:s&s_kwcid=AL!4422!3!565222448054!e!!g!!data%20lake!2069430383!125466315570&gad_campaignid=2069430383&gbraid=0AAAAADjHtp9BGY5McutJ1xgDbabWJfMi0&gclid=Cj0KCQjwgKjHBhChARIsAPJR3xcjrNxU2w919h9ZlGOR2lwLDDoaH_6PHGRgyXfxnCeBeiVmTWQZ__IaAvKPEALw_wcB"},
      ],
      cheat_sheets: [
        {title:"Datacamp", url:"https://www.datacamp.com/cheat-sheet/category/data-analysis"},
        {title:"Kaggle", url:"https://www.kaggle.com/discussions/getting-started/167694"}
      ],
      challenges: [
        {title:"Oracle", url:"https://www.oracle.com/in/analytics/data-analytics-challenges/"},
        {title:"Kaggle", url:"https://www.kaggle.com/discussions/general/221034"}
      ],
      tools: [
        {title:"Jupyter / JupyterLab", url:"https://jupyter.org/"},
        {title:"Pandas, NumPy, scikit-learn,Matplotlib,Seaborn", url:"https://github.com/imarranz/data-science-library-hub"}
      ],
      communities: [
        {title:"r/datasanalysis (Reddit)", url:"https://www.reddit.com/r/dataanalysis/"},
        {title:"Kaggle forums", url:"https://www.kaggle.com/discussions/getting-started/328701"}
      ],
      news: [
        {title:"KDNuggets", url:"https://www.kdnuggets.com/?s=data+science"},
        {title:"towards datascience", url:"https://towardsdatascience.com/"}
      ]
    },
    {
      domain: "Machine Learning",
      summary: "Supervised, unsupervised learning, model deployment and tuning.Machine learning uses algorithms to analyze data, identify patterns, and make predictions, enhancing data analytics by automating insights and improving decision-making accuracy.",
      roadmaps: [
        {title:"ML Roadmap", url:"https://roadmap.sh/machine-learning"}
      ],
      playlists: [
        {title:"Machine Learning - Andrew Ng (Stanford)", url:"https://www.youtube.com/watch?v=vStJoetOxJg&list=PLkDaE6sCZn6FNC6YRfRQc_FbeQrF8BwGI"},
        {title:"Deep Learning Crash Course for Beginners", url:"https://www.youtube.com/watch?v=VyWAvY2CF9c"}
      ],
      certifications: [
        {title:"Machine Learning Specialization(Coursera)", url:"https://www.coursera.org/specializations/machine-learning-introduction"},
        {title:"Machine Learning with Python(IBM)", url:"https://cognitiveclass.ai/courses/machine-learning-with-python"}
      ],
      interview_prep: [
        {title:"Machine Learning Interview Questions and Answers(greekforgreek)", url:"Machine Learning with Python"},
        {title:"Machine Learning Interview Questions", url:"https://www.interviewbit.com/machine-learning-interview-questions/"}
      ],
      books: [
        {title:"Pattern Recognition and Machine Learning - Bishop", url:"https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf"},
        {title:"MachineLearning-TomMitchell.", url:"https://www.cs.cmu.edu/~tom/files/MachineLearningTomMitchell.pdf"}
      ],
      podcasts: [
        {title:"Advice for Machine Learning Beginners-Andrej Karpathy and Lex Fridman", url:"https://www.youtube.com/watch?v=I2ZK3ngNvvI"},
        {title:"This is why Deep Learning is really weird-Machine Learning Street Talk", url:"https://www.youtube.com/watch?v=sJXn4Cl4oww"}
      ],
      blogs: [
        {title:"tableau", url:"https://www.tableau.com/learn/articles/blogs-about-machine-learning-artificial-intelligence"},
        {title:"Kaggle", url:"https://www.kaggle.com/discussions/general/96417"}
      ],
      cheat_sheets: [
        {title:"Machine Learning tips and tricks cheatsheet", url:"https://stanford.edu/~shervine/teaching/cs-229/cheatsheet-machine-learning-tips-and-tricks"},
        {title:"ML Cheat Sheet(GFG)", url:"https://www.geeksforgeeks.org/machine-learning/machine-learning-algorithms-cheat-sheet/"}
      ],
      challenges: [
        {title:"Major Challenges Faced By Machine Learning Professionals(GFG)", url:"https://www.geeksforgeeks.org/blogs/7-major-challenges-faced-by-machine-learning-professionals/"}
      ],
      tools: [
        {title:"TensorFlow / PyTorch/ and other ml tools ", url:"https://8allocate.com/blog/top-8-tools-and-libraries-for-ml-and-dl-project-development/"},
        {title:"Weights & Biases", url:"https://docs.wandb.ai/"}
      ],
      communities: [
        {title:"r/MachineLearning(Reddit)", url:"https://www.reddit.com/r/MachineLearning/"}
      ],
      news: [
        {title:"Google Research", url:"https://research.google/search/?query=machine+learning&"},
        {title:"KDNuggets", url:"https://www.kdnuggets.com/?s=machine+learning"},
      ]
    },

    {
      domain: "Web Development(Frontend)",
      summary: "Front-end web development is building the client-side of websites and apps, including layouts, interactions, and user experiences, using frameworks, libraries, design systems, and tools beyond just HTML, CSS, and JavaScript.",
      roadmaps: [
        {title:"Web Development (frontend ) Roadmap", url:"https://roadmap.sh/frontend"}
      ],
      playlists: [
         {title:"FRONTEND DEVELOPMENT-Coding Walla Sir ", url:"https://www.youtube.com/playlist?list=PLhvdldYcnZMmY6nqBsi9gjvfXVnGqYpob"},
        {title:"Front End Web Developement - edureka", url:"https://www.youtube.com/playlist?list=PL9ooVrP1hQOH2k1SANK5rvq_EAgUKTPoK"}
      ],
      certifications: [
        {title:"IBM", url:"https://cognitiveclass.ai/courses/create-a-simple-web-page-with-html-in-10-minutes"},
        {title:"Alison Free Learning", url:"https://alison.com/course/diploma-in-e-commerce-web-development?utm_source=bing&utm_medium=cpc&utm_campaign=531498933&utm_content=1349103304973601&utm_term=kwd-84320121233431:loc-90&msclkid=aa1a9b083ad8141e1dbff3e34a5ac23c"},
      ],
      interview_prep: [
        {title:"Front-End Interview Questions(resumegemini)", url:"https://careerhelp.resumegemini.com/interviews/top-10-questions-for-front-end-web-developer-interview/?utm_campaign=MS_DSA&msclkid=b19427df5c211d3737b94f342ce51656"},
        {title:"Front-End Interview Questions(GFG)", url:"https://www.geeksforgeeks.org/interview-prep/front-end-developer-interview-questions/"},
      ],
      books: [
        {title:"HTML and CSS: Design and Build Websites by Jon Duckett", url:"https://sites.math.duke.edu/courses/math_everywhere/assets/techRefs/HTML%20and%20CSS-%20Design%20and%20Build%20Websites_Jon%20Duckett_2011.pdf"},
        {title:"The Road to React by Robin Wieruch", url:"https://www.robinwieruch.de/the-road-to-learn-react/"}
      ],
      podcasts: [
        {title:"FASTEST Way to Learn Web Development and ACTUALLY Get a Job - Complete Roadmap 2026 🚀", url:"https://www.youtube.com/watch?v=WTWEEBX9D2M&list=PL_HlKez9XCSOHJf_b3qnHcgsg_yXPn-FL"},
        {title:"1.5Cr Salary and 0 Tax | Frontend Engineer Roadmap 2025", url:"https://www.youtube.com/watch?v=z9LPY7B_crU&t=82s"}
      ],
      blogs: [
        {title:"FeedSpot", url:"https://bloggers.feedspot.com/frontend_blogs/"}
      ],
      cheat_sheets: [
        {title:"SheCodes", url:"https://www.shecodes.io/cheatsheets"}
      ],
      challenges: [
        {title:"FrontEnd Mentor", url:"https://www.frontendmentor.io/challenges"},
        {title:"7 Front-End Challenges To Code For Developers", url:"https://www.geeksforgeeks.org/websites-apps/7-front-end-challenges-to-code-for-developers/"}
      ],
      tools: [
        {title:"VS Code, Chrome DevTools ,Front End Tools", url:"https://www.geeksforgeeks.org/html/list-of-front-end-technologies/"}
      ],
      communities: [
        {title:"r/Frontend(reddit)", url:"https://www.reddit.com/r/Frontend/"}
      ],
      news: [
        {title:"KDnuggets-News and Trends", url:"https://www.kdnuggets.com/10-github-repositories-to-master-frontend-development"}
      ]
    },

    {
      domain: "AI Engineer",
      summary: "AI Engineer designs, builds, and deploys intelligent systems using machine learning, deep learning, and data-driven models to solve complex problems and optimize processes across industries.",
      roadmaps: [
        {title:"AI Engineer Roadmap", url:"https://roadmap.sh/ai-engineer"}
      ],
      playlists: [
       {title:"Generative AI Series", url:"https://www.youtube.com/watch?v=BP-w99ZINTc&list=PLu0W_9lII9aiS4rUVp2jXwIvCruo27sG6"},
        {title:"Generative AI", url:"https://www.youtube.com/watch?v=mEsleV16qdo"}
      ],

      certifications: [
        {title:"Generative AI for Everyone", url:"https://www.coursera.org/learn/generative-ai-for-everyone?utm_medium=sem&utm_source=bg&utm_campaign=b2c_india_generative-ai-for-everyone_deeplearning-ai_ftcof_learn_cx_dr_bau_bg_sem_pr_in_all_m_x_25-05_x&campaignid=663465609&adgroupid=1250146069857895&device=c&keyword=coursera%20ai%20for%20everyone&matchtype=b&network=o&devicemodel=&adposition=&creativeid=78134262245457&adgroup=b2c_india_generative-ai-for-everyone_deeplearning-ai_cx_bau_bg_in_x_x_br-bd_x_hyb_x_x_learn_x&querystring=ai%20engineer%20free%20certification&targetid=kwd-78134509144390:loc-90&bidmatchtype=bb&extensionid=&msclkid=54bfeb41b5291e07cf3683aac3bc29fc&utm_term=coursera%20ai%20for%20everyone&utm_content=b2c_india_generative-ai-for-everyone_deeplearning-ai_cx_bau_bg_in_x_x_br-bd_x_hyb_x_x_learn_x"},
        {title:"Artificial Intelligence Beginner", url:"https://www.simplilearn.com/free-ai-program-skillup"}
      ],
      interview_prep: [
        {title:"50+ AI Engineer Interview Questions and Answers", url:"https://www.ambitionbox.com/profiles/ai-engineer/interview-questions"},
        {title:"Top Artificial Intelligence(AI) Interview Questions and Answers", url:"https://www.geeksforgeeks.org/artificial-intelligence/artificial-intelligenceai-interview-questions-and-answers/"}
      ],
      books: [
        {title:"AI Engineering book and other resources", url:"https://github.com/chiphuyen/aie-book"},
        {title:"AI Engineering by Chip Huyen", url:"https://www.oreilly.com/library/view/ai-engineering/9781098166298/"}
      ],
      podcasts: [
        {title:"Is AI a Bubble? Experts Debate the Future of AI w/ Dave, Salim, and AWG ", url:"https://www.youtube.com/watch?v=lIW7tPBrfCQ"},
        {title:"The AI Safety Expert: These Are The Only 5 Jobs That Will Remain In 2030! - Dr. Roman Yampolskiy", url:"https://www.youtube.com/watch?v=UclrVWafRAI"}
      ],
      blogs: [
        {title:"artificial intelligence", url:"https://towardsdatascience.com/?s=ai"}
      ],
      cheat_sheets: [
        {title:"AI-ML-cheetsheets", url:"https://github.com/SamBelkacem/AI-ML-cheatsheets"},
        {title:"AI Engineering Basic Cheat Sheet - AI Cheat Sheets", url:"https://www.scribd.com/document/904098205/AI-Engineering-Basic-Cheat-Sheet-AI-Cheat-Sheets"}
      ],
      challenges: [
        {title:"Top 15 Challenges of Artificial Intelligence ", url:"https://www.simplilearn.com/challenges-of-artificial-intelligence-article"},
        {title:"Top Challenges for Artificial Intelligence", url:"https://www.geeksforgeeks.org/blogs/top-challenges-for-artificial-intelligence/"}
      ],
      tools: [
        {title:"AI-Tools", url:"https://topai.tools/top-100-ai-tools"}
      ],
      communities: [
         {title:"r/artificial", url:"https://www.reddit.com/r/artificial/"},
        {title:"r/ArtificialInteligence", url:"https://www.reddit.com/r/ArtificialInteligence/"}
      ],
      news: [
        {title:"AI NEWS AND TRENDS", url:"https://www.artificialintelligence-news.com/?utm_source=chatgpt.com"}
      ]
    },

    {
      domain: "Cybersecurity",
      summary: "Cybersecurity is the practice of protecting computers, networks, and data from unauthorized access, attacks, or damage. It involves tools and techniques to ensure privacy, integrity, and availability of information in the digital world.",
      roadmaps: [
        {title:"Cyber Security Roadmap", url:"https://roadmap.sh/cyber-security"}
      ],
      playlists: [
        {title:"Ethical Hacking in 15 Hours - 2023 Edition - Learn to Hack! ", url:"https://www.youtube.com/watch?v=3FNYvj2U0HM&list=PLLKT__MCUeixqHJ1TRqrHsEd6_EdEvo47"},
        {title:"Cyber Security Full course - 11 Hours | Cyber Security Training For Beginners | Edureka", url:"https://www.youtube.com/watch?v=lpa8uy4DyMo&list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_"}
      ],
      certifications: [
        {title:"FREE Entry-level Cybersecurity Training + Certification Exam", url:"https://www.isc2.org/landing/1mcc?utm_source=bing&utm_medium=cpc&utm_campaign=GBL-CC-1M-DG&utm_term=search&utm_content=GBL-CC-1M-DG&utm_source=bing&utm_medium=cpc&utm_campaign=GBL-Ecomm-CISSP-osp&utm_term=search&utm_content=GBL-Ecomm-CISSP-osp&msclkid=1e7242fd67e514cc9f222a131a7ab927"},
        {title:"Fundamentals of Encryption & Quantum-Safe Techniques", url:"https://cognitiveclass.ai/courses/fundamentals-of-encryption-quantum-safe-techniques"}
      ],
      interview_prep: [
        {title:"Top 100+ Cyber Security Interview Questions and Answers", url:"https://www.guru99.com/cyber-security-interview-questions.html"},
        {title:"Cyber Security Interview Questions with Answers(GFG)", url:"https://www.geeksforgeeks.org/ethical-hacking/cyber-security-interview-questions/"}
      ],
      books: [
        {title:"Practical IoT Hacking", url:"https://github.com/root-0101/Hackers-library/blob/main/Practical-IoT-Hacking.pdf"},
        {title:"3 Computer Security Books for Free! [PDF]", url:"https://www.infobooks.org/free-pdf-books/computers/computer-security/"}
      ],

      podcasts: [
        {title:"“Security Is An Illusion” Ethical Hacker Exposes Child Predators & Tools To Protect Against Hackers", url:"https://www.youtube.com/watch?v=3_tZ7i1j3Tg"},
        {title:"Cybersecurity Expert Answers Hacking History Questions-WIRED", url:"https://www.youtube.com/watch?v=dc6q04o8Y6o"}
      ],
      blogs: [
        {title:"Cyber Blog", url:"https://www.nextgov.com/"},
        {title:"DarkReading", url:"https://www.darkreading.com/"}
      ],
      cheat_sheets: [
        {title:"CheetsheetHERO", url:"https://cheatsheetshero.com/"},
        {title:"The ABCs of CyberSecurity Terms", url:"https://assets.contentstack.io/v3/assets/blt36c2e63521272fdc/blt88a4f4d475dd6337/6140c2e9d4224e7daaed054f/Flyer_ABCs-Cybersecurity-Terms_v1.pdf"}
      ],
      challenges: [
        {title:"Top 10 Cybersecurity Challenges", url:"https://www.geeksforgeeks.org/blogs/top-cybersecurity-challenges/"},
        {title:"TryHackMe", url:"https://tryhackme.com/"},
        {title:"Hack The Box", url:"https://www.hackthebox.eu/"},
        {title:"Top Cybersecurity Challenges", url:"https://sprinto.com/blog/challenges-of-cyber-security/#:~:text=This%20blog%20post%20will%20share%20insights%20on%20the,becoming%20important%20as%20we%20all%20become%20increasingly%20connected."}
      ],
      tools: [
        {title:"Top Cybersecurity Tools", url:"https://cyberexperts.com/cybersecurity-tools/"}
      ],
      communities: [
        {title:"r/cybersecurity", url:"https://www.reddit.com/r/cybersecurity/"}
      ],
      news: [
        {title:"CyberSecurity News", url:"https://cybersecuritynews.com/"}
      ]
    },
    {
      domain: "Web Development(Backend)",
      summary: "Web development backend focuses on server-side logic, databases, and APIs that power websites and apps. It handles data storage, authentication, and communication between the server and frontend. Common technologies include Node.js, Python, Java, PHP, and SQL databases.",
      roadmaps: [
        {title:"Backend Roadmap", url:"https://roadmap.sh/backend"}
      ],
      playlists: [
        {title:"Backend Development Playlist", url:"https://www.youtube.com/playlist?list=PL9n0l8rSshSmgrEXVNQrJDBnsvE2BoCbv"},
        {title:"Backend Development", url:"https://www.youtube.com/playlist?list=PLTjRvDozrdlynYXGUfyyMZdrQ0Sz27aud"}
      ],
      certifications: [
        {title:"Docker Essentials: A Developer Introduction-IBM(Free)", url:"https://cognitiveclass.ai/courses/docker-essentials"},
        {title:"GreatLearning-Node.js & Express.js for Web Apps and APIs", url:"https://www.mygreatlearning.com/academy/premium/node-js-express-js-for-web-apps-and-apis?gl_campaign=web_desktop_gla_search_page_loggedout_pro_course_card_section"}
      ],
      interview_prep: [
        {title:"50 Popular Backend Developer Interview Questions and Answers", url:"https://roadmap.sh/questions/backend"}
      ],
      books: [
        {title:"Cleancode", url:"https://drive.google.com/file/d/1anGq4rROh7DAF-c35-k7a3cizXHu9F6L/view"},
        {title:"10 Top Books to Become a Back-end Engineer", url:"https://booksoncode.com/articles/back-end-engineer"}
      ],
      podcasts: [
        {title:"Fastest Web Developer Roadmap Job Guarantee?  AI Is Changing Everything (Must Watch)", url:"https://www.youtube.com/watch?v=P81AoC4g60c"},
        {title:"FASTEST Way to Learn Web Development and ACTUALLY Get a Job", url:"https://www.youtube.com/watch?v=WTWEEBX9D2M&list=PL_HlKez9XCSOHJf_b3qnHcgsg_yXPn-FL"}
      ],
      blogs: [
        {title:"web.dev Blog", url:"https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=5273774&q=site:https%3A%2F%2Fweb.dev%2Ffeed.xml"}
      ],
      cheat_sheets: [
        {title:"Complete Backend Development Cheatsheet", url:"https://malharchauhan7.github.io/the-only-cheatsheets/web-development/backend-development.html"},
        {title:"Back-End Development Cheat Sheets", url:"https://yourdevkit.com/cheat-sheet/category/back-end-development"}
      ],
      challenges: [
        {title:"Common Challenges Faced by Frontend and Backend Developers (And How to Solve Them)", url:"https://medium.com/@uyanhewagetr/common-challenges-faced-by-frontend-and-backend-developers-and-how-to-solve-them-7dc12fb4ea55"}
      ],
      tools: [
        {title:"Backend Development Tools For Web Developers", url:"https://www.geeksforgeeks.org/blogs/12-backend-development-tools-for-web-developers/"}
      ],
      communities: [

        {title:"r/webdev", url:"https://www.reddit.com/r/webdev/"}
      ],
      news: [
        {title:"The Code brew | Web dev news", url:"https://thecodebrew.net/"}
      ]
    },
    {
      domain: "",
      summary: "",
      roadmaps: [
        {title:"", url:""}
      ],
      playlists: [
        {title:"", url:""}
      ],
      certifications: [
        {title:"", url:""}
      ],
      interview_prep: [
        {title:"", url:""}
      ],
      books: [
        {title:"", url:""}
      ],
      podcasts: [
        {title:"", url:""}
      ],
      blogs: [
        {title:"", url:""}
      ],
      cheat_sheets: [
        {title:"", url:""}
      ],
      challenges: [
        {title:"", url:""}
      ],
      tools: [
        {title:"", url:""}
      ],
      communities: [
        {title:"", url:""}
      ],
      news: [
        {title:"", url:""}
      ]
    },
    {
      domain: "",
      summary: "",
      roadmaps: [
        {title:"", url:""}
      ],
      playlists: [
        {title:"", url:""}
      ],
      certifications: [
        {title:"", url:""}
      ],
      interview_prep: [
        {title:"", url:""}
      ],
      books: [
        {title:"", url:""}
      ],
      podcasts: [
        {title:"", url:""}
      ],
      blogs: [
        {title:"", url:""}
      ],
      cheat_sheets: [
        {title:"", url:""}
      ],
      challenges: [
        {title:"", url:""}
      ],
      tools: [
        {title:"", url:""}
      ],
      communities: [
        {title:"", url:""}
      ],
      news: [
        {title:"", url:""}
      ]
    },
    {
      domain: "",
      summary: "",
      roadmaps: [
        {title:"", url:""}
      ],
      playlists: [
        {title:"", url:""}
      ],
      certifications: [
        {title:"", url:""}
      ],
      interview_prep: [
        {title:"", url:""}
      ],
      books: [
        {title:"", url:""}
      ],
      podcasts: [
        {title:"", url:""}
      ],
      blogs: [
        {title:"", url:""}
      ],
      cheat_sheets: [
        {title:"", url:""}
      ],
      challenges: [
        {title:"", url:""}
      ],
      tools: [
        {title:"", url:""}
      ],
      communities: [
        {title:"", url:""}
      ],
      news: [
        {title:"", url:""}
      ]
    },
    {
      domain: "",
      summary: "",
      roadmaps: [
        {title:"", url:""}
      ],
      playlists: [
        {title:"", url:""}
      ],
      certifications: [
        {title:"", url:""}
      ],
      interview_prep: [
        {title:"", url:""}
      ],
      books: [
        {title:"", url:""}
      ],
      podcasts: [
        {title:"", url:""}
      ],
      blogs: [
        {title:"", url:""}
      ],
      cheat_sheets: [
        {title:"", url:""}
      ],
      challenges: [
        {title:"", url:""}
      ],
      tools: [
        {title:"", url:""}
      ],
      communities: [
        {title:"", url:""}
      ],
      news: [
        {title:"", url:""}
      ]
    },
  ];

  /* -------------------------
     4) RENDER DOMAIN CARDS
     ------------------------- */
  const domainGrid = document.getElementById('domain-grid');

  function createDomainCard(item){
    const card = document.createElement('div');
    card.className = 'domain-card';
    card.setAttribute('tabindex','0');
    card.setAttribute('role','button');
    card.innerHTML = `
      <h5>${item.domain}</h5>
      <p>${item.summary}</p>
    `;
    // open modal on click
    card.addEventListener('click', () => openDomainModal(item));
    card.addEventListener('keydown', (e) => { if(e.key === 'Enter') openDomainModal(item); });
    return card;
  }

  resources.forEach(r => {
    domainGrid.appendChild(createDomainCard(r));
  });

  /* -------------------------
     5) SEARCH (filters dataset)
     ------------------------- */
  const searchInput = document.getElementById('global-search');
  const searchBtn = document.getElementById('search-btn');
  const resultsSection = document.getElementById('results-section');
  const resultsTitle = document.getElementById('results-title');
  const resultsGrid = document.getElementById('results');

  function searchResources(query){
    const q = query.trim().toLowerCase();
    if(!q){
      resultsSection.style.display = 'none';
      resultsTitle.style.display = 'none';
      resultsGrid.innerHTML = '';
      return;
    }
    // We'll search across domain name and all category titles / items
    const matches = [];

    resources.forEach(domain => {
      // check domain name
      let matchScore = 0;
      if(domain.domain.toLowerCase().includes(q)) matchScore += 3;

      // check in arrays
      const categories = ['roadmaps','playlists','certifications','interview_prep','books','podcasts','blogs','cheat_sheets','challenges','tools','communities','news'];
      const hits = {};
      categories.forEach(cat => {
        domain[cat].forEach(entry => {
          const hay = (entry.title + " " + (entry.url || '')).toLowerCase();
          if(hay.includes(q)){
            if(!hits[cat]) hits[cat] = [];
            hits[cat].push(entry);
            matchScore += 1;
          }
        });
      });

      // if any hits, include in results
      if(matchScore > 0){
        matches.push({domain: domain.domain, summary: domain.summary, hits, score: matchScore});
      }
    });

    // Sort by score
    matches.sort((a,b) => b.score - a.score);

    renderSearchResults(matches, q);
  }

  function renderSearchResults(matches, query){
    resultsGrid.innerHTML = '';
    resultsTitle.style.display = matches.length ? 'block' : 'none';
    document.getElementById('results-title').textContent = `Search Results for "${query}" (${matches.length})`;

    if(matches.length === 0){
      resultsGrid.innerHTML = `<div class="result-card"><p>No results found. Try broader terms or check domain cards below.</p></div>`;
      resultsSection.style.display = 'block';
      return;
    }

    matches.forEach(m => {
      const rc = document.createElement('div');
      rc.className = 'result-card';
      let inner = `<h5>${m.domain}</h5><p style="color:var(--muted);margin:6px 0 10px">${m.summary}</p>`;
      // show up to 3 categories with hits
      for(const [cat, items] of Object.entries(m.hits)){
        if(!items) continue;
        inner += `<div style="margin:6px 0"><strong style="text-transform:capitalize">${cat.replace('_',' ')}</strong>: `;
        inner += items.slice(0,3).map(it => `<a href="${it.url}" target="_blank" rel="noopener">${it.title}</a>`).join(' • ');
        inner += `</div>`;
      }
      inner += `<div style="margin-top:10px"><button class="open-domain" data-domain="${m.domain}">Open ${m.domain}</button></div>`;
      rc.innerHTML = inner;
      // open domain on button click
      rc.querySelector('.open-domain')?.addEventListener('click', (e) => {
        const d = resources.find(r => r.domain === e.target.dataset.domain);
        if(d) openDomainModal(d);
      });

      resultsGrid.appendChild(rc);
    });

    resultsSection.style.display = 'block';
    // scroll to results
    resultsSection.scrollIntoView({behavior:'smooth', block:'start'});
  }

  // wire up events
  searchBtn.addEventListener('click', () => searchResources(searchInput.value));
  searchInput.addEventListener('keydown', (e) => { if(e.key === 'Enter') searchResources(searchInput.value); });
  // quick chips open domain
  document.querySelectorAll('.chip').forEach(ch => {
    ch.addEventListener('click', (e) => {
      e.preventDefault();
      const domainName = ch.getAttribute('data-domain');
      const d = resources.find(r => r.domain === domainName);
      if(d) openDomainModal(d);
    });
  });

  /* -------------------------
     6) DOMAIN MODAL RENDERING
     ------------------------- */
  const domainModal = document.getElementById('domain-modal');
  const domainModalClose = document.getElementById('domain-modal-close');
  const modalBody = document.getElementById('modal-body');

  function openDomainModal(domainObj){
    // build modal content
    const title = `<h2 id="modal-title">${domainObj.domain}</h2><p style="color:var(--muted)">${domainObj.summary}</p><hr/>`;
    let body = title;

    const sections = ['roadmaps','playlists','certifications','interview_prep','books','podcasts','blogs','cheat_sheets','challenges','tools','communities','news'];
    const pretty = {
      roadmaps: 'Roadmaps',
      playlists: 'YouTube Playlists',
      certifications: 'Certifications',
      interview_prep: 'Interview Prep',
      books: 'Books',
      podcasts: 'Podcasts',
      blogs: 'Blogs',
      cheat_sheets: 'Cheat Sheets',
      challenges: 'Challenges',
      tools: 'Tools',
      communities: 'Communities',
      news: 'News & Trends'
    };

    sections.forEach(sec => {
      const arr = domainObj[sec] || [];
      if(arr.length === 0) return;
      body += `<div class="resource-section"><h4>${pretty[sec]}</h4><div class="resource-list">`;
      arr.forEach(it => {
        // some entries might have urls, some might be placeholders
        const url = it.url && it.url !== '#' ? it.url : '#';
        body += `<a href="${url}" target="_blank" rel="noopener">${it.title}</a>`;
      });
      body += `</div></div>`;
    });

    // footer actions
    body += `<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px;">
      <button id="open-all" data-domain="${domainObj.domain}" style="padding:10px;border-radius:10px;border:none;background:linear-gradient(90deg,var(--accent),var(--accent-2));font-weight:700;cursor:pointer;">Open resources (new tabs)</button>
      <button id="bookmark-domain" style="padding:10px;border-radius:10px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:var(--text);cursor:pointer;">
    </div>`;

    modalBody.innerHTML = body;

    // attach actions
    document.getElementById('open-all').addEventListener('click', (e) => {
      const domainName = e.target.dataset.domain;
      const d = resources.find(r => r.domain === domainName);
      if(!d) return;
      const sectionsToOpen = ['roadmaps','playlists','certifications','books'];
      // open first link from each category if present
      sectionsToOpen.forEach(sec => {
        if(d[sec] && d[sec][0] && d[sec][0].url && d[sec][0].url !== '#'){
          window.open(d[sec][0].url,'_blank');
        }
      });
    });


    // show modal
    domainModal.classList.add('show');
    domainModal.setAttribute('aria-hidden','false');
  }

  domainModalClose.addEventListener('click', closeDomainModal);
  domainModal.addEventListener('click', (e) => { if(e.target === domainModal) closeDomainModal(); });
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeDomainModal(); });

  function closeDomainModal(){
    domainModal.classList.remove('show');
    domainModal.setAttribute('aria-hidden','true');
    modalBody.innerHTML = '';
  }

  /* -------------------------
     7) ABOUT MODAL
     ------------------------- */
  const aboutBtn = document.getElementById('about-btn');
  const aboutModal = document.getElementById('about-modal');
  const aboutClose = document.getElementById('modal-close');

  aboutBtn.addEventListener('click', () => {
    aboutModal.classList.add('show');
    aboutModal.setAttribute('aria-hidden','false');
  });
  aboutClose.addEventListener('click', () => {
    aboutModal.classList.remove('show');
    aboutModal.setAttribute('aria-hidden','true');
  });
  aboutModal.addEventListener('click', (e) => { if(e.target === aboutModal) { aboutModal.classList.remove('show'); aboutModal.setAttribute('aria-hidden','true'); } });

  /* -------------------------
     8) Extra niceties
     ------------------------- */
  // Search from URL param ?q=...
  const urlParams = new URLSearchParams(window.location.search);
  if(urlParams.has('q')){
    const q = urlParams.get('q');
    searchInput.value = q;
    searchResources(q);
  }

  // small helper to scroll to top on page load
  window.scrollTo({top:0,behavior:'smooth'});

});
