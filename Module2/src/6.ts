{

//constraints 
//-> kono property k fixed kore dei.

const addCourseToStudent = <T extends {id: number; name: string; email:string;}>(student: T) => { //ekhane extends kore constant kore dicchi j , jei type er recv kori na keno id, name, r email property must thakte hobe
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  //student1 er devType property ache & student2 er hashWatch property ache alada 
  const student1 = addCourseToStudent({
    id: 222,
    name: "Mr X",
    email: "x@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    id: 111,
    name: "Mr Y",
    email: "y@gmail.com",
    hasWatch: "Apple Watch",
  });


  //suppose student hote hole tar 3 ta property thakte hbe id, name, email, kintu nicher function sudu matro ekta property hold kore bojha jacche na j eta student
  const student3 = addCourseToStudent({emni: "emni"}); //id, name , email property nai tai error diccche













}