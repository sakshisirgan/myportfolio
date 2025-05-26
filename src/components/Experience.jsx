import React from "react";

const Experience = () => (
  <section>
    <h2 className="text-2xl font-bold text-indigo-400 mb-4">Experience</h2>
    <div className="space-y-6">
      <div className="bg-gray-800 p-6 shadow-lg rounded-lg text-gray-200">
        <h3 className="font-semibold text-white">MERN Stack Intern – Geeks for Geeks</h3>
        <p className="text-sm text-gray-400 mb-2">Aug 2024 – Dec 2024</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Built full-stack applications using React, Node.js, Express, and MongoDB with RESTful APIs.</li>
          <li>Implemented user authentication and authorization using JWT and bcrypt.</li>
          <li>Collaborated with cross-functional teams to deploy projects on cloud platforms.</li>
          <li>Optimized application performance and improved UI responsiveness.</li>
          <li>Gained hands-on experience in Agile methodologies and version control with Git.</li>
        </ul>
      </div>
      <div className="bg-gray-800 p-6 shadow-lg rounded-lg text-gray-200">
        <h3 className="font-semibold text-white">Web Dev Intern – CodeClause</h3>
        <p className="text-sm text-gray-400 mb-2">Jan 2023 – Feb 2023</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Developed responsive and user-friendly interfaces with HTML, CSS, JavaScript, and React.</li>
          <li>Implemented reusable React components to improve code maintainability.</li>
          <li>Participated in code reviews and collaborated in a team environment.</li>
          <li>Assisted in debugging and fixing UI bugs across different browsers and devices.</li>
          <li>Learned best practices in web accessibility and performance optimization.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;
