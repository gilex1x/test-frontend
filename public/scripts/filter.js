
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
        let cards = (this.data.products);
        console.log(cards);
        if(check.checked == true){
            cards.map(beer=>{
                console.log(beer);
            })
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