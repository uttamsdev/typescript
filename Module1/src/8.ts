//ternary

const age: number = 15;

const ans = age>20 ? 'Adult' : 'Not adult';
console.log(ans);

//nullish coalescing operator -> null / undefined er opor vitti kore kono dicision make korte gele eta use korte hoi



const isAuthenticated  = null;

const result1 = isAuthenticated ?? 'Guest'; // isAuthenticated null hole result guest hobe


//Optional chaining
type User = {
    name: string;
    address: {
        city: string;
        road: string;
        presentAddress: string;
        permanentAddress?: string;
    }
}

const userx: User = {
    name: 'uttam',
    address: {
        city: 'ctg',
        road: 'nai road',
        presentAddress: 'dhaka'
    }
}

const permanentAddress = userx?.address?.permanentAddress ?? "No permanent address"

//permanent address jodi null/undefied hoi tahole no permanent address show korbe

