// TODO: a lot of code repetition

async function createUser() {
	try{
		const rawResponse = await fetch('http://localhost:8080/create_user', { method: "POST" });
		
		if(rawResponse.ok)
			return await rawResponse.json();

		throw new Error(
			await rawResponse.text()
		);
	} catch (error) {
		return handleAPIError();
	}
}

async function createRoom(userId) {
	return await fetchAPI('create_room', 'POST', JSON.stringify({userId}));
}

async function joinRoom(userId, roomId) {
	try{
		const rawResponse = await fetch('http://localhost:8080/join_room', { method: "POST", body: JSON.stringify({userId, roomId}) });
		
		if(rawResponse.ok)
			return await rawResponse.json();
		
		throw new Error(
			await rawResponse.text()
		);
	} catch (error) {
		return handleAPIError(error);
	}
}

async function getAllRooms() {
	try{
		const rawResponse = await fetch('http://127.0.0.1:8080/get_rooms', { method: "GET" });

		if(rawResponse.ok)
			return await rawResponse.json();
		
		throw new Error(
			await rawResponse.text()
		);
	} catch (error) {
		return handleAPIError();
	}
}

// just proposing a solution for code repetition
async function fetchAPI(route, method, body = {}, headers = {}) {
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

export { createUser, createRoom, getAllRooms, joinRoom };