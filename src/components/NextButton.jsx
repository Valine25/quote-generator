
export default function NextButton({length,index,setIndex }){
    function handleNext() {
    let random;
    do{
    random=Math.floor(Math.random()*length);
    }while(random===index);
    setIndex(random);
    
  }
    return <div className={styles.Button}>
        <button className={styles.nextBt} onClick={handleNext}>New Quote</button>
    </div>;
}