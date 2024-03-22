var users = [ { id: 0, name: 'Tony', team: 'Oilers'},
            {id: 1, name: 'Chris', team: 'Flames'} ]

export function getUsers() {
    return users;
}

export function getUser(userId){
    return users.find(
        user => user.id == userId
    )
}

export function deleteUser(userId){
    users = users.filter(user => user.id != userId)
}

export function addUser(newUser){
    users.push(newUser)
}

