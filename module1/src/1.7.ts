{
    // spread operator
    // rest operator
    // destructuring


    // learn spread operator

    const bros1: string[] = ['Mir', 'Rasibul', 'Rakib']
    const bors2: string[] = ['redoy', 'sabbir,', 'alamin']

    bros1.push(...bors2)

    const mentorList1 = {
        redux: "mir",
        nextjs: "tonmy",
        dbms: "niloy"
    }
    const mentorList2 = {
        redux: "mir",
        nextjs: "tonmy",
        dbms: "niloy"
    }

    const mentorList = {
        ...mentorList1,
        ...mentorList2
    }

    // learn rest operator

    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hi ${friend}`))
        greetFriends('abul', 'babul', 'kabul', 'ubul')
    }


}