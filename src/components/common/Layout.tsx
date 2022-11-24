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
                <div className='hidden lg:inline-block'>
                    <Sidebar />
                </div>
                {children}
            </div>
            <div className='lg:hidden fixed bottom-0 inset-x-0'>
                <FooterNavi />
            </div>
        </>
    )
}
export default Layout