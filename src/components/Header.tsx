import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BookOpen className="h-8 w-8" />
            <h1 className="text-2xl font-bold">AdaptLearn</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-indigo-200 transition-colors">Dashboard</a>
            <a href="#" className="hover:text-indigo-200 transition-colors">My Courses</a>
            <a href="#" className="hover:text-indigo-200 transition-colors">Profile</a>
          </nav>
        </div>
      </div>
    </header>
  );
}