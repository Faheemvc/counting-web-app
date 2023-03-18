        let countEl = document.getElementById("counter")
        let count = 0
            function increment(){
                count += 1
                countEl.innerHTML = count
//                 navigator.vibrate(500)
                // document.getElementById("counter").innerHTML = count
            }

    
       function save(){

            let prev = document.getElementById("entPrev").innerText
            console.log(prev + count)

            prev = prev +" - " + count
            
            document.getElementById("entPrev").innerText = prev
            countEl.innerText= 0
            count = 0
            document.getElementById("saveBtn").style.color = "#saveBtn"
//              navigator.vibrate([200,300,400])
           
       }

       function reset(){
        document.getElementById("entPrev").innerText = "previous entries are : "
         navigator.vibrate(200)

       }
