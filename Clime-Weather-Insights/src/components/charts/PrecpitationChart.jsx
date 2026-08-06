import { getWeather } from '@/api'
import { useSuspenseQuery } from '@tanstack/react-query'
import Card from '../cards/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

function PrecpitationChart({ coords }) {

    const { data } = useSuspenseQuery({
        queryKey: ['weather', coords.lat, coords.lon],
        queryFn: () => getWeather(coords)
    });

    const hourly = data?.hourly;
    const chartData = hourly?.time?.slice(0, 24).map((time, i) => ({
        time: new Date(time).toLocaleTimeString(undefined, {
            hour: 'numeric',
            hour12: true
        }),
        chance: hourly.precipitation_probability[i],
    })) ?? [];

  return (
    <Card title="Precipitation Probability (24h)" childrenClassName="h-64">
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="time" tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }} interval={2} />
                <YAxis tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }} unit="%" domain={[0, 100]} />
                <Tooltip contentStyle={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 8 }} />
                <Bar dataKey="chance" fill="var(--chart-3)" radius={[4, 4, 0, 0]} name="Rain Chance %" />
            </BarChart>
        </ResponsiveContainer>
    </Card>
  )
}

export default PrecpitationChart