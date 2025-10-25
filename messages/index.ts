import en from "./en.json";
import fr from "./fr.json";
import de from "./de.json";
import es from "./es.json";

const messagesMap = {
  en,
  fr,
  de,
  es,
};

export default messagesMap;

// optional: type
export type AppLocale = keyof typeof messagesMap;
