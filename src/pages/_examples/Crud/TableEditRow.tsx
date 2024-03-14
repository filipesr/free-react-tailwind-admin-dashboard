import SelectGroupOne from '@/components/Forms/SelectGroup/SelectGroupOne'
import { Product } from '@/types/product'
import { BsCloudUpload, BsX } from 'react-icons/bs'

interface TableEditRowProps {
  product: Product
  show: boolean
  setConfirm: (value: boolean) => void
}
const TableEditRow = ({
  product: { id, image, name, category, price, sold, profit },
  show = false,
  setConfirm
}: TableEditRowProps) => {
  const hide = () => {
    setConfirm(false)
  }
  return (
    <div
      className={`flex items-center justify-center w-full h-full bg-boxdark bg-opacity-95 top-0 left-0 absolute  ${!show ? 'opacity-0 z-[-10]' : 'opacity-100 z-999'} transition-all duration-500 ease-in-out`}
    >
      {/* {divCancel()} */}
      <div className="w-fit flex-col ">
        {/* {divCancel()} */}
        <div className={` rounded-sm border border-stroke bg-black `}>
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark relative">
            <h3 className="font-medium text-black dark:text-white">
              Contact Form
            </h3>
            <div
              className="absolute right-4 top-2 rounded border hover:bg-red-600 cursor-pointer transition-all"
              onClick={hide}
            >
              <BsX size={24} />
            </div>
          </div>
          <form action="#">
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row ">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-noney"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Email <span className="text-meta-1">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Select subject"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <SelectGroupOne />

              <div className="mb-6">
                <label className="mb-2.5 block text-black dark:text-white">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Type your message"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                ></textarea>
              </div>

              <div className="flex w-full justify-end gap-4">
                <button
                  onClick={hide}
                  className=" rounded bg-primary p-3  w-1/2  xl:w-1/4 font-medium text-gray hover:bg-opacity-90"
                >
                  Cancela
                </button>
                <button className=" rounded bg-success p-3  w-1/2  xl:w-1/4 font-medium text-gray hover:bg-opacity-90 flex items-center gap-2 justify-center">
                  <BsCloudUpload />
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* {divCancel()} */}
      </div>
      {/* {divCancel()} */}
    </div>
  )
}

export default TableEditRow
