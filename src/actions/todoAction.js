export function add(value){
    let values = localStorage.getItem('items');

    if(values !== null) 
        values = JSON.parse(values);
    else
        values = [];

    values.push({name: value});

    localStorage.setItem('items', JSON.stringify(values));

    return {
        type: "SET_TODO",
        payload: {name: value}
    };

}

export function remove(value){
        let values = localStorage.getItem('items');

        if(values !== null) 
            values = JSON.parse(values);
        else
            values = [];

        values = values.filter((element) => element.name !== value );
        
        localStorage.setItem("items", JSON.stringify(values));

        return {
            type: "REMOVE_TODO",
            payload: {name: value}
        };
}  

export function update(value, newName){
    let values = localStorage.getItem('items');

    if(values !== null) 
            values = JSON.parse(values);
    else
        values = [];

    values = values.map( element => {
                if(element.name === value)
                    element.name = newName;

                return element;
            });

    localStorage.setItem("items", JSON.stringify(values));
    
    return {
        type: "UPDATE_TODO",
        payload: {name: value, newName}
    }; 
}

export function getAll(){
    let values = localStorage.getItem('items');

    if(values !== null) 
        values = JSON.parse(values);
    else
        values = [];

    return {
        type: "SET_ALL",
        payload: values
    };
}