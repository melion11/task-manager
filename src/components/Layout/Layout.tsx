import { Outlet } from 'react-router-dom'
import { Header } from '../ui/Header/Header'




export const Layout = () => {


    return (
        <>
            <Header/>
            <Outlet />
        </>
    )
}