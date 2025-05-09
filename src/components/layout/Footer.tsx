export function Footer() {
  const currentYear = new Date().getFullYear();
  const linkedInUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/in/eltonjohnkyeremeh';
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/eltonjohnkyeremeh';
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@eltonjohnkyeremeh.com';

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Elton John Kyeremeh</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Frontend Developer & IT Consultant based in Ghana, specializing in business process optimization.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href={githubUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href={linkedInUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${contactEmail}`}
                  className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Elton John Kyeremeh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
