import { useState } from 'react';
import { technicalSkills, softSkills } from '../data/skillsData';
import Tippy from '@tippyjs/react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');

  const tabs = [
    { value: 'technical', label: 'Technical Skills', icon: 'bx bx-code-alt' },
    { value: 'soft', label: 'Soft Skills', icon: 'bx bx-user-voice' },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-white dark:bg-gray-800 pt-20 overflow-hidden"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center text-gray-800 dark:text-white mb-12">
          <h2 className="text-5xl font-bold mb-2">My Skills</h2>
          <p className="text-lg text-gray-800 dark:text-white">
            Expertise in modern web technologies and essential soft skills
          </p>

          <br /><br />

          {/* Tabs Menu */}
          <div
            className="flex justify-center mb-8 gap-4 flex-wrap"
            data-aos-delay="600"
            data-aos="fade-down"
          >
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                aria-pressed={activeTab === tab.value}
                aria-label={tab.label}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg shadow-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.value
                    ? 'bg-gray-800 text-white dark:bg-white dark:text-gray-800'
                    : 'bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-white dark:border-gray-700'
                }`}
              >
                <i className={`${tab.icon} text-base`} />
                {tab.label}
              </button>
            ))}
          </div>
          <br />
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === 'technical' &&
            technicalSkills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6"
                data-aos="fade-up"
              >
                <div className="flex items-center gap-4 mb-4">
                  <i
                    className={`bx ${skill.icon} text-3xl`}
                    style={{ color: skill.color }}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {skill.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-700 dark:text-white font-medium mb-1">
                    Proficiency
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="h-3 rounded-full"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}

          {activeTab === 'soft' &&
            softSkills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden"
                data-aos="fade-up"
              >
                <div className="relative">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-red-500 text-white rounded-full px-3 py-1 text-xs font-bold">
                    {skill.level}%
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                    <i className="bx bx-check-circle text-red-500" /> {skill.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <br />
    </section>
  );
};

export default Skills;
