import { Fuggles } from "next/font/google";
import { styles } from "./Title.css";

const fuggles = Fuggles({weight: "400", subsets: ["latin"]});

export function Title(){
  return <div className={`${fuggles.className} ${styles.title}`}>tech blog by ta93abe</div>
}
