function a(){
    var aa = 1;
    b();
    function b(){
        var bb = 2;
        c();
        function c(){
            var cc = 3;
            console.log(bb);
        }
    }
}