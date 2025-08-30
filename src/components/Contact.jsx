import React from "react";

function Contact() {
  return (
    <section id="contact" className="section-compact px-6 bg-primary">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">LET'S</span>
            <span className="text-accent"> CONNECT</span>
          </h2>
          <p className="section-subtitle">
            Ready to start a project or just want to chat? I'd love to hear from you!
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="card p-5 h-full flex flex-col">
            <h3 className="text-lg font-semibold text-accent mb-5 uppercase tracking-wide">Get in Touch</h3>
            
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-highlight rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-accent font-medium text-sm uppercase tracking-wide">Email</h4>
                  <p className="text-secondary text-sm">charles.olivier.ipperciel@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-info rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-accent font-medium text-sm uppercase tracking-wide">Location</h4>
                  <p className="text-secondary text-sm">Montreal, Quebec, Canada</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-accent font-medium text-sm uppercase tracking-wide">Availability</h4>
                  <p className="text-secondary text-sm">Open to new opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-5 h-full flex flex-col">
            <h3 className="text-lg font-semibold text-accent mb-5 uppercase tracking-wide">Send a Message</h3>
            <form
              action="https://getform.io/f/aolmgwdb"
              method="POST"
              className="flex-1 flex flex-col space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-accent mb-2 uppercase tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="form-input"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-accent mb-2 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="flex-1 flex flex-col">
                <label htmlFor="message" className="block text-sm font-medium text-accent mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="form-input resize-none flex-1"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-3 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;