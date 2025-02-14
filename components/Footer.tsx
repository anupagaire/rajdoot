import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full'>
        <div className='w-full max-w-screen-lg mx-auto'>
            <div>
                <Image src="/rajdootlogo.png" height={200} width={200} alt='logo' />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, itaque repellendus. Quasi enim vel ipsam accusamus dicta excepturi, possimus officia doloribus dignissimos reprehenderit iste molestiae inventore voluptatum, deleniti recusandae pariatur.</p>
            </div>
        </div>

    </footer>
  )
}

export default Footer