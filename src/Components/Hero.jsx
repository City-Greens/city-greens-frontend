

export default function Example() {

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-[url('./assets/hero2.jpg')] bg-no-repeat bg-center">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center w-full"> 
          <h2 className="text-2xl font-bold tracking-tight text-grey-700 sm:text-6xl bg-gray-200 py-8">
            Connecting the world with greens!
          </h2>
        </div>
      </div>
      <div>
        <h1 className="text-7xl font-bold tracking-tight text-center text-grey-700 sm:text-6xl py-3 w-full">
          City Greens 
        </h1> 
      </div>
      <div className="relative isolate px-6 py-16 lg:px-8 bg-white"> 
        <p className="mt-6 text-lg leading-8 font-bold text-gray-600 text-center">
          At City Greens, we are committed to providing the best quality greens to our customers. Blah Blah.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Learn More <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}
