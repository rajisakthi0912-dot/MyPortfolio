import React, { useEffect, useState } from "react";

function App() {
  const [ip, setIP] = useState("Fetching...");

  useEffect(() => {
    // Fetch public IP using ipify API
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIP(data.ip))
      .catch(() => setIP("Error fetching IP"));
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 font-sans">
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
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <img
          src="raji-prof.jpg"
          alt="Rajeshwari S"
          className="w-48 h-48 rounded-full shadow-lg object-cover border-4 border-blue-400"
        />
        <h2 className="text-4xl md:text-5xl font-bold mt-6">
          Hi, I'm <span className="text-blue-400">Rajeshwari</span> 👋
        </h2>
        <p className="max-w-xl text-lg text-gray-400 mt-4">
          Aspiring <strong>AI & Machine Learning Engineer</strong> and <strong>Data Analyst</strong>.
          Passionate about building intelligent models and turning data into insights.
        </p>
      </section>

      {/* ✅ IP Address Section */}
      <section id="ip" className="py-20 text-center bg-gray-800">
        <h2 className="text-3xl font-bold text-blue-400 mb-6">
          🌍 Your IP Address
        </h2>
        <div className="bg-gray-900 p-6 rounded-lg shadow max-w-md mx-auto">
          <p className="text-lg text-blue-300">{ip}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 text-center py-6">
        © 2025 Rajeshwari S | AI & Data Portfolio
      </footer>
    </div>
  );
}

export default App;
