const {products}=require("../data/Data.js");
const finding__=products.find((product)=>{
    console.log(product);
})
finding__;
const mapping__=products.map((product)=>{
    if(product.id==2){
        return product;
    }
})
console.log(mapping__);