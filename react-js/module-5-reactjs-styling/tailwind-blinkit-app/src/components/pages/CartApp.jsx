import React from 'react'

export default function CartApp() {
  return (
    

      <>
  {/* cart  modal */}
  <el-dialog>
    <dialog
      id="dialog1"
      aria-labelledby="dialog-title"
      className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent top-0   mt-5"
    >
      <el-dialog-backdrop className="fixed inset-0 bg-gray-300 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />
      <div
        tabIndex={0}
        className="w-100 mx-auto mt-25 rounded-2xl min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0"
      >
        <el-dialog-panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start p-10">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  id="dialog-title"
                  className="font-semibold text-gray-900 text-4xl"
                >
                  Cart Items
                </h3>
                <div className="mt-2">
                  <p className="text-gray-500">Your cart is currently empty.</p>
                  {/* add button go to home */}
                  <div className="mt-4">
                    {/* create a login button */}
                    <button
                      command="show-modal"
                      commandfor="dialog"
                      className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 w-full"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <a
                href="index.html"
                className="inline-block bg-red-600 text-white px-4 py-2 rounded-full hover:bg-green-700"
              >
                Go to Home
              </a>
            </div>
          </div>
        </el-dialog-panel>
      </div>
    </dialog>
  </el-dialog>
</>
  
    
  )
}
