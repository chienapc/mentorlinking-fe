import React from "react";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200 via-white to-blue-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-blue-600 mb-4 animate__animated animate__bounceIn animate__delay-1s">
          404
        </h1>
        <p className="text-xl text-blue-500 mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="text-white text-lg font-semibold py-3 px-6 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Go Back to Home
        </a>
      </div>

      {/* Optional: Sử dụng ảnh sáng và dễ chịu */}
      <div className="mt-12 animate__animated animate__fadeIn animate__delay-3s">
        <img
          src="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif"
          alt="Not Found"
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}
