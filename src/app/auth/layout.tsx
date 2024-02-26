
export default function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        {children}
      </div>
    </>
  )
}