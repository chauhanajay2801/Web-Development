function a(){
    var x = 0
    var y = 1
    return function b(){
        console.log(x)
    }
}

var ty = a();
ty();