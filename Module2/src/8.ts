{


//promise
type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };

  const getTodo = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data = await response.json();
    return data;
    // console.log(data);
  };

  getTodo();



  
//creating promise
const createPromise = () :Promise<string> => { //return type promise string
    return new Promise< string>((resolve, reject)=>{
        const data:string = "something";
        if(data){
            resolve(data);
        }else {
            reject('Failed to load data')
        }
    })
}

//calling create promise

const showData =async () => {
    const data : string = await createPromise();
    console.log(data);
}
showData();





}