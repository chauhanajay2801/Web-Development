// const {hello,helloAd }= require("./module1");
// hello()
// helloAd("Jameson")
// helloAd("Jam")

//Es6 modules

export const hello = () =>{
    console.log("Hey brother")
}

export const helloThere = (name) =>{
    console.log("Hey brother",name)
}
const hel = () =>{
    console.log("Hey this is the default parameter")
}

export default hel