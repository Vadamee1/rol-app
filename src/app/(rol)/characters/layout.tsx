export default async function CharactersLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <div className="flex p-5">
        {children}
      </div>
    </>
  )
}

