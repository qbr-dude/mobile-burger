//TODO add nav tree

// type Tree = {
//     name: string,
//     nestedTree?: Tree,
//     link?: string,
// }

export const navTree = {
    tree: [
        {
            name: 'Services',
            tree: [
                {
                    name: 'Облачные вычисления', tree: [{
                        name: 'Облачные вычисления - 1',
                        description: 'Облачные вычисления - nested',
                        link: '#',
                    }, {
                        name: 'Облачные вычисления - 2',
                        description: 'Облачные вычисления - nested',
                        link: '#',
                    }, {
                        name: 'Облачные вычисления - 3',
                        description: 'Облачные вычисления - nested',
                        link: '#',
                    }, {
                        name: 'Облачные вычисления - 4',
                        description: 'Облачные вычисления - nested',
                        link: '#',
                    }]
                },
                {
                    name: 'Выделенные серверы', tree: [{
                        name: 'Выделенные сервера - 1',
                        description: 'Выделенные сервера - nested',
                        link: '#',
                    }, {
                        name: 'Выделенные сервера - 2',
                        description: 'Выделенные сервера - nested',
                        link: '#',
                    }, {
                        name: 'Выделенные сервера - 3',
                        description: 'Выделенные сервера - nested',
                        link: '#',
                    }, {
                        name: 'Выделенные сервера - 4',
                        description: 'Выделенные сервера - nested',
                        link: '#',
                    }]
                },
                {
                    name: 'Платформенные сервисы', tree: [{
                        name: 'Платформенные сервисы - 1',
                        description: 'Платформенные сервисы - nested',
                        link: '#',
                    }, {
                        name: 'Платформенные сервисы - 2',
                        description: 'Платформенные сервисы - nested',
                        link: '#',
                    }, {
                        name: 'Платформенные сервисы - 3',
                        description: 'Платформенные сервисы - nested',
                        link: '#',
                    }, {
                        name: 'Платформенные сервисы - 4',
                        description: 'Платформенные сервисы - nested',
                        link: '#',
                    }]
                },
                {
                    name: 'Информационная безопасность', tree: [{
                        name: 'Информационная безопасность - 1',
                        description: 'Информационная безопасность - nested',
                        link: '#',
                    }, {
                        name: 'Информационная безопасность - 2',
                        description: 'Информационная безопасность - nested',
                        link: '#',
                    }, {
                        name: 'Информационная безопасность - 3',
                        description: 'Информационная безопасность - nested',
                        link: '#',
                    }, {
                        name: 'Информационная безопасность - 4',
                        description: 'Информационная безопасность - nested',
                        link: '#',
                    }]
                },
            ]
        }, {
            name: 'Managed IT',
            tree: [],
        }, {
            name: 'Telecom Solutions',
            tree: [],
        }, {
            name: 'About Us',
            tree: [],
        }
    ]
}