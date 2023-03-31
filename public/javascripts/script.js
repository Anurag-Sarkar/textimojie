const text = document.querySelector("#textmsg")
const password = document.querySelector('#password')
const result = document.querySelector("#result")
var clutter = "";
var parinam = "";

function encryption() {

    document.querySelector("#encrypt-btn").addEventListener("click", async function() {


        // get the password

        var pass = document.getElementById("password").value;
        console.log(pass)


        // get the input

        var input = document.getElementById("textmsg").value+Math.floor(Math.random()*10000)
        console.log(input)

        //converting it into a set of emojis

        var str = input.split("")
        str.forEach(element => {
            clutter += `&#128${(element.charCodeAt())} `
            // console.log((element.charCodeAt()) * Math.floor(Math.random() * 10))
        });

        document.querySelector("#result").innerHTML = clutter
        data = {pwsd:clutter,pin:pass}
        console.log(data);
        const deta = await axios.post("/encrypt",data)
        console.log(deta);
    })
}

function decryption() {
    document.querySelector("#decrypt-btn").addEventListener("click",async function () {
        var clutter2 = ""
        var input2 = document.querySelector("#emojimsg").value
        var pwsd = document.querySelector("#finalpassword").value
        console.log(input2);
        var str2 = input2.split(" ")
        str2.forEach(element => {
            clutter2 += "&#"+element.codePointAt()+" "
        });
        const deta = await axios.post("/decrypt",{dec : clutter2})
        console.log(deta.data,pwsd);
        clutter2 = ""
        
        if(deta.data == pwsd){
            var clutter3 = ""
            str2.forEach(element => {
                clutter3 += ((String.fromCharCode( `&#${(element.codePointAt(0))} `.slice(5))))
            });
        }
        console.log(clutter3.substring(0,clutter3.length-4));
    
    
    })
    //     var clutter2 = '';
    //     var input2 = document.querySelector("#emojimsg").value
    //     var finalPass = document.querySelector("#finalpassword").value
    //     console.log(user)
    //     var str2 = input2.split(" ")
    //     str2.forEach(element => {
    //             clutter2 += `&#${(element.codePointAt(0))} `
    //             console.log(clutter2);
    //             // console.log((element.charCodeAt()) * Math.floor(Math.random() * 10))
    //     });
    //     console.log(clutter2)
    //     var found;
    //     for(let i of user){
    //         if(i.clutter == clutter2){
    //             found = i;
    //             console.log(i)
    //         }
    //     }
    //     if (found.clutter === clutter2) {
    //         console.log("jay ho")
    //         document.querySelector("#result").style.display = `block`
    //         document.querySelector("#result").style.color = `#eee`

    //         document.querySelector("#result").innerHTML = found.input
    //     } else {
    //         document.querySelector("#result").style.display = `block`
    //         document.querySelector("#result").style.color = `red`
    //         document.querySelector("#result").innerHTML = "Wrong password!"
    //     }
    // })

}


function btnClicking() {

    document.querySelector("button").addEventListener("click", function () {
        document.querySelector("#result").style.display = "block"
        // console.log(localStorage.getItem("password"))
        // console.log(localStorage.getItem("emojis"))
    })
    document.querySelector("#dec-btn").addEventListener("click", function () {
        document.querySelector("#result").style.display = "none"
        document.querySelector("#decryption").style.display = "block"
        document.querySelector("#encryption").style.display = "none"
        document.querySelector("#dec-btn").style.backgroundColor = "#333"
        document.querySelector("#enc-btn").style.backgroundColor = "#222"
        document.querySelector("#main>h1 span img").style.rotate = '270deg'
    })
    document.querySelector("#enc-btn").addEventListener("click", function () {
        document.querySelector("#decryption").style.display = "none"
        document.querySelector("#result").style.display = "none"
        document.querySelector("#encryption").style.display = "block"
        document.querySelector("#dec-btn").style.backgroundColor = "#222"
        document.querySelector("#enc-btn").style.backgroundColor = "#333"
        document.querySelector("#main>h1 span img").style.rotate = '90deg'

    })
}

encryption();

decryption()

btnClicking();



// I am competitive and I feel bad when we lose. You can see it in me when we've lost. I'm in a bad way. I don't like to talk to anyone.
