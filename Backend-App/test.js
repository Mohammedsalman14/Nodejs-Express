const UserArray = ['salman@gmail.com', 'mohammedsalman@gmail.com', 'mdsalman@gmail.com'];
const user='salman@gmail.com'
function validname() {
    UserArray.find((name) => {
        if (name == user) {
            console.log(name);
        }
    }
)}
validname('salman@gmail.com')

