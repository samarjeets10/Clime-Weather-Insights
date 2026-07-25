import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function MapTypeDropdown({ mapType, setMapType }) {

    const type = [
        "clouds_new",
        "precipitation_new",
        "pressure_new",
        "wind_new",
        "temp_new",
    ];

  return (
    <Select value={mapType} onValueChange={(value) => setMapType(value)} >
    <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
    </SelectTrigger>
    <SelectContent className="z-[1000]">
        <SelectGroup>
            {
                type.map((type) => (
                    <SelectItem 
                    className="capitalize"
                    key={type} 
                    value={type}>
                        {type.split("_")[0]}
                    </SelectItem>
                ))
            }
        </SelectGroup>
    </SelectContent>
    </Select>
  )
}

export default MapTypeDropdown