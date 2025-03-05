export default function HowItWorks() {
    return (
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-900">How It Works?</h2>
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-10 px-6">
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">1. Upload Notes</h3>
            <p className="text-gray-600">Easily upload and share your notes.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">2. Browse Notes</h3>
            <p className="text-gray-600">Find study materials from top students.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">3. Download & Learn</h3>
            <p className="text-gray-600">Download notes and enhance your knowledge.</p>
          </div>
        </div>
      </section>
    );
  }
  