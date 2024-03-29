/**
 * Show HTMLElement by ID with removing CSS display none;
 * @param {string} id
 */
function showID(id) {
	document.getElementById(id).classList.remove("d-none");
}

/**
 * Hide HTMLElement by ID with adding CSS display none;
 * @param {string} id
 */
function hideID(id) {
	document.getElementById(id).classList.add("d-none");
}

/**
 * Set height HTMLElement by ID.
 * Add CSS class .vh{height: 100dvh;}
 * @param {string} id
 */
function viewHeightMax(id) {
	document.getElementById(id).classList.add("vh");
}

/**
 * Set height of HTMLElement by ID.
 * Remove CSS class .vh{height: 100dvh;}
 * @param {string} id
 */
function viewHeightNormal(id) {
	document.getElementById(id).classList.remove("vh");
}

/**
 * Removes the current element from an array.
 * @param {any[]} arr
 * @param {any} element
 */
function removeObj(arr, element) {
	arr.splice(currentIndex(arr, element), 1);
}

/**
 * Returns the index from element in the array
 * @param {any[]} arr
 * @param {any} obj
 * @returns {number}
 */
function currentIndex(arr, obj) {
	const index = arr.indexOf(obj);
	return index;
}

/**
 * remove one element on arr[index]
 * @param {any[]} arr
 * @param {number} index
 */
function removeByIndex(arr, index) {
	arr.splice(index, 1);
}

/**
 * remove element on pos[index] from arr after time passed
 * @param {any[]} arr
 * @param {any} element
 * @param {number} time
 */
function removeObjTimer(arr, element, time = 0) {
	setTimeout(() => {
		arr.splice(currentIndex(arr, element), 1);
	}, time);
}
