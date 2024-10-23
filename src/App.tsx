import React, { useState } from 'react';
import Header from './components/Header';
import FileUpload from './components/FileUpload';
import LearningStyles from './components/LearningStyles';
import ProcessingStatus from './components/ProcessingStatus';

function App() {
  const [processingStatus, setProcessingStatus] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <section className="py-16 bg-gradient-to-b from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transform Your Learning Experience
              </h1>
              <p className="text-xl text-indigo-100 mb-8">
                Upload your study material and get personalized learning paths 
                tailored to different learning styles.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-center mb-8">
                  Upload Your PDF
                </h2>
                <FileUpload />
              </div>
            </div>
          </div>
        </section>

        <LearningStyles />

        {processingStatus && <ProcessingStatus status={processingStatus} />}
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} AdaptLearn. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;