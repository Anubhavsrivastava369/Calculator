const buttons = document.querySelectorAll('button');
const input = document.querySelector('input');

let string = '';
const arr = Array.from(buttons);

arr.forEach((button) => {
   button.addEventListener('click' , (e)=>{  
        if(e.target.innerHTML === "="){
            try{
                string = String(eval(string));
                input.value = string;
            }
            catch{
                input.value = "ERROR";
                string='';
            }      
        }
        else if(e.target.innerHTML === "DEL"){
            string = string.substring(0,(string.length-1));
            input.value = string;
        }
        else if(e.target.innerHTML === "AC"){
            string = '';
            input.value = string;
        }
        else if(e.target.innerHTML === "%"){
            if(string.length != 0){
               string = String(eval(string));
               let n = parseInt(string);
               n = n / 100;
               string = String(n);
               input.value = string;
            }
            else{
                string += e.target.innerHTML;
                input.value = string;
            }
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
   });
});