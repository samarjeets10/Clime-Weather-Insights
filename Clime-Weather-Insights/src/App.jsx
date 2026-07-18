import { useQuery } from '@tanstack/react-query'
import { getWeather } from './api'

function App() {

  const {data} = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({lat: 50, lon: 50})
  })


  return (
    <> 
      <h1 className='text-5xl font-bold'>Clime-Weather-Insights</h1>

      <p>{JSON.stringify(data)}</p>
    </>
  )
}

export default App