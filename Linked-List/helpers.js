/* Helper functions for checking results locally */

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}

export function createLinkedList(arr) {
	if (arr.length === 0) return null
	const nodes = arr.map((val) => new ListNode(val))

	for (let i = 0; i < nodes.length - 1; ++i) {
		nodes[i].next = nodes[i + 1]
	}

	return nodes[0]
}

export function createLinkedListCycle(arr, pos) {
	if (arr.length === 0) return null
	const nodes = arr.map((val) => new ListNode(val))

	for (let i = 0; i < nodes.length - 1; ++i) {
		nodes[i].next = nodes[i + 1]
	}

	if (pos !== -1) {
		nodes[nodes.length - 1].next = nodes[pos]
	}

	return nodes[0]
}

export function linkedListToArray(head) {
	const result = []
	let current = head
	while (current) {
		result.push(current.val)
		current = current.next
	}
	return result
}

export function linkedListToArrayCycle(head) {
	const result = []
	const visited = new Set()
	let current = head

	while (current) {
		if (visited.has(current)) {
			result.push(`-> Cycle back to node with value ${current.val}`)
			break
		}
		visited.add(current)
		result.push(current.val)
		current = current.next
	}

	return result
}
