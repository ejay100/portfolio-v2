'use client';

import { Service } from '@/types';
import { useState } from 'react';
import Image from 'next/image';

export function ServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: 'frontend-dev',
      title: 'Frontend Development',
      description: 'Modern, responsive web applications with a focus on user experience and performance.',
      icon: '/icons/code.svg',
      benefits: [
        'Responsive design that works on all devices',
        'Fast-loading, optimized applications',
        'Intuitive user interfaces',
        'Accessibility compliance',
      ],
      features: [
        'React & Next.js development',
        'Progressive Web Apps',
        'Performance optimization',
        'UI/UX implementation',
      ],
    },
    {
      id: 'process-optimization',
      title: 'Business Process Optimization',
      description: 'Streamline your operations with custom software solutions.',
      icon: '/icons/optimization.svg',
      benefits: [
        'Reduced operational costs',
        'Improved efficiency',
        'Better data insights',
        'Scalable solutions',
      ],
      features: [
        'Workflow automation',
        'Custom software development',
        'Integration services',
        'Process analysis and optimization',
      ],
    },
    {
      id: 'cloud-consulting',
      title: 'Cloud Solutions',
      description: 'Expert guidance on cloud adoption and management for African businesses.',
      icon: '/icons/cloud.svg',
      benefits: [
        'Reduced infrastructure costs',
        'Improved scalability',
        'Better security',
        'Local expertise',
      ],
      features: [
        'Cloud migration strategy',
        'AWS & Azure solutions',
        'DevOps implementation',
        'Security best practices',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored for West African businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative group cursor-pointer p-6 rounded-xl transition-all duration-300
                ${activeService === service.id
                  ? 'bg-blue-600 text-white transform scale-105'
                  : 'bg-white dark:bg-gray-800 hover:shadow-lg'
                }`}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 w-12 h-12">
                <Image
                  src={service.icon}
                  alt=""
                  width={48}
                  height={48}
                  className={`w-full h-full ${
                    activeService === service.id
                      ? 'invert brightness-0'
                      : 'text-blue-600 dark:text-blue-400'
                  }`}
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className={`mb-4 ${
                activeService === service.id
                  ? 'text-blue-100'
                  : 'text-gray-600 dark:text-gray-400'
              }`}>
                {service.description}
              </p>

              {/* Benefits & Features */}
              <div className={`space-y-4 transition-opacity duration-300 ${
                activeService === service.id ? 'opacity-100' : 'opacity-0 h-0'
              }`}>
                {/* Benefits */}
                <div>
                  <h4 className="font-semibold mb-2">Benefits</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="text-sm">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-2">Features</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}