let student = {

    name:"ankush",
    age: 22,
    eng : 70,
    math:70,
    science:70,
    getavg(){

        let avg = (this.eng+this.math+this.math)/3;
        console.log(`${this.name} got avg marks ${avg}` );
    }
}


student.getavg();