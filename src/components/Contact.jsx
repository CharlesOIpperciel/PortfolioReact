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
            Have a question or just want to chat? I'd love to hear from you!
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="card p-5 h-full flex flex-col">
            <h3 className="text-lg font-semibold text-accent mb-5 uppercase tracking-wide">Get in Touch</h3>
            
            <div className="space-y-4 flex-1">
              <div>
                <div>
                  <h4 className="text-accent font-medium text-sm uppercase tracking-wide">Email Addresses</h4>
                  <div className="space-y-3 mt-2">
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary/20 border border-secondary/30">
                      <div className="w-6 h-6 bg-accent rounded-lg flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-accent text-xs font-medium uppercase tracking-wide">Personal</p>
                        <p className="text-secondary text-sm">charlesolivieripperciel@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary/20 border border-secondary/30">
                      <div className="w-6 h-6 bg-info rounded-lg flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-accent text-xs font-medium uppercase tracking-wide">A1 Imports</p>
                        <p className="text-secondary text-sm">cipperciel@a1imports.ca</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary/20 border border-secondary/30">
                      <div className="w-6 h-6 bg-success rounded-lg flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-accent text-xs font-medium uppercase tracking-wide">Institut du E-Commerce</p>
                        <p className="text-secondary text-sm">cippercie@institutduecommerce.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary/20 border border-secondary/30">
                <div className="w-6 h-6 bg-info rounded-lg flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-accent text-xs font-medium uppercase tracking-wide">Location</h4>
                  <p className="text-secondary text-sm">Sherbrooke, Quebec, Canada</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary/20 border border-secondary/30">
                <div className="w-6 h-6 bg-success rounded-lg flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-accent text-xs font-medium uppercase tracking-wide">Response Time</h4>
                  <p className="text-secondary text-sm">I typically respond within 24 hours</p>
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
                  placeholder="What's on your mind? Just say hello!"
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