import Link from 'next/link';

export default function Contact() {
  return (
    <section className='py-28 px-6 bg-gray-50'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-3xl font-bold mb-12 text-gray-700 border-b-2 border-amber-400 pb-3 inline-block'>
          CONTACT
        </h2>

        <form className='bg-white shadow-xl border border-gray-200 p-16 rounded-2xl space-y-8 max-w-4xl mx-auto'>
          {/* Name */}
          <div className='text-left'>
            <label
              htmlFor='name'
              className='block text-sm font-semibold text-gray-700 mb-2 ml-1'>
              Name
            </label>
            <input
              id='name'
              type='text'
              placeholder='Enter your name'
              className='
                w-full
                px-6 py-4
                text-md
                text-gray-700
                bg-gray-50
                border border-gray-300
                rounded-xl
                transition-all duration-300
                focus:outline-none
                focus:ring-2 focus:ring-amber-400
                focus:border-amber-400
                placeholder:text-gray-400
              '
            />
          </div>

          {/* Email */}
          <div className='text-left'>
            <label
              htmlFor='email'
              className='block text-sm font-semibold text-gray-700 mb-2 ml-1'>
              Email
            </label>
            <input
              id='email'
              type='email'
              placeholder='Enter your email'
              className='
                w-full
                px-6 py-4
                text-md
                text-gray-700
                bg-gray-50
                border border-gray-300
                rounded-xl
                transition-all duration-300
                focus:outline-none
                focus:ring-2 focus:ring-amber-400
                focus:border-amber-400
                placeholder:text-gray-400
              '
            />
          </div>

          {/* Message */}
          <div className='text-left'>
            <label
              htmlFor='message'
              className='block text-sm font-semibold text-gray-700 mb-2 ml-1'>
              Message
            </label>
            <textarea
              id='message'
              placeholder='Enter your message'
              className='
                w-full
                px-6 py-4
                text-md
                text-gray-700
                bg-gray-50
                border border-gray-300
                rounded-xl
                h-48
                transition-all duration-300
                focus:outline-none
                focus:ring-2 focus:ring-amber-400
                focus:border-amber-400
                placeholder:text-gray-400
              '
            />
          </div>

          <div className='flex w-full mx-auto sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit mt-12'>
            <button className='lg:inline-flex bg-primary text-white py-3 px-12 rounded hover:-translate-y-0.5 duration-200'>
              <Link href='#'>
                <span className='uppercase'>Submit</span>
              </Link>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
