"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import '../../styles/Projects.css';
import Image from 'next/image';

export default function Projects() {
  const router = useRouter();
  const [showAll, setShowAll] = useState(false)

  const projectsData = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
      title: 'Luxury Apartments',
      location: 'Downtown Area', 
      description: 'Modern luxury apartments with premium amenities',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      title: 'Seaside Villas',
      location: 'Coastal Region',
      description: 'Exclusive beachfront villas with panoramic ocean views',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
      title: 'Garden Residences',
      location: 'Suburban Area',
      description: 'Family-friendly homes surrounded by lush greenery',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      title: 'Urban Lofts',
      location: 'City Center',
      description: 'Contemporary loft apartments in prime urban location',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      title: 'Mountain View Estate',
      location: 'Highland District',
      description: 'Luxurious homes with breathtaking mountain scenery',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
      title: 'Riverside Condos',
      location: 'Waterfront District',
      description: 'Modern condominiums with stunning river views',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e',
      title: 'Golf Course Estate',
      location: 'Green Valley',
      description: 'Elegant homes overlooking championship golf courses',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde',
      title: 'Lake View Mansions',
      location: 'Lake District',
      description: 'Prestigious mansions with serene lake views',
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea',
      title: 'Forest Retreats',
      location: 'Woodland Area',
      description: 'Peaceful homes nestled in natural forest settings',
    }
  ]

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 6)

  const handleProjectClick = (project) => {
    // Convert title to URL-friendly slug
    const slug = project.title.toLowerCase().replace(/ /g, '-');
    router.push(`/projects/${slug}`);
  };

  return (
    <div className="bg-gray-100">
      <div className="projects-container">
        <h2 className="projects-heading">Our Popular Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {displayedProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card flex-grow-0 flex-shrink-0 basis-[300px] cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleProjectClick(project)}
            >
              <Image src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="location">{project.location}</p>
                <p className="description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {projectsData.length > 6 && (
          <button 
            className="see-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'See More'}
          </button>
        )}
      </div>
    </div>
  )
}
