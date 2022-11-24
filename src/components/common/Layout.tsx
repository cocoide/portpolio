import { ReactElement } from 'react'
import FooterNavi from './FooterNavi'
import Header from './Header'
import Sidebar from './Sidebar'

type LayoutProps = Required<{
    readonly children: ReactElement
}>
const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <div className='flex flex-row'>
                <div className='hidden md:inline-block'>
                    <Sidebar />
                </div>
                {children}
            </div>
            <div className='md:hidden fixed bottom-0 inset-x-0 z-50'>
                <FooterNavi />
            </div>
        </>
    )
}
export default Layout