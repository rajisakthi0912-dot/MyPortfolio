import React from "react";
import "./index.css"; // for animations

function App() {
  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-gray-900 shadow z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-xl font-bold text-blue-400">Rajeshwari S</h1>
          <div className="space-x-6 text-gray-300">
            <a href="#home" className="hover:text-blue-400">Home</a>
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#education" className="hover:text-blue-400">Education</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#experience" className="hover:text-blue-400">Experience</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
            {/* ✅ Resume Download in Navbar */}
            <a
              href="/RAJESHWARI_S.pdf"
              download="Rajeshwari_Resume.pdf"
              className="hover:text-blue-400 font-semibold"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      {/* Home */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 bg-gray-950"
      >
        {/* Floating Profile Image */}
        <img
          src="/raji-prof.png"
          alt="Rajeshwari S"
          className="w-56 h-56 rounded-full shadow-lg object-cover border-4 border-blue-400 animate-float"
        />

        <h2 className="text-4xl md:text-5xl font-bold mt-6 text-white">
          Hi, I'm <span className="text-blue-400">Rajeshwari</span> 👋
        </h2>
        <p className="max-w-xl text-lg text-gray-400 mt-4">
          Aspiring <strong>AI & Machine Learning Engineer</strong> and{" "}
          <strong>Data Analyst</strong>. Passionate about building intelligent
          models and turning data into insights.
        </p>

        <div className="space-x-4 mt-6">
          <a
            href="#projects"
            className="bg-blue-500 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-600"
          >
            View Projects
          </a>
          {/* ✅ Resume Download Button */}
          <a
            href="/RAJESHWARI_S.pdf"
            download="Rajeshwari_Resume.pdf"
            className="border border-blue-400 text-blue-400 px-5 py-3 rounded-lg hover:bg-blue-500 hover:text-white"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-800 text-center">
        <h3 className="text-3xl font-bold mb-6 text-blue-400">About Me</h3>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
          I am a B-Tech Computer Science student at{" "}
          <strong>Kangeyam Institute of Technology</strong> with a GPA of{" "}
          <strong>8.7/10</strong>. My focus areas are Artificial Intelligence,
          Machine Learning, and Data Analytics. I enjoy solving real-world
          problems through predictive models, data visualization, and smart
          automation.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 text-center bg-gray-950">
        <h3 className="text-3xl font-bold mb-10 text-blue-400">Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Python","C","Java","SQL","HTML","CSS","JavaScript","ReactJS",
            "Machine Learning","Deep Learning","Pandas","NumPy",
            "Scikit-learn","TensorFlow","Power BI","Excel",
          ].map((skill) => (
            <span key={skill} className="bg-gray-700 px-4 py-2 rounded-lg">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 bg-gray-800 text-center">
        <h3 className="text-3xl font-bold mb-10 text-blue-400">Education</h3>
        <div className="max-w-4xl mx-auto text-lg text-gray-300">
          <div className="bg-gray-900 p-6 rounded-lg shadow mb-6">
            <h4 className="font-semibold text-xl text-blue-300">
              B-Tech in Computer Science
            </h4>
            <p>Kangeyam Institute of Technology (2022–2026)</p>
            <p>GPA: <strong>8.7/10</strong></p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow mb-6">
            <h4 className="font-semibold text-xl text-blue-300">HSC</h4>
            <p>Krishnaveni Govt. Girls HSS (2020–2022)</p>
            <p>GPA: <strong>8.5</strong></p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow">
            <h4 className="font-semibold text-xl text-blue-300">SSLC</h4>
            <p>Krishnaveni Govt. Girls HSS (2019–2020)</p>
            <p>GPA: <strong>8.5</strong></p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 text-center bg-gray-950">
        <h3 className="text-3xl font-bold mb-10 text-blue-400">Projects</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg">
            <h4 className="font-semibold text-lg mb-2 text-blue-300">
              Medicine Recommendation System
            </h4>
            <p className="text-gray-400">
              Predicts diseases from symptoms and suggests medicines using ML.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg">
            <h4 className="font-semibold text-lg mb-2 text-blue-300">
              Customer Sentiment Analysis
            </h4>
            <p className="text-gray-400">
              NLP-based analysis of customer reviews for insights and trends.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg">
            <h4 className="font-semibold text-lg mb-2 text-blue-300">
              Sales Dashboard
            </h4>
            <p className="text-gray-400">
              Interactive Power BI dashboard to analyze and forecast sales.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 text-center bg-gray-800">
        <h3 className="text-3xl font-bold mb-6 text-blue-400">
          Internship Experience
        </h3>
        <ul className="text-lg text-gray-300 space-y-4">
          <li>💼 <strong>AI & ML Intern</strong> — AICTE + Edunet (Jun–Jul 2025)</li>
          <li>💼 <strong>Data Science Intern</strong> — Global Knowledge (Aug 2024)</li>
          <li>💼 <strong>Data Science Intern</strong> — Skill Craft (Nov–Dec 2024)</li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-950 text-center">
        <h3 className="text-3xl font-bold mb-6 text-blue-400">Contact Me</h3>
        <p className="text-lg text-gray-400 mb-6">
          Let’s collaborate on AI/ML or Data projects!
        </p>
        <p>
          📧 <a href="mailto:rajeshwarisakthivel09@gmail.com" className="text-blue-400">
            rajeshwarisakthivel09@gmail.com
          </a>
        </p>
        <p>
          📱 <a href="tel:+917502935204" className="text-blue-400">
            +91 75029 35204
          </a>
        </p>
        <div className="space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/rajisakthi" target="_blank" className="text-blue-400 hover:underline" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/rajeshwarisakthi" target="_blank" className="text-blue-400 hover:underline" rel="noreferrer">GitHub</a>
          <a href="https://www.hackerrank.com/profile/rajeshwarisakth1" target="_blank" className="text-blue-400 hover:underline" rel="noreferrer">HackerRank</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 text-center py-6">
        © 2025 Rajeshwari S | AI & Data Portfolio
      </footer>
    </>
  );
}

export default App;
