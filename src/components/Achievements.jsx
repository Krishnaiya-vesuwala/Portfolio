const Achievements = () => {
  return (
    <section id="achievements" className="max-w-6xl mx-auto py-20 px-6">
      
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-center mb-12">
        Achievements & Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Achievements */}
        <div>
          <h3 className="text-lg font-medium mb-6 border-b pb-2">
            Hackathon Achievements
          </h3>

          <div className="space-y-6 text-gray-700">

            <div>
              <p className="font-semibold">3rd Place</p>
              <p className="text-sm">IdeaStrom Hackathon</p>
              <p className="text-xs text-gray-500">IIT Roorkee</p>
            </div>

            <div>
              <p className="font-semibold">1st Place</p>
              <p className="text-sm">Hackathon</p>
              <p className="text-xs text-gray-500">J.P. Dawer Institute</p>
            </div>

            <div>
              <p className="font-semibold">4th Place</p>
              <p className="text-sm">Vadodara Hackathon</p>
              <p className="text-xs text-gray-500">Parul University</p>
            </div>

          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-lg font-medium mb-6 border-b pb-2">
            Certifications
          </h3>

          <div className="space-y-4 text-gray-700">

            <p>AWS Solutions Architecture Job Simulation — <span className="text-gray-500">Forage</span></p>
            <p>Cloud Computing Foundation — <span className="text-gray-500">AWS</span></p>
            <p>AWS Machine Learning Foundations — <span className="text-gray-500">AWS</span></p>
            <p>Geo AI/ML — <span className="text-gray-500">ISRO</span></p>
            <p>Node.js Certification — <span className="text-gray-500">Scaler</span></p>
            <p>Project Management — <span className="text-gray-500">LinkedIn</span></p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;