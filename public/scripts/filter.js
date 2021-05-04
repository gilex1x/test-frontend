class Filter{
    constructor(ObjectList){
        this.ObjectList=ObjectList;
    }

    filter(id){
        let filteredBeer=[];
        this.ObjectList.products.forEach(beer => {
            if(beer.filterId == id){
                filteredBeer.push(beer);
            }
        });
    }
    
}