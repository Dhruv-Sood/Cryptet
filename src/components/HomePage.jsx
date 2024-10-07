import { Github } from 'lucide-react'
const HomePage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">A fully web powered wallet</h1>
        <div className="flex justify-center mt-4">
          <button className="bg-primary text-white px-4 py-2 rounded-md mr-4">Generate Wallet</button>
          <button className='bg-primary text-white px-4 py-2 rounded-md mr-4 flex gap-2'>
            Contribute <Github/>
          </button>
        </div>
      </div>
    </div>
  )
}
export default HomePage