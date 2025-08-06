import React from "react";

function Help() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        🎬 Help & Support
      </h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">
          About Filmfolio
        </h2>
        <p className="text-gray-600">
          Filmfolio is a movie portfolio app where you can explore movies,
          discover directors, and browse by genres. It's a great place to
          explore cinema and learn about filmmakers.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">
          How to Use the Site
        </h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>
            🧭 <strong>Browse Movies:</strong> Visit the homepage to view all
            available movies.
          </li>
          <li>
            🎭 <strong>Filter by Genre:</strong> Use the genre page to find
            movies in your favorite category.
          </li>
          <li>
            🎬 <strong>Director Details:</strong> Click on any director to view
            their bio and all movies they directed.
          </li>
          <li>
            📽️ <strong>Movie Info:</strong> Click on a movie to explore its
            details, synopsis, and more (if available).
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 text-gray-600">
          <div>
            <strong>❓ I clicked a movie but nothing happened?</strong>
            <p>
              If the page didn't change, check if you're connected to the server
              (localhost:3000) or try refreshing the page.
            </p>
          </div>
          <div>
            <strong>❓ How do I go back to the previous page?</strong>
            <p>
              Use your browser's back button or the navigation bar (if
              provided).
            </p>
          </div>
        </div>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">
          Contact & Feedback
        </h2>
        <p className="text-gray-600">
          For feedback or questions, feel free to reach out at{" "}
          <a
            href="mailto:support@filmfolio.com"
            className="text-blue-500 underline"
          >
            support@filmfolio.com
          </a>
        </p>
      </section>

      <p className="text-center text-sm text-gray-500 mt-6">
        © 2025 Filmfolio. All rights reserved.
      </p>
    </div>
  );
}

export default Help;
