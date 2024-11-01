{
    // destructring

    const user = {
        id: 345,
        name: {
            firstName: 'rasibul',
            middelName: 'princes',
            lastName: "islam"
        },
        contactInfo: '010000000',
        adress: 'uganda',

    }

    const { contactInfo, name: { middelName }, } = user

    // array destructring

    const myFriends = ['chandeler', "joey", "ross", 'monica', 'phoebe']
    const [, , bestFriend, ...rest] = myFriends
}