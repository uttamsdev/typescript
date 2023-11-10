{
//nullable type

const searchName = (value: string | null) => {
    if(value){
        console.log("Searching")
    } else {
        console.log("There is nothing to search")
    }
}

searchName(null);



//Unknown type //type ekhon jani na pore run type e janbo
const getSpeedInMeterPerSecond = (value: unknown) => {
    if(typeof value == 'number'){
        const convertedSpeed = (value * 1000) /3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`)
    }
    else if(typeof value == 'string') {
        const valueInNumber = value.split(" ");
        const [result, unit] =valueInNumber;
        const convertedSpeed = (parseFloat(result) * 1000) /3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`)
    }
    else {
        console.log("wrong input");
    }
}

getSpeedInMeterPerSecond("1000 kmh");


//never type
const throwWrror = (msg:string) :never =>{ //kono kichui retrun korbe na emon obosthai never type user korte pari
    throw new Error(msg);
}
throwWrror("Error occud")
}