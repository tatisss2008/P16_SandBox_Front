

class FormEngine{

    async render(){

       const res=await fetch('http://localhost:3000/formulario/Paciente')
        
        const form =await res.json()         
        //console.log(form)

        const formHTML= document.createElement  ("form")

        formHTML.classList.add("container")

        for(const [key,value] of Object.entries(form.properties)){
            //console.log(key,value)
            const label=document.createElement('label')
            label.innerText=key
            formHTML.appendChild(label)

            const input=document.createElement('input')
            input.name=key
            input.classList.add("form-control")

            if (value.type=='integer'){
                input.type="number"
            }else{
                input.type="text"
            }
            
            formHTML.appendChild(input)
        }

        document.body.appendChild(formHTML)

    }
}

const miFormEngine=new FormEngine()
miFormEngine.render()   

