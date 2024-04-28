import inquirer from 'inquirer';
const Currency = {
    USD: 1, //basic currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_name = await inquirer.prompt([{
        name: 'from',
        message: 'Enter from Currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: 'Enter to Currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: 'Enter your amount',
        type: 'number',
    }]);
let from = Currency[user_name.from];
let to = Currency[user_name.to];
/*let amount=user_name.amount;
let base=amount/from;
let convert=base*to;*/
console.log(`Your currency = ${from}
you convert = ${to}
currency covert change into = ${user_name.amount / from * to}`);
