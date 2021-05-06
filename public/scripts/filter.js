
class Filter{
    
    constructor(data){
        this.data=data;
        this.render();
    }

    async render(){  
        let template = document.getElementById('plantilla').innerHTML;
        let compile = Handlebars.compile(template);
        let contentHTML = compile(this.data); 
        document.getElementById('content').innerHTML += contentHTML;
    }    
}

const inicializar=async ()=>{
    const data = await fetch('../products.json')
    .then(response=>response.json()); 
    window.filtro = new Filter(data);   
};

inicializar();