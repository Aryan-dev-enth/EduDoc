import './globals.css'
import { Poppins, Potta_One } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-poppins',
})
const potta_one = Potta_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-potta-one',
})


export const metadata = {
  title: 'EduDoc',
  description: 'A platform for students by the students',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${potta_one.variable}`}>{children}</body>
    </html>
  )
}
