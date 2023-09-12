import {Routes, Route} from 'react-router-dom'
import {Layout} from "@/components/Layout";
import {Login} from '@/components/Page/Login/Login'
import {Todolists} from "@/components/Page/Todolists/Todolists";

export function App() {


    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Todolists/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                </Route>
            </Routes>
        </div>
    );
}
