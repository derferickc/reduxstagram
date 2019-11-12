// a reducer takes in 2 things:
// 1. the action (info about what happened)
// 2. a copy of current state

function postComments(state = [], action) {
	switch(action.type) {
		case 'ADD_COMMENT':
			return[...state, {
				user: action.author,
				text: action.coment
			}]
		case 'REMOVE_COMMENT':
			// we need to return the new state without the deleted comment
			return [
				// from the start to the one we want to delete
				...state.slice(0,action.i),
				// after the deleted one, to the end
				...state.slice(action.i + 1)
			]
		default:
			return state;
	}
	return state;
}

function comments(state = [], action) {
	if(typeof action.postId !== 'undefined') {
		return {
			// take current state
			... state,
			// overwrite this post with a new one
			[action.postId]: postComments(state[action.postId], action)
		}
	}
	return state;
}

export default comments;