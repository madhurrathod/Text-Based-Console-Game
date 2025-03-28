
// const music = new Audio('../Assets/Music/gamebgm.mp3')
// music.play()

export default function textBased(){
    console.log("Enter Your Name");
    
    setTimeout(()=>{
        let name = prompt("Input Your Name");
        console.log(`Hello ${name}, welcome to textBased game.`)

        setTimeout(()=>{
           let place = prompt("Where do you want to go ? (any place of your choice)")
           let pronoun = prompt("what you want to be refered as ?(he/she)")
           let b = prompt("what do you want to do at that place ? (play/eat/dance/study)")
           let c = prompt("what you'll learn their ?")

           setTimeout(()=>{console.log(`${name} wants to go to ${place},`)
            setTimeout(()=>{console.log(`${name} says: ${b} is the activity that ${pronoun} wants to do.`)
             setTimeout(()=>{console.log(`${pronoun} will learn ${c} from their.`)
                setTimeout(()=>{console.log(`let's say you got a chance to go to ${place}`)
                    setTimeout(()=>{console.log("Let's play our game now,\nchoose 1 door from the three.")
                        setTimeout(()=>{let ans = prompt("choose a door(1/2/3)")
                            if(ans<1 || ans>3){
                                console.error("Aeeee, number our of range")}
                            else{
                                console.log("Do you know where this door leads to ?")
                                setTimeout(()=>{
                                    let temp = prompt("Any Guess ?")
                                    setTimeout(()=>{
                                        if(ans==1){console.log(`Correct! You've chosen path to success! Now go to ${temp}`)}
                                        else if(ans==2){console.log(`Door 1 goes to ${temp}`)}
                                        else if(ans==3){console.log(`This is the path to JS internship`)}
                                        setTimeout(()=>{
                                            let project = prompt("Have you made your js project? yes/no")
                                                setTimeout(()=>{
                                                    if(project=="yes" || project=="YES"||project=="Yes"){console.log("Nice work mate! THE END!")}
                                                    else if(project=="No"||project=="no")
                                                    {
                                                        console.log("You've the potential but wasting your time, \nnow close this project and start building yours.")
                                                        setTimeout(()=>{console.log("Hmm, still haven't started huh!")
                                                            setTimeout(()=>{console.log("Hey! do your project or I'll stop the music !")
                                                                setTimeout(()=>{console.log("Don't underestimate me!")
                                                                    setTimeout(()=>{console.log("I'll do it!")
                                                                        setTimeout(()=>{console.log("Fine I'm doing in")
                                                                            setTimeout(()=>{console.log("3")
                                                                                setTimeout(()=>{console.log("2")
                                                                                    setTimeout(()=>{console.log("1")
                                                                                        setTimeout(()=>{
                                                                                            console.log("ufff, I can't stop music")
                                                                                            setTimeout(()=>{
                                                                                                console.log("But I can play more songs")
                                                                                                setInterval(()=>{
                                                                                                    console.log("I'll ruin your experience")
                                                                                                    const music = new Audio('../Assets/Music/gamebgm.mp3')
                                                                                                    music.play()
                                                                                       
                                                                                                    },5000)
                                                                                            },2000)
                                                                                        },2000)
                                                                                    },1000)
                                                                                },1000)
                                                                            },1000)
                                                                        },1500)
                                                                    },1500)
                                                                },2000)
                                                            },2000)                                                                                                        
                                                        },4000)                    
                                                    }
                                                },1000)
                                        },100)
                                    },2000)
                                },2000)
                            }
                        },1000)
                    },2000)
                },2000)
             },2000)
            },2000)
           },2000)  
        },2000)
    },1000)

    // console.log("In this game you have to say something.")
    
    // prompt("")
}

