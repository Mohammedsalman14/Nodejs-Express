function username(callback){
    let name="mohammed salman";
    // calling the function... back
    callback(name);
}
function display(data){
    console.log(data);
}
username(display)