import React from 'react'

export default function Contact() {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e366d785-5d6c-47e9-8b12-bddd5cc9eb02");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      alert("Form submitted successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert("Error submitting form: " + data.message);
      setResult("");
    }
  };
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden ' id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Feel free to reach out to us anytime. We'd love to hear from you.</p>



        {/* form  */}
        <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'> 

            <div className='flex flex-wrap'>

                <div className='w-full md:w-1/2 text-left'>Your Name
                <input className='w-full border border=gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Your Name ' required />
                </div>

                <div className='w-full md:w-1/2 text-left md:pl-4'>Your Email
                <input className='w-full border border=gray-300 rounded py-3 px-4 mt-2' type="text" name='Email' placeholder='Your Email ' required />
                </div>

            </div>
            <div className='my-6 text-left'>
                Your Message
                <textarea className='w-full border border=gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name='Message' placeholder='Your Message ' required />
            </div>
            <button className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full mt-8'>{result ? result : "Send Message "}</button>
        </form>
      
    </div>
  )
}


