import React from "react";

const Skills = () => (
  <section>
    <h2 className="text-2xl font-bold text-indigo-400 mb-4">Skills</h2>

    <div className="bg-gray-800 p-6 shadow-lg rounded mb-6 text-gray-200">
      <h3 className="font-semibold text-lg mb-2 text-indigo-300">Technical Skills</h3>
      <ul className="list-disc list-inside text-gray-400">
        <li><strong>Languages:</strong> Java, JavaScript, SQL</li>
        <li><strong>Tech Stack:</strong> HTML, CSS, React, Node.js, Express, MongoDB</li>
        <li><strong>Tools & Platforms:</strong> Git, GitHub, Vercel, Netlify</li>
      </ul>
    </div>

    <div className="bg-gray-800 p-6 shadow-lg rounded text-gray-200">
      <h3 className="font-semibold text-lg mb-2 text-indigo-300">Soft Skills</h3>
      <ul className="list-disc list-inside text-gray-400">
        <li>Strong problem-solving and analytical skills</li>
        <li>Effective communication and collaboration</li>
        <li>Quick learner with adaptability to new technologies</li>
        <li>Time management and ability to meet deadlines</li>
        <li>Team player with leadership experience in project environments</li>
      </ul>
    </div>
  </section>
);

export default Skills;
