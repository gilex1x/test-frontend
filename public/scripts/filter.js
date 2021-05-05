 
class Filter{
    constructor(){
        this.renderInicial();
    }

    async getData (){
        const data = await fetch('../products.json')
        .then(response=>response.json());
        return data;
    }

    async renderInicial(){
        
        let template = document.getElementById('plantilla').innerHTML;
        let compile = Handlebars.compile(template);
        let contentHTML = compile(this.getData()); 
        document.getElementById('content').innerHTML += contentHTML;
    }    
}

const inicializar=()=>{
    window.filtro = new Filter();
    
};

inicializar();

