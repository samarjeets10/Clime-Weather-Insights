
export function FormatComponent({value, type}) {

    if (value === undefined || value === null) return '--';
        
    if (type === 'time') {
        return new Date(value).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        })
    }

    return value;
}
export function getMetricSubtext(label, value) {
    if (value === undefined || value === null) return "Data unavailable";

    switch (label) {
        case "Cloudiness (%)":
            if (value > 80) return "Heavy cloud cover overhead.";
            if (value > 40) return "Scattered clouds in the sky.";
            if (value > 10) return "Mostly clear skies with slight clouds.";
            return "Crystal clear skies right now.";

        case "UV Index":
            if (value <= 2) return "Low risk. Minimal protection needed.";
            if (value <= 5) return "Moderate risk. Wear shades at midday.";
            if (value <= 7) return "High risk! Protection is essential.";
            return "Very high risk! Avoid direct sun.";

        case "Wind Direction":
            return "Current directional vector orientation.";

        case "Pressure (hPa)":
            if (value < 1000) return "Low pressure system, stormy trends.";
            if (value > 1020) return "High pressure, stable calm weather.";
            return "Normal atmospheric pressure range.";

        case "Sunrise":
            return "Dawn incoming, early morning start.";

        case "Sunset":
            return "Dusk approaching, evening transition.";

        case "Wind Gusts (km/h)":
            if (value > 40) return "Strong sudden wind gusts detected!";
            if (value > 20) return "Moderate gust activity present.";
            return "Calm wind conditions, low gusts.";

        case "Visibility (km)":
            if (value >= 10) return "Perfectly clear view distance.";
            if (value >= 6) return "Good visibility conditions.";
            if (value >= 3) return "Haze or light mist affecting view.";
            return "Low visibility, caution required.";

        default:
            return "Live meteorological metric.";
    }
}