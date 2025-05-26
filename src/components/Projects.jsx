import React from "react";

const Projects = () => (
  <section>
    <h2 className="text-2xl font-bold text-indigo-400 mb-4">Projects</h2>
    <div className="space-y-6">
      <div className="bg-gray-800 p-6 shadow-lg rounded-lg text-gray-200">
        <h3 className="font-semibold text-lg mb-2 text-indigo-300">TravelX App</h3>
        <p className="mb-1 text-gray-300">
          A full-stack MERN application designed for travel enthusiasts to explore and plan trips.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-1">
          <li>User authentication and authorization implemented with JWT and bcrypt.</li>
          <li>Dynamic filtering of destinations based on categories and user preferences.</li>
          <li>Interactive carousel showcasing featured travel spots with smooth animations.</li>
          <li>Global state management using React Context API for seamless data flow.</li>
          <li>Responsive design ensuring accessibility on both desktop and mobile devices.</li>
        </ul>
      </div>
      <div className="bg-gray-800 p-6 shadow-lg rounded-lg text-gray-200">
        <h3 className="font-semibold text-lg mb-2 text-indigo-300">Article Reader App</h3>
        <p className="mb-1 text-gray-300">
          A responsive React app that fetches and displays articles with search and pagination features.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-1">
          <li>Integrated Axios for efficient API calls to fetch articles dynamically.</li>
          <li>Implemented real-time search to filter articles based on keywords.</li>
          <li>Pagination controls to navigate through large sets of articles smoothly.</li>
          <li>Mobile-first design approach for optimal user experience on all devices.</li>
          <li>Clean UI built with Tailwind CSS for fast styling and layout.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Projects;
