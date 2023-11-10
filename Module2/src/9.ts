{
//conditional type
//-> ekta type onno ekta typer er opor depend kore type nirdharon kore

type a1 = null;
type b1 = undefined;

//a1 null k extend kortest tai true hobe x er type
type x = a1 extends null ? true : false; //x ekhaen conditional type


//nasted conditional
type y = a1 extends null ? true : b1 extends undefined ? undefined : any;





type Sheikh = {
    bike: string;
    car: string;
    ship: string;
}


//car ache kina // tarpor bike ache kina // ship ache kina /  tractor ache kina check korbo
type CheckVehicle<T> = T extends keyof Sheikh ? true : false


type HasBike = CheckVehicle<"car">; // car ache tai HasBike er value true hobe



}