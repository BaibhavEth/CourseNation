import React from 'react';
import { BookOpen, Users, Lightbulb, Brain, Compass } from 'lucide-react';

const styles = [
  {
    name: 'Apprentice',
    icon: BookOpen,
    description: 'Learn through structured, step-by-step guidance',
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Incidental',
    icon: Users,
    description: 'Learn through real-world case studies and examples',
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'Inductive',
    icon: Lightbulb,
    description: 'Learn by discovering patterns and principles',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    name: 'Deductive',
    icon: Brain,
    description: 'Learn through analysis and logical reasoning',
    color: 'from-purple-500 to-purple-600'
  },
  {
    name: 'Discovery',
    icon: Compass,
    description: 'Learn through experimentation and exploration',
    color: 'from-red-500 to-red-600'
  }
];

export default function LearningStyles() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Learning Styles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {styles.map((style) => {
            const Icon = style.icon;
            return (
              <div
                key={style.name}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className={`bg-gradient-to-r ${style.color} p-6`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{style.name}</h3>
                  <p className="text-gray-600">{style.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}