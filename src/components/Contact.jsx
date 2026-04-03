const Contact = () => {
  return (
    <section id="contact" className="max-w-5xl mx-auto py-20 px-6">
      
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-center mb-10">
        Contact
      </h2>

      {/* Intro */}
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Open to opportunities, collaborations, or discussions related to development and technology.
      </p>

      {/* Contact Info */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* Left Side */}
        <div className="space-y-6 text-gray-700">
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <a href="mailto:vesuwalak@gmail.com" className="font-medium hover:underline">
              vesuwalak@gmail.com
            </a>
          </div>

          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium">+91 9316933063</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-medium">Surat, Gujarat</p>
          </div>

          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/Krishnaiya-vesuwala"
              target="_blank"
              className="text-sm underline hover:text-black"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              className="text-sm underline hover:text-black"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Side (Form) */}
        <form className="space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-black"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-black"
          />

          <textarea
            rows="4"
            placeholder="Message"
            className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-black resize-none"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-2 bg-black text-white text-sm hover:opacity-90"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contact;