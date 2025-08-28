export function getSortedData() {
	return fetch('http://localhost:4000/handler/task2.php')
		.then(response => response.json())
		.then(data => {
			const sortData = data
				.filter(item => item.archive == 0)
				.sort((a, b) => a.name.localeCompare(b.name))
			return sortData
		})
		.catch(err => console.error(err))
}

export function getDataAndFilter() {
	return fetch('http://localhost:4000/handler/task3_1.php')
		.then(response => response.json())
		.then(data => {
			const dataArray = data
			return dataArray
		})
		.catch(err => console.error(err))
}
