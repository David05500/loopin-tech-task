import type { NextPage } from 'next'
import useSwr from 'swr'
import { Squad, SquadProps, SquadServerData } from "../components/Squad"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Index: NextPage = () => {
  const { data, error } = useSwr<SquadServerData[]>('/api/squads', fetcher)

  if (error) return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="font-semibold text-2xl">Failed to load squads</div>
    </div>
  )

  if (!data) return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-green h-12 w-12"></div>
      </div>
    </div>
  )

  return (
      <div className="p-4 md:p-8 bg-gradient-to-t from-offWhite to-white w-screen md:h-screen flex justify-center overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-content-center max-w-[1270px] w-full">
          {data.squads.map((squad: SquadProps) => (
            <Squad
              squad={squad}
              key={squad.id}
            />
          ))}
        </div>
      </div>
    )
}

export default Index
