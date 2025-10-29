"use client";

export function Location() {
  return (
    <section id="location" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-500 mb-4">
            Prime Location
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            4th Floor, Anubhuti Apartment
            Office no, 402, Lane 1, Bavdhan
            Pune, Maharashtra 411021
          </p>
        </div>
        <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0777983474657!2d73.7575629!3d18.5962024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e3e6800001%3A0x1!2sAnubhuti%20Apartment%2C%20Lane%201%2C%20Bavdhan%2C%20Pune%2C%20Maharashtra%20411021!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            title="location"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="mt-4 text-center">
          <a
            href="https://maps.app.goo.gl/71nuW1UArLhuhMxM7?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            View on Google Maps
          </a>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Near IT Hub</h3>
            <p className="text-gray-600">10 minutes to major tech parks</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Shopping & Entertainment</h3>
            <p className="text-gray-600">5 minutes to shopping malls</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Schools & Hospitals</h3>
            <p className="text-gray-600">Premium institutions nearby</p>
          </div>
        </div>
      </div>
    </section>
  );
}
