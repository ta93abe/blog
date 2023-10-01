import { Fuggles } from "next/font/google";
import { styles } from "./Title.css";
import Link from "next/link";

const fuggles = Fuggles({weight: "400", subsets: ["latin"]});

export function Title(){
  return <Link href="/" className={`${fuggles.className} ${styles.title}`}>tech blog by ta93abe</Link>
}
