import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

const Header = () => {

    return (
        <div className="bg-green-300 h-20 m-3 rounded-md
        flex justify-between place-items-center">

            <h2 className='text-white ml-10 text-xl'>KAZUKI OSHIMA</h2>
            <button className="hover:bg-green-200 rounded-full mr-3">
                <SunIcon className='text-white w-9 h-9 m-1 ' />
            </button>
        </div>
    )
}
export default Header