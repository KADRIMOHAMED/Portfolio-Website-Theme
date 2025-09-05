'use client';

import { motion } from 'framer-motion';
import { User, Award, Target, Coffee } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Projects Completed', value: '10+' },
  { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
  { icon: Target, label: 'Happy Clients', value: '25+' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I&apos;m a passionate Data Analyst with expertise in turning raw data into meaningful insights and building
            interactive dashboards that support decision-making.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
              <div className="relative">
                      <img 
                         src="/dashboard.png" 
                         alt="Kadri Mohamed" 
                         className="w-32 h-32 rounded-full object-cover mx-auto" 
                      />
           </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                With several years of experience in data analysis and business intelligence, I&rsquo;ve worked on projects ranging from sales performance dashboards to financial and operational reporting.
                I specialize in Power BI, Excel, SQL, and SAP Business One, with strong skills in data modeling, visualization, and reporting automation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                My Approach
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
               I believe in creating clear, actionable reports that combine accuracy with visual impact. My goal is to help businesses understand their data and make smarter decisions.
               I&rsquo;m constantly improving my skills in data visualization, analytics, and process optimization, staying up to date with modern BI tools and practices.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                    <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
