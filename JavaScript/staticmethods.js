class Fan{
    constructor(name){
        this.name = name;
    }
  work(){ 
        console.log(this.name + " "+ "is working");
    }

  static capitalize(){ // static function belongs to class not to any particular object
        return "Jai mata di";
    }
}

s = new Fan("khaitan");
s.work();
console.log(Fan.capitalize());
// s.capitalize(); dont depepnd on any object 
