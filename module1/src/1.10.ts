{
    // union and intercetion type


    // union types

    // type FrontendDeveloper = 'fakibazDeveloper' | 'junorDeveloper'

    // const newDeveloper : FrontendDeveloper = 'junorDeveloper'

    // type User = {
    //     name: string,
    //     email:string,
    //     gender: 'male'| 'female'
    //     bloodGroup: 'O+'| "A+" |"Ab+"
    // }


    // intercetion type

    type FrontendDeveloper = {
        skills: string[],
        designation1: 'Frontend Developer'
    }
    type BackendDeveloper = {
        skills: string[],
        designation2: 'Backend Developer'
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper

    const fullStackDeveloper: FullstackDeveloper = {
        skills: ['Html', 'CSS', "Express"],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer'

    }
}