import '@/styles/globals.css'
import RootProvider from './client/RootProvider'


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <RootProvider>
                    <div className="ml-0 lg:ml-230px transition-all" style={{ maxWidth: "1400px" }}>
                        {children}
                        <div className='h-28 lg:hidden'></div>
                    </div>
                </RootProvider>
            </body>
        </html>
    )
}

