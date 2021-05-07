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

    filter(btn){
        let cards = (this.data.products);
        cards.forEach(beer => {
            if(ids.length==0){
                console.log("");
                document.getElementById(`${beer.name}`).classList.remove('filtered');
            }else{
                if(!ids.includes(beer.filterId.toString())){
                    document.getElementById(`${beer.name}`).classList.toggle('filtered');
                }
            }
            
        });
           /* ids.forEach(item=>{
                console.log(item);
                if(beer.filterId != item){
                    document.getElementById(`${beer.name}`).classList.toggle('filtered');
                }
            });*/
        
    
    }

    handleChange(check){
        
        if(check.checked){
            ids.push(check.value);
            console.log(ids)
        }else if(!check.checked){
         let i = ids.indexOf(check.value);
         if(i!= -1){
             ids.splice(i,1);
             console.log(ids)
         }   
        }
        
        /*let cards = (this.data.products);
        console.log(check);
        
        if(check.checked == true){
            cards.map(beer=>{
                if(beer.filterId != check.value){
                    let tag =document.getElementById(`${beer.name}`);
                    tag.classList.toggle('filtered');
                    console.log(check.value);
                }
            })
        }*/
    }
        
        
}

const inicializar=async ()=>{
    const data = await fetch('../products.json')
    .then(response=>response.json());
    //console.log(data); 
    window.filtro = new Filter(data);   
};

inicializar();