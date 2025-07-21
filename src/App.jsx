import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, User, Briefcase, MessageSquare, Menu, X, ExternalLink } from 'lucide-react';
// IMPORTANT: Ensure your image file is named 'profile.jpg' and is located at 'src/assets/profile.jpg'
// If your image has a different name or path, please update the import statement accordingly.
import profilePic from './assets/profile.jpg';
// Importing project images
import deadlinePic from './assets/deadline.png'; // Image for Chatting App
import assistPic from './assets/assist.png';   // Image for Appointment Scheduling Web App

// --- Utility Components ---

// SectionWrapper component for consistent padding and background
const SectionWrapper = ({ id, children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after a slight delay for staggered effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <section
      id={id}
      className={`py-16 px-4 md:px-8 lg:px-16 transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
    >
      {/* Removed max-w-7xl mx-auto from here to make content span full width */}
      <div>
        {children}
      </div>
    </section>
  );
};

// --- Data ---
// Mock data for projects. In a real app, this might come from an API or CMS.
const projectsData = [
  {
    id: 1,
    title: 'Chatting App',
    description: 'Developed a real-time chat application using TypeScript, React, and Socket.IO. Implemented user authentication, real-time messaging, and responsive UI. Deployed on Vercel for fast and reliable performance.',
    image: deadlinePic, // Changed to imported image
    tags: ['TypeScript', 'React', 'Socket.IO', 'Node.js', 'Express', 'Vercel'],
    githubLink: 'https://github.com/itz-aaditya/chatting',
    liveLink: 'https://chatting-puce.vercel.app/',
  },
  {
    id: 2,
    title: 'Appointment Scheduling Web App',
    description: 'Built a full-stack scheduling app using the MERN stack (MongoDB, Express, React, Node). Integrated JWT-based authentication and appointment management. Deployed on Render; responsive frontend using React + Vite.',
    image: assistPic, // Changed to imported image
    tags: ['MERN Stack', 'MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Vite', 'Render'],
    githubLink: 'https://github.com/itz-aaditya/appointment-scheduling',
    liveLink: 'https://appointment-scheduling-1.onrender.com/',
  },
  // You can add more projects here following the same structure
];

// --- Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after clicking a link
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-md z-50">
      {/* Removed max-w-7xl mx-auto from nav to make it span full width */}
      <nav className="flex justify-between items-center py-4 px-4 md:px-8 lg:px-16">
        <div className="text-2xl font-bold text-gray-800">
          <a href="#" onClick={() => scrollToSection('hero')} className="hover:text-indigo-600 transition-colors">AadityaJha</a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#about" onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">About</a>
          <a href="#projects" onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Projects</a>
          <a href="#contact" onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-indigo-600 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white bg-opacity-95 backdrop-blur-sm py-4 pb-6 shadow-lg">
          <div className="flex flex-col items-center space-y-4">
            <a href="#about" onClick={() => scrollToSection('about')} className="text-gray-800 hover:text-indigo-600 transition-colors text-lg font-medium py-2 w-full text-center">About</a>
            <a href="#projects" onClick={() => scrollToSection('projects')} className="text-gray-800 hover:text-indigo-600 transition-colors text-lg font-medium py-2 w-full text-center">Projects</a>
            <a href="#contact" onClick={() => scrollToSection('contact')} className="text-gray-800 hover:text-indigo-600 transition-colors text-lg font-medium py-2 w-full text-center">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper id="hero" className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <img
          src={profilePic} // Changed from placeholder URL to imported local image
          alt="Your Profile Picture"
          className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl" // Added hover effects
          onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/160x160/FFFFFF/333333?text=Profile`; }} // Fallback for profile picture
        />
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
          Hi, I'm <span className="text-yellow-300 animate-fadeInUpAndBounce">Aaditya Kumar Jha</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
          A passionate <span className="font-semibold">Software Developer</span> focused on building
          innovative and user-friendly web applications.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-white text-indigo-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-300 flex items-center"
          >
            <Briefcase className="mr-2" size={20} /> View Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 flex items-center"
          >
            <Mail className="mr-2" size={20} /> Get in Touch
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

const About = () => {
  return (
    <SectionWrapper id="about" className="bg-gray-50 text-gray-800" delay={200}>
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-700">
        <User className="inline-block mr-3 text-indigo-600" size={36} /> About Me
      </h2>
      {/* Content will now stretch to full width with padding */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-lg leading-relaxed space-y-6">
          <p>
            Hello! I'm <span className="font-semibold text-indigo-600">Aaditya Kumar Jha</span>, a dedicated software developer with a passion for creating
            robust and scalable web applications. My journey in tech began with a fascination for how
            digital solutions can solve real-world problems.
          </p>
          <p>
            I specialize in front-end development using <span className="font-semibold text-indigo-600">React.js</span>,
            building intuitive and dynamic user interfaces. I also have experience with back-end technologies
            like Node.js and various databases, allowing me to work across the full stack.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
            or enjoying outdoor activities. I'm always eager to learn and take on new challenges!
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
          <h3 className="text-2xl font-semibold mb-6 text-indigo-700 flex items-center">
            <Code className="mr-3 text-indigo-500" size={24} /> My Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Next.js', 'Git', 'REST APIs', 'GraphQL'].map((skill, index) => (
              <span key={index} className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-indigo-200 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/F5F5F5/333333?text=${project.title.replace(/\s/g, '+')}`; }}
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-700 mb-4 text-base line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 transition-colors flex items-center font-medium"
            >
              <Github className="mr-2" size={20} /> GitHub
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-colors flex items-center"
            >
              Live Demo <ExternalLink className="ml-2" size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <SectionWrapper id="projects" className="bg-white text-gray-800" delay={400}>
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-700">
        <Briefcase className="inline-block mr-3 text-indigo-600" size={36} /> My Projects
      </h2>
      {/* Content will now stretch to full width with padding */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const Contact = () => {
  const [formStatus, setFormStatus] = useState(''); // 'idle', 'submitting', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    // In a real application, you would send this data to a backend server.
    // For this example, we'll simulate a successful submission after a delay.
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus('success');
      e.target.reset(); // Clear the form
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-gray-50 text-gray-800" delay={600}>
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-700">
        <MessageSquare className="inline-block mr-3 text-indigo-600" size={36} /> Contact Me
      </h2>
      {/* Content will now stretch to full width with padding */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
          <h3 className="text-2xl font-semibold mb-6 text-indigo-700">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 bg-gray-100 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200" // Changed background and text color
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 bg-gray-100 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200" // Changed background and text color
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 bg-gray-100 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-y" // Changed background and text color
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 w-full flex items-center justify-center"
              disabled={formStatus === 'submitting'}
            >
              {formStatus === 'submitting' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
            {formStatus === 'success' && (
              <p className="text-green-600 text-center mt-4">Message sent successfully! I'll get back to you soon.</p>
            )}
            {formStatus === 'error' && (
              <p className="text-red-600 text-center mt-4">Failed to send message. Please try again later.</p>
            )}
          </form>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-6 text-indigo-700">Find Me On</h3>
          <ul className="space-y-4 text-lg">
            <li>
              <a href="mailto:ajha63002@gmail.com" className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors">
                <Mail className="mr-3 text-indigo-500" size={24} /> ajha63002@gmail.com
              </a>
            </li>
            <li>
              <a href="https://github.com/itz-aaditya" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors">
                <Github className="mr-3 text-indigo-500" size={24} /> github.com/itz-aaditya
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/aaditya-kumar-jha-71a0852b4/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors">
                <Linkedin className="mr-3 text-indigo-500" size={24} /> linkedin.com/in/aaditya-kumar-jha
              </a>
            </li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} Aaditya Kumar Jha. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---
export default function App() {
  // Add smooth scroll behavior to HTML for better UX
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="font-inter antialiased text-gray-900">
      {/* Custom CSS for animations */}
      <style>
        {`
        @keyframes fadeInUpAndBounce {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          60% {
            opacity: 1;
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-fadeInUpAndBounce {
          animation: fadeInUpAndBounce 1s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        `}
      </style>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
