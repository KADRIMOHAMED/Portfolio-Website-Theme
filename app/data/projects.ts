export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Urbanization & Demographics",
    description: "The challenge focused on analyzing urbanization trends in South America using Power BI Visualization and ZoomCharts' Drill Down Visuals.",
    image: "/dashboard.jpg",
    tags: ["Power BI", "DAX" , "Excel"],
    githubUrl: "https://github.com/KADRIMOHAMED",
    liveUrl: "https://www.linkedin.com/posts/kadrimohamed_datadna-builtwithzoomcharts-powerbi-activity-7295498273723740160-6oxQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAACSPxgMB05bNKOWLiQnbX9Xy3LNbAQFMfe8",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates using Socket.io.",
    image: "/placeholder-project-2.jpg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/username/task-manager",
    liveUrl: "https://fastweb-phi.vercel.app/"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts and interactive charts.",
    image: "/placeholder-project-3.jpg",
    tags: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    githubUrl: "https://github.com/username/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.vercel.app"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, animated portfolio website showcasing my skills and projects.",
    image: "/placeholder-project-4.jpg",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/username/portfolio",
    liveUrl: "https://portfolio-demo.vercel.app"
  },
  {
    id: 5,
    title: "AI Chatbot",
    description: "An intelligent chatbot powered by OpenAI GPT-4 with custom training capabilities.",
    image: "/placeholder-project-5.jpg",
    tags: ["Next.js", "OpenAI", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/username/ai-chatbot",
    liveUrl: "https://chatbot-demo.vercel.app"
  },
  {
    id: 6,
    title: "Recipe Finder",
    description: "A recipe discovery platform with ingredient-based search and meal planning features.",
    image: "/placeholder-project-6.jpg",
    tags: ["React", "Spoonacular API", "Firebase", "Material-UI"],
    githubUrl: "https://github.com/username/recipe-finder",
    liveUrl: "https://recipe-finder-demo.vercel.app"
  }
];
