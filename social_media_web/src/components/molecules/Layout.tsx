import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../nextui/navbar'
import { Button } from '@nextui-org/button'
import { signOut } from 'firebase/auth'
import { auth } from '../../lib/firebase'

function Layout() {
        const navigate = useNavigate();
        async function logout(){
        signOut(auth).then (()=>{
            navigate('/login')
        })
    } 

    return (
        <div>
        <Button className='fixed z-50 top-4 right-4' color='secondary' onClick={logout}>Logout</Button>
        <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default Layout
