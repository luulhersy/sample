import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
ReactDOM.createRoot(document.getElementById('root')).render(
    <div>

{/* <!-- header ++++++++++++++++++++++++++++--> */}
{/* <!-- customize colors see tailwind site and search colors--> */}
<div className="bg-yellow-700 p-4 flex justify-between items-center">
{/* <!-- left side ++++++++++++++++++++++++++++--> */}
     <div class="flex items-center">
        <img className='w-20 mr-2' src="https://cdn3.iconfinder.com/data/icons/cat-force/256/cat_paper.png" alt="" />
       
  <a href="#" className="inline-block p-2 text-yellow-400 hover:text-yellow-300 mr-2">Home</a>
       
  <a href="#" class="inline-block p-2 text-yellow-400 hover:text-yellow-300">About</a>
       
</div>
    {/* <!-- right side ++++++++++++++++++++++++++++--> */}
  <div className="md:flex justify-between">
    {/* <!-- "hidden md:block" find solution so log in and register is not hidden--> */}
    <a href="#" className="inline-block p-2 text-yellow-400 mr-2">Login</a>
    <a href="#" className="inline-block py-2 px-4 text-yellow-400 bg-green-600 hover:text-yellow-300 hover:bg-green-700 rounded-lg transition ease-in duration-250">Register</a>
  </div>
</div>


{/* <!-- hero ++++++++++++++++++++++++++++
photo &copy Koen Eijkelenboom --> */}
<div className="md:flex justify-between py-20 px-10 bg-yellow-600 text-yellow-100">
     {/* <!-- left side --> */}
  <div className="md:w-1/2 mb-10 md:mb-0">
    <h2 className="text-2xl md:text-4xl lg:text-6xl text-white mb-6">Welcome to Kitty Playhouse</h2>
    <p className="mb-6">Where adventures are always waiting to happen.</p>
    
    <a href="#" className="inline-block py-3 px-6 text-lg bg-gray-400 hover:bg-gray-300 text-gray-800 hover:text-gray-500 rounded-lg transition ease-in duration-250 mr-2">Learn More</a>
    
    <a href="#" className="inline-block py-3 px-6 text-lg bg-blue-400 hover:bg-blue-300 text-blue-800 hover:text-blue-600 rounded-lg transition ease-in duration-250">Get Started</a>
    
  </div>
      {/* <!-- right side ++++++++++++++++++++++++++++ --> */}

  <div className="w-1/2">
    <img className='w-full rounded-lg shadow-2xl' src="https://images.unsplash.com/photo-1503844281047-cf42eade5ca5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80" />
  </div>

</div>

{/* <!-- features ++++++++++++++++++++++++++++ --> */}


<div className="flex py-16 px-10 bg-yellow-800 text-yellow-200 text-center">
  <div className="mr-2 text-center">
    <img className="w-full mb-4 rounded border-solid border-2 border-yellow-200" src="https://images.unsplash.com/photo-1531040890822-02403b688175?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="" />
    {/* <!-- photo by Max Sandelin --> */}
    <p>Peek-a-boo!</p>
  </div>
  <div className="mr-2 mt-8 text-center">
    <img className='mb-4 border-solid w-full rounded border-2 border-yellow-200 ' src="https://images.unsplash.com/photo-1586042091284-bd35c8c1d917?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80" alt="" />
        {/* <!-- photo by Dimitri Houtteman --> */}

    <p>Exploring Nature!</p>
  </div>
  <div className="mr-2 text-center">
  <img className='mb-4 border-solid w-full rounded border-2 border-yellow-200 ' src="https://images.unsplash.com/photo-1586042091284-bd35c8c1d917?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80" alt="" />

            {/* <!-- photo by Sarah Brown --> */}

    <p>Lazy Weekends!</p>
  </div>
  <div className="mr-2 mt-8 text-center">
  <img className='mb-4 border-solid w-full rounded border-2 border-yellow-200 ' src="https://images.unsplash.com/photo-1586042091284-bd35c8c1d917?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80" alt="" />

                {/* <!-- photo by Isaac Mehegan --> */}

    <p>Sun Showers!</p>
  </div>
</div> 

{/* <!-- footer + newsletter ++++++++++++++++++++++++++++ --> */}


<div className="p-10 bg-yellow-900 text-yellow-400 flex justify-between">
{/* <!-- left --> */}
  <div className="md:w-1/2">
  
    <h3 className="text-lg mb-2">Join the Newsletter</h3>
    <form className="flex">
        <input type="email" className="w-full rounded-l py-3 px-4 outline-none focus:bg-yellow-200" />
    <button className="bg-red-300 hover:bg-red-400 text-red-800 rounded-r px-4">Join</button>
    </form>
  </div>
                       {/* <!-- right --> */}

<div className="flex items-center">
Copyright &copy; Here luul hersy 2021                       
                       </div>
</div>
    </div>

)
