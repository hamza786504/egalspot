import React from 'react'

export default function index() {
    return (
        <>



<form class="max-w-md mx-auto space-y-4 font-[sans-serif] text-[#333] mt-4">
      <input type="email" placeholder="Enter Email"
        class="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm outline-[#333] rounded-sm transition-all" />

      <input type="password" placeholder="Enter Password"
        class="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm outline-[#333] rounded-sm transition-all" />

      <div class="flex">
        <input type="checkbox" class="w-4" />
        <label class="text-sm ml-4">Remember me</label>
      </div>

      <button type="button" class="!mt-8 px-6 py-2.5 text-sm bg-[#333] hover:bg-[#222] text-white rounded-sm">Submit</button>
    </form>


            
        </>
    )
}
