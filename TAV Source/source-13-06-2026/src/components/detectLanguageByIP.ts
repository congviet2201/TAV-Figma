import { LangCode } from "./LanguageContext";

export async function detectLanguageByIP(): Promise<LangCode> {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    const country = data.country;

    if (country === "JP") return "ja";
    if (country === "US" || country === "GB") return "en";
    return "vi";
  } catch (error) {
    console.error("Failed to detect language", error);
    return "en";
  }
}
