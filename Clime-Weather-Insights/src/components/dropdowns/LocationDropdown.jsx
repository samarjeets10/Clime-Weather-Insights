import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function LocationDropdown() {

    const Locations = [
        "New York",
        "London",
        "Paris",
        "Tokyo",
        "Dubai",
        "Singapore",
        "Sydney",
        "Bangkok",
        "Mumbai",
        "Delhi",
        "Toronto",
        "Seoul"
    ];


  return (
    <Select>
    <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
    </SelectTrigger>
    <SelectContent className="z-[1000]">
        <SelectGroup>
            {
                Locations.map((city) => (
                    <SelectItem key={city} value={city}>
                        {city}
                    </SelectItem>
                ))
            }
        </SelectGroup>
    </SelectContent>
    </Select>
  )
}

export default LocationDropdown