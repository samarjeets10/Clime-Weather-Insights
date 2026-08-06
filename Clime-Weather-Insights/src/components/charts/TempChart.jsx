import { useSuspenseQuery } from '@tanstack/react-query';
import Card from '../cards/Card'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getWeather } from '@/api';

function TempChart({ coords }) {

    const { data } = useSuspenseQuery({
        queryKey: ['weather', coords.lst, coords.lon],
        queryFn: () => getWeather(coords)
    })

    const hourly = data?.hourly;
    const chartData = hourly?.time?.slice(0, 24).map((time, i) => ({
        time: new Date(time).toLocaleTimeString(undefined, {
            hour: 'numeric',
            hour12: true
        }),
        temp: Math.round(hourly.temperature_2m[i]),
        feelsLike: Math.round(hourly.apparent_temperature[i])
    })) ?? [];

  return (
    <Card title="Temprature Trend (24h)" childrenClassName='h-64'>
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
            <defs>
                <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.5} />
                <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0} />
                </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="time" tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }} interval={2} />
            <YAxis tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }} unit="°" />
            <Tooltip contentStyle={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 8 }} />
            <Area type="monotone" dataKey="temp" stroke="var(--chart-1)" fill="url(#tempGradient)" name="Temp °C" />
            <Area type="monotone" dataKey="feelsLike" stroke="var(--chart-2)" fill="transparent" name="Feels Like °C" />
            </AreaChart>
        </ResponsiveContainer>
    </Card>
  )
}

export default TempChart