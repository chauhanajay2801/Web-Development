//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let countries = [
	"Afghanistan","Algeria","Antarctica","Andorra", "Albania","American Samoa","Angola","Anguilla",]
    let se = prompt("Enter the country to search"); 
    let a = countries.includes(se);
    if (a==false){
        countries.push(se)
        alert("The contry did not exist so its now being pushed");
        alert(countries);
    }
    else{
        alert("The country exists")
    }