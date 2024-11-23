"use client";
import { useState } from 'react';

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectName: '', 
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          phone: '',
          email: '',
          projectName: '',
          message: ''
        });
        setIsOpen(false);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen && (
        <div className="absolute bottom-20 right-0 mb-2 w-[350px]">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-2xl py-4 px-8 border border-gray-100">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="text-gray-700 mt-1 block w-full rounded-lg border-gray-200 shadow-sm border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="text-gray-700 mt-1 block w-full rounded-lg border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="text-gray-700 mt-1 block w-full rounded-lg border-gray-200 shadow-sm border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="projectName" className="block text-sm font-semibold text-gray-700">Project Name</label>
                <input
                  type="text"
                  id="projectName"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  required
                  className="text-gray-700 mt-1 block w-full rounded-lg border-gray-200 shadow-sm border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message/Query</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  required
                  className="text-gray-700 mt-1 block w-full rounded-lg border-gray-200 shadow-sm border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg text-base font-semibold hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4-4-4z" />
        </svg>
      </button>
    </div>
  );
}
