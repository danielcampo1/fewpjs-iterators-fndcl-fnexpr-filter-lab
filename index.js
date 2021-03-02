// // Code your solution here
// function findMatching(drivers,strings)
//     return marching list of drivers, and is case insensitve


//     function fuzzyMatch(drivers,string)
//     return all drivers whose name begins with a a letter

//     function matchName(drivers,string)
//     drivers is JS obj(name)
//     return each name that matches string

function findMatching(drivers, string){
    return drivers.filter(driver =>
        driver.toLowerCase() === string.toLowerCase()
    )}

    function fuzzyMatch(drivers, string) {
        return drivers.filter( driver => 
            driver.toLowerCase().indexOf(string.toLowerCase()) === 0 )
        }

        function matchName(drivers, string) {
            return drivers.filter( driver => 
                driver.name === string
            )
        }