import { projectsData } from '../data/projectsData';
import Tippy from '@tippyjs/react';

const Project = () => {
    return (
        <section
            id="projects"
            className="min-h-screen bg-white dark:bg-gray-800 pt-20 overflow-hidden"
            data-aos="fade-down"
            data-aos-duration="1000"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <header className="text-center text-gray-800 dark:text-white mb-12">
                    <h2 className="text-5xl font-bold mb-2">My Projects</h2>
                    <p className="text-lg text-gray-800 dark:text-white">A showcase of my recent works and creative solutions</p>
                </header>
                <br /><br />

                {/* Project Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-2xl duration-300"
                            data-aos="fade-up"
                            data-aos-delay={project.id * 100}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{project.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Tech: {project.tech}</p>
                                <div className="flex items-center gap-3">
                                    <Tippy content="View Project">
                                        <a
                                            href={project.preview}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-red-400 hover:bg-red-600 text-white w-9 h-9 rounded-full flex items-center justify-center transition"
                                        >
                                            <i className="bx bx-show-alt text-lg"></i>
                                        </a>
                                    </Tippy>

                                    <Tippy content="View GitHub">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gray-600 hover:bg-gray-800 text-white w-9 h-9 rounded-full flex items-center justify-center transition"
                                        >
                                            <i className="bx bxl-github text-lg"></i>
                                        </a>
                                    </Tippy>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <br></br>
            <br></br>
        </section>
    );
};

export default Project;
