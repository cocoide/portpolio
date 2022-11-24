import Link from 'next/link'
import { BriefcaseIcon, CubeIcon, DocumentTextIcon, HomeIcon } from '@heroicons/react/24/outline'

const FooterNavi = () => {
    return (
        <>
            <div className="h-14 bg-white border-t-2">

                <div className="gap-10 flex flex-row justify-center p-2 content-center">
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


            </div>
        </>
    )
}
export default FooterNavi