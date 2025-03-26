import bgm from '../Assets/Music/gamebgm.mp3'
import {useState,useRef, useEffect} from 'react'

function PlayMusic(){
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
        }SetisPlaying(!isPlaying)
    }
    return(
    <>
        <h1>Music Player</h1>
        <button onClick={toggle}>{!isPlaying ? "Play":"Pause"}</button>     
    </>
)}

export default PlayMusic;