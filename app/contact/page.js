export default function Contact() {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-lg mt-4">Have questions? Reach out to us!</p>
        <form className="mt-6">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="border p-2 block w-full mt-2" 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="border p-2 block w-full mt-2" 
          />
          <textarea 
            placeholder="Your Message" 
            className="border p-2 block w-full mt-2"
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-3 mt-4 rounded-md">
            Send Message
          </button>
        </form>
      </div>
    );
  }
  