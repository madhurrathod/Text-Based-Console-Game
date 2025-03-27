import bgm from '../Assets/Music/gamebgm.mp3'
import {useState,useRef, useEffect} from 'react'

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
        <h1>Let the Game Begin</h1>
        <button style = {{"margin-left":"2vw","padding":"20px 50px"}} onClick={toggle}>{!isPlaying ? "Play":"Pause"}</button>     
    </>
)}
