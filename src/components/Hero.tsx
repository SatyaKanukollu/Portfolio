import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import profileImage from '../assets/images/profile.jpg';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
        {/* Left content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm Satya Kanukollu
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Full Stack Developer | Cloud Engineer
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Michigan, United States
          </p>
          <div className="flex justify-center md:justify-start space-x-6 mb-8">
            <a 
              href="https://github.com/SatyaKanukollu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/satyavkanukollu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:kanukollu.satya@gmail.com"
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={28} />
            </a>
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="Resume"
            >
              <FileText size={28} />
            </a>
          </div>
          <div className="flex justify-center md:justify-start space-x-4">
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Contact Me
            </a>
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer" 
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
        {/* Right content - Profile Image */}
        <div className="md:w-1/2 mt-12 md:mt-0">
          <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 blur-xl"></div>
            <img 
              src={profileImage}
              alt="Satya Kanukollu"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-blue-600 shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}