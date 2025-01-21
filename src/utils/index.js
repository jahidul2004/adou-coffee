//Get all coffees from a local storage
const getAllFavorites = () =>{
    let all = localStorage.getItem('favorites');
    if(all){
        const favorites = JSON.parse(all);
        return favorites;
    }else{
        return [];
    }
}
// Add a coffee to a local storage
const getCoffees = (coffee) => {
    console.log(coffee);
    let favorites = getAllFavorites();
    favorites.push(coffee);
    localStorage.setItem('favorites',JSON.stringify(favorites))
}
// Remove a coffee from a local storage

export { getCoffees };