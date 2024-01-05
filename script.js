
let string="";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='=')
        {
           
            string= eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=='AC'){
            string=""
            document.querySelector('input').value =string;
            
        }

        else if(e.target.innerHTML=='X')
        {
            let temp=document.querySelector('input').value;
            temp = temp.replace(temp[temp.length-1],'');
            console.log('t:',temp)
            document.querySelector('input').value = temp;
            if(temp=="")
            {
                string=""
                document.querySelector('input').value = string;

            }
        }
        

        else {
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
        

    })
})