import React from 'react';

const Contact = () => {

  return (
    <section id='contact' className="bg-customGreen">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-bold text-center text-white sm:text-xl">
          Got a any questions? Want to send feedback about any feature? Need details about our Project? Let us know.
        </p>
        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-8">
          <input type="hidden" name="access_key" value="c57bbe8f-6491-45d3-8a75-aecffdbd7d92"></input>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
              Your email
            </label>
            <input
              type="email"
              name="email"
              className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              placeholder="Enter your Email"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white ">
              Subject
            </label>
            <input
              type="text"
              name="name"
              className="block p-3 w-full text-sm text-black bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white ">
              Your message
            </label>
            <textarea
              id="message"
              name='message'
              rows="6"
              className="block p-2.5 w-full text-sm text-black bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <input type="hidden" name="redirect" value="https://web3forms.com/success"></input>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-darkGreen sm:w-fit hover:bg-customBlue focus:ring-4 focus:outline-none focus:ring-primary-300 "
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
