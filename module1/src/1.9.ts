{


    // type Alias

    // type Alias for object

    type Student = {
        name: string,
        age: number,
        gender: string,
        contactInfo?: string
    }

    const student1: Student = {
        name: 'rasibul',
        age: 10,
        gender: 'male',
        contactInfo: '4445444'
    }
    const student2: Student = {
        name: 'rakib',
        age: 100,
        gender: 'male'

    }

    // type Alias for string

    type User = string
    type IsPositive = boolean

    const userName: User = 'rasi'
    const isPositive: IsPositive = true


    // type Alias for function

    type Add = (num1: number, num2: number) => number

    const add: Add = (num1, num2) => num1 + num2







}