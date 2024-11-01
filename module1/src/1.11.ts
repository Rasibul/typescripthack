{
    // ternary opertaor || optional opertaor || nullish operator

    const age: number = 18

    if (age >= 18) {
        console.log('adult')
    } else {
        console.log('not adult')
    }

    const isAdult = age >= 18 ? 'adult' : 'not adult'
    console.log({ isAdult })

    // nullish coalescing operrator

    const isAuthenticated = null

    const result1 = isAuthenticated ?? "Guest"
    console.log({ result1 })

    // optional channning

    type User = {
        name: string
        address: {
            city: string,
            road: string,
            persentAdress: string,
            perManentAdress?: string
        }
    }


    const user: User = {
        name: 'rasibul',
        address: {
            city: 'chittagong',
            road: '1/2',
            persentAdress: 'mohammadnogor',
            
        }
    }

    const perManentAdress = user?.address?.perManentAdress ?? 'No Permannet Adress'
    console.log(perManentAdress)



}