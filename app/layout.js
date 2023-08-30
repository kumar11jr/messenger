// import './globals.css'
import { Inter } from 'next/font/google'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth,db } from '../firebase'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Whatsapp 2.0',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  
  const [user] = useAuthState(auth);

  if (!user) return <Login />; 
  
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
