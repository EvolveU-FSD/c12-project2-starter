
async function getUser() {
    const userResponse = await fetch('/user')
    if (userResponse.status !== 200) throw Error('Something is horribly wonrg')
    return userResponse.json()
} 

async function updateUser(update) {
    const updateResponse = await fetch('/user', {
       method: 'post',
       headers: {
        'Content-Type': 'application/json',
       },
       body: JSON.stringify(update)
    })
    if (updateResponse.status !== 200) throw Error('Something is horribly wonrg')
} 

async function deleteUser() {
    const deleteResponse = await fetch('/user', {
       method: 'delete',
    })
    if (deleteResponse.status !== 200) throw Error('Something is horribly wonrg')
} 