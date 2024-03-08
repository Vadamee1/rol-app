export default async function ProfileLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <div className="p-5">
        {children}
      </div>
    </>
  )
}

