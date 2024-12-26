import { ReactNode } from 'react';
import Navbar from '../component/Navbar';

const layout = ({children}: {children: ReactNode}) => {
  return (
    <main>
        <Navbar/>
        {children}
    </main>
  )
}

export default layout
