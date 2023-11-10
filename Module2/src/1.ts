{
//type assertion
let anything : any;

anything = "Next level web development";
anything = 22.0000;
(anything as number).toFixed(2); // ami typescript k any k bole dicchi seta number assure kortechi. etai type assertion.


const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is : ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(1000) as number; // as number diye define kore dicchi  j number pathale obossoi number data pathabe
  const result2 = kgToGm("1000") as string;


  //---------------
  type CustomError = {
    message: string;
  }
  try{

  }catch(error){
    console.log((error as CustomError).message); //error.message property typescript e type define kore deina. so amra amra custom diye diye assertion kore dicchi.
    
  }


}