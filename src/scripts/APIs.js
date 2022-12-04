async function createUser() {
	try{
		const rawResponse = await fetch('http://localhost:8080/create_user', { method: "POST" });
		return await rawResponse.json();
	} catch (error) {
		return handleAPIError();
	}
}

async function createRoom(userId) {
	try{
		const rawResponse = await fetch('http://localhost:8080/create_room', { method: "POST", body: JSON.stringify({userId}) });
		return await rawResponse.json();
	} catch (error) {
		return handleAPIError();
	}
}

async function joinRoom(userId, roomId) {
	try{
		const rawResponse = await fetch('http://localhost:8080/join_room', { method: "POST", body: JSON.stringify({userId, roomId}) });
		return await rawResponse.json();
	} catch (error) {
		return handleAPIError();
	}
}

async function getAllRooms() {
	try{
		const rawResponse = await fetch('http://127.0.0.1:8080/get_rooms', { method: "GET" });
		return await rawResponse.json();
	} catch (error) {
		return handleAPIError();
	}
}

function handleAPIError(error) {
	console.log(error);
	return { isError: true, errorMessage: error?.msg ?? "IDK" }
}

export { createUser, createRoom, getAllRooms, joinRoom };