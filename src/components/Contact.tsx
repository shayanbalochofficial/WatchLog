import React from "react";

function Contact() {
  return (
    <section className="bg-black text-white py-16 lg:px-24 px-4">
      <div className="max-w-5xl mx-auto lg:text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 text-[#8a7968] text-center">
          Stay connected with Us!
        </h2>
        <p className="text-[#ffffff] mb-8">
          Got any questions, feedback, or ideas you'd like to share? Don't
          hesitate to reach out to us! We're always here to help and listen.
          Subscribe to our newsletter for exclusive content, updates on new
          tutorials and insights into the latest trends in technology. Stay
          informed and be a part of our growing community!
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Input fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Nameeee */}
            <div>
              <label htmlFor="fullName" className="block text-sm mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                required
                className="w-full py-3 px-4 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a7986]"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email
              </label>
              <input
                type="text"
                id="email"
                required
                className="w-full py-3 px-4 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a7986]"
                placeholder="Enter your email"
              />
            </div>

            {/* Message  */}
            <div>
              <label htmlFor="message" className="block text-sm mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message here"
                rows={5}
                required
                className="w-full py-3 px-4 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a7986]"
              ></textarea>
              {/*  */}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
