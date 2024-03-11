export default async function CharactersLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <div className="p-5">
        {children}
      </div>
    </>
  )
}

