import { href } from 'react-router-dom';
import { UseTheme } from './ThemeProvider';
import { useEffect, useRef } from 'react';

function HomePage() {
  const { theme, themeClasses } = UseTheme();
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    languages: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'Node.js', level: 70 }
    ],
    frontend: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'Tailwind CSS', level: 90 }
    ],
    tools: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'Netlify', level: 70 },
      { name: 'versel', level: 65 }
    ]
  };

  const projects = [
    {
      src: "../my portfolio/marry.png",
      title: "Marry Cristmas site",
      description: "A beautiful  Marry Cristmas page using JavaScript, HTMl and CSS",
      stats: ["100+ Clients", "200+ Integrations", "300% ROI", "400+ Features"],
      tags: ["JavaScript", "HTML/CSS"],
      href:""
    },
    {
      src: "../my portfolio/kch.png",
      title: "Shoping site",
      description: "A beautiful shoping page app using HTMl and CSS",
      stats: ["100+ Clients", "200+ Integrations", "300% ROI", "400+ Features"],
      tags: ["HTML/CSS"],
      href:""
    },
    {
      src: "https://avatars.mds.yandex.net/i?id=fb1b78550fe8115c5b97f772775b0a2a775b0aae-9072244-images-thumbs&n=13",
      title: "Ai chat",
      description: "A beautiful Ai Chat app using React and Tailwind",
      stats: ["100+ Clients", "200+ Integrations", "300% ROI", "400+ Features"],
      tags: ["React.js", "TailwindCSS", "HTML/CSS"],
      href:""
    },
    
  ];

  return (
    <div className={`${themeClasses[theme].bg} transition-colors duration-300`}>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-8">
        <h1 className={`text-5xl md:text-6xl font-extrabold mb-4 ${themeClasses[theme].text}`}>
          Hi, I'm <span className={themeClasses[theme].accentText}>Abylaikhan</span>
        </h1>
        <p className={`text-xl mb-12 max-w-2xl ${themeClasses[theme].text}`}>
          Full Stack Developer specializing in modern web technologies
        </p>
        
        <div className="flex gap-4 mb-24">
          <button 
            onClick={() => scrollToSection(aboutRef)}
            className={`px-6 py-3 rounded-lg ${themeClasses[theme].button}`}
          >
            About Me
          </button>
          <button 
            onClick={() => scrollToSection(projectsRef)}
            className={`px-6 py-3 rounded-lg border ${theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-800'}`}
          >
            View Projects
          </button>
        </div>
        
        <button 
          onClick={() => scrollToSection(aboutRef)}
          className="animate-bounce flex flex-col items-center"
        >
          <span className={`mb-2 ${themeClasses[theme].text}`}>Scroll down</span>
          <svg
            width="34px"
            height="32px"
            viewBox="-7.68 -7.68 39.36 39.36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={theme === 'dark' ? 'text-white' : 'text-black'}
          >
            <path
              d="M11.9297 2V22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 16L14 21.1599C13.7437 21.4336 13.434 21.6519 13.0899 21.801C12.7459 21.9502 12.375 22.0271 12 22.0271C11.625 22.0271 11.2541 21.9502 10.9101 21.801C10.566 21.6519 10.2563 21.4336 10 21.1599L5 16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </section>

      
      <section 
        ref={aboutRef} 
        className={`py-20 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100'}`}
      >
        <div className="max-w-6xl mx-auto px-8">
          <h2 className={`text-4xl font-bold mb-12 text-center ${themeClasses[theme].text}`}>
            About <span className={themeClasses[theme].accentText}>Me</span>
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h3 className={`text-2xl font-semibold mb-4 ${themeClasses[theme].text}`}>
                Passionate Web Developer & Tech Creator
              </h3>
              <p className={`mb-4 ${themeClasses[theme].text}`}>
                With over 5 years of experience in web development, I specialize in creating responsive, accessible, and performant web applications using modern technologies.
              </p>
              <p className={`mb-8 ${themeClasses[theme].text}`}>
                I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape.
              </p>
              
              <div className="flex gap-4">
                <button className={`px-6 py-3 rounded-lg ${themeClasses[theme].button}`}>
                  Get In Touch
                </button>
                <button className={`px-6 py-3 rounded-lg border ${theme === 'dark' ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-800'}`}>
                  Download CV
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-white shadow'}`}>
                <h4 className={`text-xl font-semibold mb-2 ${themeClasses[theme].text}`}>Web Development</h4>
                <p className={themeClasses[theme].text}>
                  Creating responsive websites and web applications with modern frameworks.
                </p>
              </div>
              
              <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-white shadow'}`}>
                <h4 className={`text-xl font-semibold mb-2 ${themeClasses[theme].text}`}>UI/UX Design</h4>
                <p className={themeClasses[theme].text}>
                  Designing intuitive user interfaces and seamless user experiences.
                </p>
              </div>
              
              <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-white shadow'}`}>
                <h4 className={`text-xl font-semibold mb-2 ${themeClasses[theme].text}`}>Project Management</h4>
                <p className={themeClasses[theme].text}>
                  Leading projects from conception to completion with agile methodologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        ref={skillsRef} 
        className={`py-20 ${themeClasses[theme].bg}`}
      >
        <div className="max-w-6xl mx-auto px-8">
          <h2 className={`text-4xl font-bold mb-12 text-center ${themeClasses[theme].text}`}>
            My <span className={themeClasses[theme].accentText}>Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ml-[-20px] w-[1500px]">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800/30' : 'bg-white shadow'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${themeClasses[theme].accentText}`}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <div className="space-y-4">
                  {items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className={`text-sm ${themeClasses[theme].text}`}>{skill.name}</span>
                        <span className={`text-sm ${themeClasses[theme].text}`}>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700/20 rounded-full h-2.5">
                        <div 
                          className="bg-fuchsia-600 h-2.5 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section 
        ref={projectsRef} 
        className={`py-20 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100'} mt-[100px]`}
      >
        <div className="max-w-6xl mx-auto px-8">
          <h2 className={`text-4xl font-bold mb-8 text-center ${themeClasses[theme].text}`}>
            Featured <span className={themeClasses[theme].accentText}>Projects</span>
          </h2>
          <p className={`text-lg mb-12 text-center max-w-3xl mx-auto ${themeClasses[theme].text}`}>
            Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800/30 border-gray-700' : 'bg-white border-gray-200'} border hover:shadow-lg transition-all duration-300`}
              > 
                
                <img src={project.src} alt="" />
                <h3 className={`text-2xl font-bold mb-2 ${themeClasses[theme].accentText}`}>{project.title}</h3>
                <p className={`mb-4 ${themeClasses[theme].text}`}>{project.description}</p>
                
                {project.stats && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stats.map((stat, i) => (
                      <span 
                        key={i} 
                        className={`px-3 py-1 rounded-full text-sm ${theme === 'dark' ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'}`}
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-full text-sm bg-fuchsia-600/10 text-fuchsia-600"
                    >
                      {tag}
                    </span>
                  ))}
                 
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://github.com/Abylaikhan777" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-block px-6 py-3 rounded-lg ${themeClasses[theme].button} font-medium`}
            >
              Check My GitHub
            </a>
          </div>
        </div>
      </section>

     
      <footer className={`py-8 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-800'} text-white text-center`}>
        <p>© 2025 Abylaikhan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;