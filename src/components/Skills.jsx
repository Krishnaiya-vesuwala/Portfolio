export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto py-16 px-6">
      
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>

      <div className="grid md:grid-cols-3 gap-8 text-gray-600">

        <div>
          <h3 className="font-medium mb-2">Frontend</h3>
          <p>HTML, CSS, React</p>
        </div>

        <div>
          <h3 className="font-medium mb-2">Backend</h3>
          <p>Node.js, Express.js, PHP, Java, .NET</p>
        </div>

        <div>
          <h3 className="font-medium mb-2">Databases</h3>
          <p>MongoDB, MySQL, SQLite</p>
        </div>

        <div>
          <h3 className="font-medium mb-2">Programming</h3>
          <p>C, C++, JavaScript, TypeScript, Data Structures</p>
        </div>

        <div>
          <h3 className="font-medium mb-2">Tools</h3>
          <p>GitHub, Firebase, AWS</p>
        </div>

        <div>
          <h3 className="font-medium mb-2">Mobile</h3>
          <p>Android, iOS</p>
        </div>

      </div>
    </section>
  );
};