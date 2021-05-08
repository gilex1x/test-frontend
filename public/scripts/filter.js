let ids=[];

class Filter{
    
    constructor(data){
        this.data=data;
        this.render(this.data);
    }

    async render(){  
         let template = document.getElementById('plantilla').innerHTML;
         let compile = Handlebars.compile(template);
         let contentHTML = compile(this.data); 
        document.getElementById('content').innerHTML += contentHTML;
    }

    handleChange(check){
        
        if(check.checked){
            ids.push(check.value);
            //console.log(ids)
        }else if(!check.checked){
         let i = ids.indexOf(check.value);
         if(i!= -1){
             ids.splice(i,1);
             //console.log(ids)
         }   
        }

    }
    filter(){
        let cards = (this.data.products);
        cards.forEach(beer => {
            if(ids.length==0){
                
                document.getElementById(`${beer.name}`).classList.remove('filtered');
            }else{
                document.getElementById(`${beer.name}`).classList.remove('filtered'); 
                if(!ids.includes(beer.filterId.toString())){//se conviuerte en to string por que es un
                    document.getElementById(`${beer.name}`).classList.toggle('filtered');
                }
            }
            
        });


    
    }
    cleanFilter(){
        for(let i=1; i<4 ;i++){
            if(document.getElementById(`${i}`).checked){
                document.getElementById(`${i}`).click();
            }
        }
    }


        
        
}

const inicializar=async ()=>{
    const data = await fetch('../products.json')
    .then(response=>response.json());
    //console.log(data); 
    window.filtro = new Filter(data);   
};

inicializar();