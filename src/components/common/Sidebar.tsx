import { BriefcaseIcon, CubeIcon, DocumentTextIcon, HomeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const Sidebar = () => {
    return (
        <div className='ml-3  flex flex-col space-y-20 mt-20'>
            <button>
                <Link href={"/"}>
                    <HomeIcon className="h-8 w-8 text-green-300" />
                </Link>
            </button>
            <button>
                <Link href={"/product"}>
                    <CubeIcon className="h-8 w-8 text-green-300" />
                </Link>
            </button>
            <button>
                <Link href={"/career"}>
                    <BriefcaseIcon className="h-8 w-8 text-green-300" />
                </Link>
            </button>
            <button>
                <Link href={"/posts"}>
                    <DocumentTextIcon className="h-8 w-8 text-green-300" />
                </Link>
            </button>
        </div>
    )
}
export default Sidebar