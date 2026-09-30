import React from 'react'

export default function LoginApp() {
  return (
    
    <>
  {/* login form modal */}
  <el-dialog>
    <dialog
      id="dialog"
      aria-labelledby="dialog-title"
      className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent top-0   mt-5"
    >
      <el-dialog-backdrop className="fixed inset-0 bg-gray-300 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />
      <div
        tabIndex={0}
        className="w-100 mx-auto mt-15 min-h-full rounded-2xl items-end justify-center p-10 text-center focus:outline-none sm:items-center sm:p-0"
      >
        <el-dialog-panel className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
          <div className="bg-white p-15 px-4 pt-5 pb-4 sm:p-0 sm:pb-0">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center p-10 sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  id="dialog-title"
                  className="font-semibold text-gray-900 text-4xl"
                >
                  Login Form
                </h3>
                <div className="mt-2 ">
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div>
                      <input
                        type="submit"
                        id="password"
                        className="mt-1 block w-full border border-red-500 bg-red-500 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
                        placeholder="Enter your password"
                        defaultValue="Login"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              command="close"
              commandfor="dialog"
              className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
            >
              Deactivate
            </button>
            <button
              type="button"
              command="close"
              commandfor="dialog"
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Cancel
            </button>
          </div>
        </el-dialog-panel>
      </div>
    </dialog>
  </el-dialog>
</>

  )
}
