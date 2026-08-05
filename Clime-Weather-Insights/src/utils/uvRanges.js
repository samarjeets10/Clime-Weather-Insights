
export const uvRanges = {
  Low: { min: 0, max: 3 },
  Moderate: { min: 3, max: 6 },
  High: { min: 6, max: 8 },
  "Very High": { min: 8, max: 11 },
  Extreme: { min: 11, max: null },
};

export function getUvLevel(value) {
  for (const [level, range] of Object.entries(uvRanges)) {
    if (value >= range.min && (range.max === null || value < range.max)) {
      return level;
    }
  }
  return null;
}

export function getUvColor(level) {
  switch (level) {
    case "Low": return "bg-green-500";
    case "Moderate": return "bg-yellow-500";
    case "High": return "bg-orange-500";
    case "Very High": return "bg-red-500";
    case "Extreme": return "bg-purple-500";
    default: return "bg-zinc-500";
  }
}