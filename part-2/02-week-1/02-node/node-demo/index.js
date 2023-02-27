import chalk from 'chalk'
import { 
    sayName,
    helloStr,
    sayPhrase 
} from './utility.js'

function greetPerson() {
    console.log(chalk.magentaBright('Say Hello'))
    console.log(`This is text ${chalk.blue('chalk')}!`)
}


greetPerson()

sayName('AAron')

console.log('THIS is the string that we imported: ', helloStr)

sayPhrase()