import { useState } from "react";
import NextButton from "./NextButton";



export default function Quote() {
  const quotes = [
    { text: "Be patient good things take time", author: "~Unknown" },
    { text: "Do not fear failure but rather fear not trying", author: "~Roy T Bennett" },
    { text: "Do your thing and don't care if they like it", author: "~Tina Fey" },
    { text: "Just keep swimming, just keep swimming", author: "~Dory" },
    { text: "You are enough just as you are", author: "~Meghan Markle" },
    { text: "You only live once, but if you do it right, once is enough", author: "~Mae West" },
    { text: "If you tell the truth, you don't have to remember anything", author: "~Mark Twain" },
    { text: "Life is a book you write, not a movie you watch", author: "~Maxime Lagacé" },
    
  ];
  let [index, setIndex] = useState(0);

  return (
    <div className={styles.container}>
      <h3 className={styles.quoteText}>{quotes[index].text}</h3>
      <h5 className={styles.authorText}>{quotes[index].author}</h5>
      <NextButton length={quotes.length} index={index} setIndex={setIndex} />
    </div>
  );
}
