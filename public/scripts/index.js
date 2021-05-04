let data;

const renderInicial=async()=>{
     data = await fetch('../products.json')
    .then(response=>response.json())
    let template = document.getElementById('plantilla1').innerHTML;
    let compile = Handlebars.compile(template);
    let contentHTML = compile(data); 
    document.getElementById('content').innerHTML += contentHTML;   

};
 renderInicial();