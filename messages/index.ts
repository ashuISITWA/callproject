import en from "./en.json";
import fr from "./fr.json";
import de from "./de.json";
import es from "./es.json";
import ar from "./ar.json";
import hi from "./hi.json";
import it from "./it.json";
import ru from "./ru.json";
import zh from "./zh.json";
import tr from "./tr.json";
import nl from "./nl.json";

const messagesMap = {
  en,
  fr,
  de,
  es,
  ar,
  hi,
  it,
  ru,
  zh,
  tr,
  nl
};

export default messagesMap;

// optional: type
export type AppLocale = keyof typeof messagesMap;
