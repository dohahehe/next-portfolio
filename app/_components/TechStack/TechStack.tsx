import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, 
  SiNodedotjs, SiMongodb, SiNextdotjs, SiRedux, SiReactquery,
  SiReacthookform, SiTailwindcss, SiBootstrap, SiGit, SiNpm,
  SiVite, SiEslint, SiVercel, SiAxios, SiReactrouter
} from 'react-icons/si'
import { FaCode, FaPalette, FaWrench, FaPlug, FaServer } from 'react-icons/fa'
import { TbApi } from 'react-icons/tb'

const technologies = [
  {
    category: "Core Languages",
    icon: FaCode,
    items: [
      { name: 'HTML5', icon: SiHtml5, level: 'Advanced' },
      { name: 'CSS3', icon: SiCss3, level: 'Advanced' },
      { name: 'JavaScript (ES6+)', icon: SiJavascript, level: 'Advanced' },
      { name: 'TypeScript', icon: SiTypescript, level: 'Intermediate' },
    ]
  },
  {
    category: "Frontend Frameworks",
    icon: SiReact,
    items: [
      { name: 'React 19', icon: SiReact, level: 'Advanced' },
      { name: 'Next.js', icon: SiNextdotjs, level: 'Intermediate' },
      { name: 'REST APIs', icon: TbApi, level: 'Advanced' },
    ]
  },
  {
    category: "State Management",
    icon: SiRedux,
    items: [
      { name: 'Redux Toolkit', icon: SiRedux, level: 'Intermediate' },
      { name: 'TanStack Query', icon: SiReactquery, level: 'Advanced' },
      { name: 'Context API', icon: SiReact, level: 'Advanced' },
    ]
  },
  {
    category: "Form & Validation",
    icon: SiReacthookform,
    items: [
      { name: 'React Hook Form', icon: SiReacthookform, level: 'Advanced' },
      { name: 'Zod', icon: FaCode, level: 'Intermediate' },
      { name: 'React Router', icon: SiReactrouter, level: 'Advanced' },
    ]
  },
  {
    category: "Styling & UI",
    icon: FaPalette,
    items: [
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Advanced' },
      { name: 'Bootstrap', icon: SiBootstrap, level: 'Advanced' },
      { name: 'Responsive Design', icon: FaPalette, level: 'Advanced' },
    ]
  },
  {
    category: "Development Tools",
    icon: FaWrench,
    items: [
      { name: 'Git & GitHub', icon: SiGit, level: 'Advanced' },
      { name: 'npm', icon: SiNpm, level: 'Advanced' },
      { name: 'Vite', icon: SiVite, level: 'Experienced' },
      { name: 'ESLint', icon: SiEslint, level: 'Experienced' },
      { name: 'Vercel', icon: SiVercel, level: 'Experienced' },
    ]
  },
  {
    category: "APIs & Libraries",
    icon: FaPlug,
    items: [
      { name: 'Axios', icon: SiAxios, level: 'Advanced' },
      { name: 'React Icons', icon: FaCode, level: 'Advanced' },
      { name: 'Node.js', icon: SiNodedotjs, level: 'Experienced' },
      { name: 'MongoDB', icon: SiMongodb, level: 'Experienced' },
    ]
  }
]

export default function TechStack() {
  return (
    <section id="tech" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Tech Stack
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Technologies I work with to build modern, scalable web applications
        </p>
        
        <div className="space-y-12">
          {technologies.map((category, categoryIndex) => (
            <div key={category.category} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold">
                  {category.category}
                </h3>
                <div className="flex-1 h-px bg-border" />
              </div>
              
              {/* Tech Items Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {category.items.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="group bg-card p-4 rounded-lg border hover:shadow-lg transition-all hover:-translate-y-1 duration-300"
                    style={{ animationDelay: `${(categoryIndex * 5 + index) * 50}ms` }}
                  >
                    <tech.icon className="w-8 h-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-medium text-sm mb-1 line-clamp-1">{tech.name}</h4>
                    <p className="text-xs text-muted-foreground">{tech.level}</p>
                    
                    {/* Hover tooltip for full name if needed */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}