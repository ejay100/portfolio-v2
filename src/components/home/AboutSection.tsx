export function AboutSection() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Business', items: ['Process Optimization', 'IT Strategy', 'Project Management'] },
    { category: 'Cloud', items: ['AWS', 'Azure', 'CI/CD', 'DevOps'] },
  ];

  const milestones = [
    {
      year: '2015-2018',
      title: 'Early Entrepreneurial Roots',
      description: 'Helped manage family eatery in Accra, developing business acumen and customer service skills.',
    },
    {
      year: '2018-2021',
      title: 'Academic & Tech Journey',
      description: 'Developed campus management tools while studying, streamlining administrative processes.',
    },
    {
      year: '2021-Present',
      title: 'Professional Growth',
      description: 'Frontend developer specializing in business process optimization through web solutions.',
    },
    {
      year: 'Vision',
      title: 'Northland Analytics',
      description: 'Building towards establishing a leading IT consultancy serving West Africa.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Bridging Technology & Business
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                From managing a family eatery in Accra to developing enterprise solutions,
                my journey combines entrepreneurial spirit with technical expertise.
              </p>
            </div>

            {/* Journey Timeline */}
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800">
                  <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400" />
                  <div className="space-y-2">
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {milestone.year}
                    </div>
                    <div className="font-semibold">{milestone.title}</div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skillSet, index) => (
                <div 
                  key={index}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
                >
                  <h3 className="font-semibold mb-4">{skillSet.category}</h3>
                  <ul className="space-y-2">
                    {skillSet.items.map((skill, skillIndex) => (
                      <li 
                        key={skillIndex}
                        className="text-gray-600 dark:text-gray-400 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl">
              <h3 className="font-semibold mb-4">Core Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400 flex items-center justify-center text-white">
                    ★
                  </span>
                  <div>
                    <strong>Innovation with Purpose</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Technology solutions that solve real business challenges
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400 flex items-center justify-center text-white">
                    ★
                  </span>
                  <div>
                    <strong>African Excellence</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Showcasing world-class tech talent from Ghana
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400 flex items-center justify-center text-white">
                    ★
                  </span>
                  <div>
                    <strong>Business-First Approach</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Focus on delivering measurable business value
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
