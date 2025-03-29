import bgm from '../Assets/Music/gamebgm.mp3'
import {useState,useRef, useEffect} from 'react'
import textBased from './game';


export default function PlayMusic(){
    const [isPlaying,SetisPlaying] = useState(false);
    const song = useRef(null)

    useEffect(()=>{
        song.current = new Audio(bgm);
        song.current.loop = true;
    },[])

    const toggle = ()=>{
        if(!isPlaying){
            song.current.play();
            
        }else{
            song.current.pause();
        }
        SetisPlaying(!isPlaying)
    }
    return(
    <>
        <h1 style={{marginLeft:"5vw", marginTop: "35vh"}}>Let the Game Begin</h1>
        <button style = {{marginLeft: "3vw", padding: "20px 50px", backgroundImage: "conic-gradient(lightgreen,lightblue,green)",
        border: "5px solid rgb(109, 180, 81)","border-radius":"20px"}} 
        onClick={()=>{toggle()}} >
        {!isPlaying ? "Play Music":"Pause Music"} 
            </button>     
        
        <button style={{marginLeft: "1vw", padding: "20px 50px", backgroundImage: "conic-gradient(pink,lightblue,yellow)",
        border: "5px solid pink","border-radius":"20px"}} 
        onClick={textBased}>
        Let's Play
        </button>

    </>
)}
