
const render=async()=>{
    const data = await fetch('../products.json')
    .then(response=>response.json())
    console.log(data)
    let template = document.getElementById('plantilla').innerHTML;
    let compile = Handlebars.compile(template);
    let contentHTML = compile(data); 
    document.getElementById('content').innerHTML += contentHTML;   

};
 render();