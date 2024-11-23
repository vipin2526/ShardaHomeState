"use client";
import { useParams } from 'next/navigation';
import { projectsData } from '../projectsData'; // You'll need to move projectsData to a separate file
import Image from 'next/image';

export default function ProjectDetail() {
  const { slug } = useParams();
  
  // Find the project that matches the slug
  const project = projectsData.find(p => 
    p.title.toLowerCase().replace(/ /g, '-') === slug
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Image 
        src={project.image} 
        alt={project.title} 
        className="w-full h-[400px] object-cover rounded-lg"
      />
      <div className="mt-8">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-xl text-gray-600 mt-2">{project.location}</p>
        <p className="mt-6 text-lg">{project.fullDescription}</p>
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Amenities</h2>
          <ul className="mt-4 grid grid-cols-2 gap-4">
            {project.amenities.map((amenity, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {amenity}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="mt-2 text-xl text-blue-600">{project.price}</p>
        </div>
      </div>
    </div>
  );
} 