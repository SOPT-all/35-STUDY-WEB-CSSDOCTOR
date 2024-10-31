const posts = [
  {
    id: 1,
    image: "https://dummyimage.com/600x400/000/fff&text=Post+Image+1",
    title: "Understanding React State and Lifecycle",
    description:
      "A comprehensive guide to managing state and lifecycle in React applications.",
    date: "2024-10-31",
    comments: 12,
    author: "john_doe",    
    authorImage: "https://velog.velcdn.com/images/imddoy/profile/01b111b5-7ab9-45f6-98fd-fc7d6dba71d4/social_profile.jpeg",
    hearts: 34,
  },
  {
    id: 2,
    image: "https://dummyimage.com/600x400/333/fff&text=Post+Image+2",
    title: "Introduction to TypeScript",
    description:
      "Why TypeScript is essential for modern JavaScript development.",
    date: "2024-10-29",
    comments: 7,
    author: "jane_smith", 
    authorImage: "https://velog.velcdn.com/images/imddoy/profile/01b111b5-7ab9-45f6-98fd-fc7d6dba71d4/social_profile.jpeg",
    hearts: 56,
  },
  {
    id: 3,
    image: "https://dummyimage.com/600x400/666/fff&text=Post+Image+3",
    title: "Exploring CSS Grid Layout",
    description:
      "CSS Grid offers a new way to build layouts on the web. This guide will help you master it.",
    date: "2024-10-25",
    comments: 4,
    author: "frontend_nerd",    authorImage: "https://velog.velcdn.com/images/imddoy/profile/01b111b5-7ab9-45f6-98fd-fc7d6dba71d4/social_profile.jpeg",

    hearts: 23,
  },
  {
    id: 4,
    image: "https://dummyimage.com/600x400/999/fff&text=Post+Image+4",
    title: "Getting Started with Node.js",
    description:
      "Node.js is a powerful tool for backend development. Here's how to start.",
    date: "2024-10-20",
    comments: 10,
    author: "dev_guru",    authorImage: "https://velog.velcdn.com/images/imddoy/profile/01b111b5-7ab9-45f6-98fd-fc7d6dba71d4/social_profile.jpeg",

    hearts: 48,
  },
  {
    id: 5,
    image: "https://dummyimage.com/600x400/555/fff&text=Post+Image+5",
    title: "JavaScript ES6 Features You Should Know",
    description:
      "Enhance your JavaScript skills by learning the key features of ES6.",
    date: "2024-10-15",
    comments: 5,
    author: "code_master",    authorImage: "https://velog.velcdn.com/images/imddoy/profile/01b111b5-7ab9-45f6-98fd-fc7d6dba71d4/social_profile.jpeg",

    hearts: 39,
  },
  {
    id: 6,
    image: "https://dummyimage.com/600x400/111/fff&text=Post+Image+6",
    title: "Responsive Web Design Basics",
    description:
      "A beginner's guide to building responsive websites using modern CSS techniques.",
    date: "2024-10-10",
    comments: 3,
    author: "web_creator",
    authorImage: "https://velog.velcdn.com/images/imddoy/profile/01b111b5-7ab9-45f6-98fd-fc7d6dba71d4/social_profile.jpeg",

    hearts: 25,
  },
  {
    id: 7,
    image: "https://dummyimage.com/600x400/222/fff&text=Post+Image+7",
    title: "Mastering Python for posts Science",
    description:
      "Essential Python skills for posts science and machine learning.",
    date: "2024-10-05",
    comments: 9,
    author: "posts_wiz",
    authorImage: "https://velog.velcdn.com/images/imddoy/profile/01b111b5-7ab9-45f6-98fd-fc7d6dba71d4/social_profile.jpeg",

    hearts: 61,
  },
  {
    id: 8,
    image: "https://dummyimage.com/600x400/444/fff&text=Post+Image+8",
    title: "Vue.js vs React: Which to Choose?",
    description: "A comparison of Vue.js and React for frontend development.",
    date: "2024-10-01",
    comments: 15,
    author: "js_fanatic",
    authorImage: "https://velog.velcdn.com/images/imddoy/profile/01b111b5-7ab9-45f6-98fd-fc7d6dba71d4/social_profile.jpeg",

    hearts: 49,
  },
  {
    id: 9,
    image: "https://dummyimage.com/600x400/888/fff&text=Post+Image+9",
    title: "Building REST APIs with Express",
    description: "Step-by-step guide to building REST APIs using Express.js.",
    date: "2024-09-29",
    comments: 6,
    author: "api_guru",
    authorImage: "https://velog.velcdn.com/images/imddoy/profile/01b111b5-7ab9-45f6-98fd-fc7d6dba71d4/social_profile.jpeg",

    hearts: 42,
  },
  {
    id: 10,
    image: "https://dummyimage.com/600x400/aaa/fff&text=Post+Image+10",
    title: "CSS Animations for Beginners",
    description: "Add motion to your website with simple CSS animations.",
    date: "2024-09-25",
    comments: 8,
    author: "animator",
    authorImage: "https://velog.velcdn.com/images/imddoy/profile/01b111b5-7ab9-45f6-98fd-fc7d6dba71d4/social_profile.jpeg",

    hearts: 33,
  },
  {
    id: 11,
    image: "https://dummyimage.com/600x400/bbb/fff&text=Post+Image+11",
    title: "Debugging JavaScript like a Pro",
    description: "Tips and tools for debugging JavaScript effectively.",
    date: "2024-09-20",
    comments: 4,
    author: "debug_master",
    authorImage: "https://velog.velcdn.com/images/imddoy/profile/01b111b5-7ab9-45f6-98fd-fc7d6dba71d4/social_profile.jpeg",

    hearts: 18,
  },
  {
    id: 12,
    image: "https://dummyimage.com/600x400/ccc/fff&text=Post+Image+12",
    title: "Optimizing Web Performance",
    description:
      "Learn techniques to make your website faster and more efficient.",
    date: "2024-09-15",
    comments: 2,
    author: "perf_wizard",
    authorImage: "https://velog.velcdn.com/images/imddoy/profile/01b111b5-7ab9-45f6-98fd-fc7d6dba71d4/social_profile.jpeg",
    hearts: 27,
  },
];

export default posts;
