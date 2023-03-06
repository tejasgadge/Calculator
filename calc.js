let buttons=document.getElementsByClassName('box');
let inputField=document.getElementById('input-field')

// adding  event listner on each button 
for(let i=0;i<buttons.length;i++)
{
    try {
    buttons[i].addEventListener('click',(Event)=>
    {
        let input="";
        switch(Event.target.innerHTML)
        {
            case 'C':
                {
                    input="";
                    break;
                }

            case "=":
                {
                    input=eval(inputField.value);
                    break;
                }
            
            case "←" :
                {
                    input=inputField.value.slice(0,inputField.value.length-1);
                    break;
                }

            default :
                {
                    input=`${inputField.value}${Event.target.innerHTML}`;

                }
        }
        inputField.value=input;


    })} catch(error)
    {
         input="Please Enter Valid Input"
         inputField.value=input       
    }
    
}

