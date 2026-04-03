export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 text-center max-w-3xl mx-auto px-6">
      
      <h1 className="text-4xl md:text-5xl font-semibold mb-4">
        Krishnaiya Vesuwala
      </h1>

      <p className="text-lg text-gray-600 mb-2">
        Full Stack Developer
      </p>

      <p className="text-gray-500 mb-6">
        Building scalable backend systems, cloud-based applications, and AI-integrated solutions.
      </p>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          className="px-6 py-2 bg-blue-600 text-white rounded-md"
        >
          View Projects
        </button>

        <button
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          className="px-6 py-2 border border-gray-300 rounded-md"
        >
          Contact
        </button>
      </div>
    </section>
  );
}