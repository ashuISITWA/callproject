import en from "./en.json";
import fr from "./fr.json";

const messagesMap = {
  en,
  fr,
};

export default messagesMap;

// optional: type
export type AppLocale = keyof typeof messagesMap;
