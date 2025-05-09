import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 py-20 sm:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/[0.05] dark:bg-grid-gray-800/[0.05] bg-[size:40px_40px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Frontend Developer & <span className="text-blue-600 dark:text-blue-400">IT Consultant</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Building modern web solutions and optimizing business processes. From Ghana to the world.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-full text-gray-900 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Available for projects
              </div>
              <div>•</div>
              <div>Based in Ghana</div>
            </div>
          </div>

          <div className="relative aspect-square max-w-md mx-auto">
            {/* Placeholder for Elton's profile image */}
            <Image
              src="https://placehold.co/800x800/png"
              alt="Elton John Kyeremeh"
              width={800}
              height={800}
              className="rounded-2xl shadow-2xl"
              priority
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10" />
            
            {/* Replace placeholder with comment */}
            {/* TODO: Replace with Elton's professional headshot */}
          </div>
        </div>
      </div>
    </section>
  );
}
