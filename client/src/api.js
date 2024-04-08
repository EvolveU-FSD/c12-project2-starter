
export async function getAllUsers() {
    const allUsersResponse = await fetch('/api/user')
    if (allUsersResponse.status !== 200) {
        console.log(userResponse)
        throw Error('Something is horribly wonrg')
    }
    return allUsersResponse.json()
} 

export async function getUserById(userId) {
    const userResponse = await fetch(`/api/user/${userId}`)
    if (userResponse.status !== 200) {
        console.log(userResponse)
        throw Error('Something is horribly wonrg')
    }
    return userResponse.json()
} 

export async function updateUser(update) {
    const updateResponse = await fetch('/api/user', {
       method: 'post',
       headers: {
        'Content-Type': 'application/json',
       },
       body: JSON.stringify(update)
    })
    if (updateResponse.status !== 200) {
        console.log(updateResponse)
        throw Error('Something is horribly wonrg')
    }
} 

export async function deleteUser() {
    const deleteResponse = await fetch('/api/user', {
       method: 'delete',
    })
    if (deleteResponse.status !== 200) {
        console.log(deleteResponse)
        throw Error('Something is horribly wonrg')
    }
} 
