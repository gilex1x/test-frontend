
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
    
    easyFilter(id){
        let newData  =[];
        for(const beer in this.data.products){
            newData.push([beer,this.data.products[beer]])
        }
        console.log(newData);
    }
}

const inicializar=async ()=>{
    const data = await fetch('../products.json')
    .then(response=>response.json());
    console.log(data); 
    window.filtro = new Filter(data);   
};

inicializar();