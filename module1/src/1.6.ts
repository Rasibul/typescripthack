{
    // learning funcrtion
    // normal function
    // Arrow function

    function add(num1: number, num2: number) {
        return num1 + num2
    }

    add(2, 2)


    const addArrow = (num1: number, num2: number): number => num1 + num2



    //object ---> function ---> method

    const poorUser = {
        name: 'rasibul',
        balance: 0,
        addBalance(balance: number): string {
            return `My balance is : ${this.balance + balance}`
        }
    }

    const arraay: number[] = [1, 4, 19]

    const newArray = arraay.map((elem: number): number => elem * elem)

}