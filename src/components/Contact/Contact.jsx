import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission (e.g., sending the data to an API or email)
    alert("Form Submitted!");
  };
  return (
    <section className="bg-gradient-to-r bg-indigo-500 py-16">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl font-extrabold mb-4 animate__animated animate__fadeIn">
          Get In Touch
        </h2>
        <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-1s">
          We'd love to hear from you! Please fill out the form below.
        </p>

        {/* Contact Form */}
        <div className="flex justify-center">
          <form
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg space-y-6 animate__animated animate__fadeIn animate__delay-2s"
            onSubmit={handleSubmit}
          >
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Message"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;