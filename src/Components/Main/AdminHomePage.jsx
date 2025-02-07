import AdminSideBar from './AdminSidebar'
import { Routes,Route } from 'react-router-dom'
import '../../Styles/AdminHomePage.css'
import Header from './Header'
import AdminDashBoard from './AdminDashBoard'
import AddBus from './AddBus'

const AdminHomePage = () =>{
    return (
        <div className="AdminHomePage">
            <Header/>
            <section>
                <aside className='side_content'>
                    <AdminSideBar/>
                </aside>
                <aside className='content'>
                    <Routes>
                        <Route path='/dashboard' element={<AdminDashBoard/>}/>
                        <Route path='/addbus' element={<AddBus/>}/>
                    </Routes>
                </aside>
            </section>
        </div>
    )
}

export default AdminHomePage