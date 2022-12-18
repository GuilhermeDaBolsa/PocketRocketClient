async function createUser() {
	return await fetchAPI('create_user', 'POST', {});
}

async function createRoom(userId) {
	return await fetchAPI('create_room', 'POST', JSON.stringify({ userId }));
}

async function joinRoom(userId, roomId) {
	return await fetchAPI('join_room', 'POST', JSON.stringify({ userId, roomId }));
}

async function exitRoom(userId) {
	return await fetchAPI('exit_room', 'POST', JSON.stringify({ userId }));
}

async function getAllRooms() {
	return await fetchAPI('get_rooms', 'GET');
}

async function fetchAPI(route, method, body, headers = {}) {
	try{
		const rawResponse = await fetch(`http://127.0.0.1:8080/${route}`, { method : method, body: body, headers: headers});

		if(rawResponse.ok)
			return await rawResponse.json();
		
		throw new Error(await rawResponse.text());
	} catch (error) {
		return handleAPIError(error);
	}
}

function handleAPIError(error) {
	console.error(error);
	return { isError: true, errorMessage: error?.message ?? "Something went wrong!" }
}

export { createUser, createRoom, getAllRooms, joinRoom, exitRoom };