const Education = () => {
  return (
    <section id="education" className="py-16 bg-white text-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Education</h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Progress Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-400"></div>

        <div className="space-y-16 relative z-10">
          {/* B.E */}
          <div className="bg-slate-50 p-6 rounded-lg shadow relative w-full">
            <h3 className="text-xl font-semibold text-gray-900 text-center">Bachelors of Computer Engineering (B.E)</h3>
            <p className="text-gray-800 text-center">Savitribai Phule Pune University, Nashik</p>
            <p className="text-sm text-gray-700 text-center">2021 – 2025</p>
            <p className="mt-2 text-gray-700 text-center">
              Passed — CGPA: 6.85
            </p>
          </div>

          {/* HSC */}
          <div className="bg-slate-50 p-6 rounded-lg shadow relative w-full">
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-4 h-4 bg-blue-600 rounded-full border-4 border-purple-200"></div>
            <h3 className="text-xl font-semibold text-gray-900 text-center">Higher Secondary Certificate (HSC)</h3>
            <p className="text-gray-800 text-center">Tarapur Vidya Mandir & Junior College</p>
            <p className="text-sm text-gray-700 text-center">2019 – 2021</p>
            <p className="mt-2 text-gray-700 text-center">
              Passed — Percentage: 78%
            </p>
          </div>

          {/* SSC */}
          <div className="bg-slate-50 p-6 rounded-lg shadow relative w-full">
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-4 h-4 bg-blue-600 rounded-full border-4 border-purple-200"></div>
            <h3 className="text-xl font-semibold text-gray-900 text-center">Secondary School Certificate (SSC)</h3>
            <p className="text-gray-800 text-center">Tarapur Vidya Mandir & Junior College</p>
            <p className="text-sm text-gray-700 text-center">2018 – 2019</p>
            <p className="mt-2 text-gray-700 text-center">
              Passed — Percentage: 63%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
