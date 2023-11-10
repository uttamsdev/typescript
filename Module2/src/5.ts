{
//function with generic type

const createArray = (param : string) : string[]/*return stirng array*/ => {
    return [param];  //return array
}
createArray("Bangladesh")


//----------------
const createArrayWithGeneric = <T>(param : T) : T[]/*return type*/ => {
    return [param];  //return array
}
const resGenertic = createArrayWithGeneric<boolean>(true); //return boolean array


type User = {
    id: number;
    name: string;
}
const resGenerticObj = createArrayWithGeneric<User>({id: 2, name: "Mr. X"}); //return object array



///------------------------------------------------>
const createArrayWithTuple = <T,Q>(param1 : T, param2: Q) : [T,Q] => { //T,Q tuple return type
    return [param1, param2];  //return array
}
const result = createArrayWithTuple<string,number>("Bangladesh",10); //return boolean array
const result2 = createArrayWithTuple<string,{name:string}>("Bangladesh",{name: "Uttam"}); //return boolean array



//----------------------------------------------------------------------------------------------------------------------->
//ekhane student parameter different type er object recieve korche. eta jehetu generic type so j kono type rcv korte parbe
const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  //student1 er devType property ache & student2 er hashWatch property ache alada 
  const student1 = addCourseToStudent({
    name: "Mr X",
    email: "x@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    name: "Mr Y",
    email: "y@gmail.com",
    hasWatch: "Apple Watch",
  });







}