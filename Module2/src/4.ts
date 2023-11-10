{
// generic interface

interface Developer<T, X=null> { //default parameter karo kache bike na thakle null pathabe
    name: string;
    computer: {
        brand: string;
        model: string;
        release: number;
    },
    smartWatch: T; //smart watch er property dynamically rekhbe value gulo se jonno T dichi;
    bike?: X; //optional
}

type EmailabWatch = {
    brand: string;
    model: string;
    display: string
}
//poorDeveloper && Rich developer object er "smartWatch" property dynammically handle hocche
const poorDeveloper : Developer<EmailabWatch> = { // X er value null jabe bike er jonno
    name: "Uttam",
    computer: {
        brand: 'Asus',
        model: 'X3d3',
        release: 2013
    },
    smartWatch: {
        brand: 'x',
        model: 'kw66',
        display: 'OLED'
    }
}

//object
interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
}


interface YamahaBike {
    model: string;
    engineCapacity: string;
  }

  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "Rich Dev",
    computer: {
      brand: "HP",
      model: "X-25UR",
      release: 2018,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "Something",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "100cc",
    },
  };




}