import { getDataAndFilter } from './getData.js'

let allData = null

getDataAndFilter().then(sortedData => {
	allData = sortedData
	renderSelectedItem(sortedData)
	renderTable(sortedData)
	checkButtonClick()
})

function renderSelectedItem(data) {
	const bodySelectedItem = document.querySelector('.body_selected_items')
	bodySelectedItem.innerHTML = ''
	Object.entries(data.filter).forEach(([key, values]) => {
		values.forEach(element => {
			const selectedItem = `
                <label class="row_selected_items">
                    <input class="check_Box" type="checkbox" value="${element}" />${element}
                </label>`
			bodySelectedItem.insertAdjacentHTML('beforeend', selectedItem)
		})
	})
}

function getSelectedItems() {
	const checkBoxes = document.querySelectorAll('.check_Box')
	const selectedValues = []
	checkBoxes.forEach(checkBox => {
		if (checkBox.checked) selectedValues.push(checkBox.value)
	})
	return selectedValues
}

function filterData(selectedItems) {
	if (!selectedItems.length) return allData

	const filteredGroups = {}

	Object.entries(allData.groups).forEach(([groupName, items]) => {
		const filteredItems = items.filter(item => {
			const itemValues = [
				item.name,
				groupName,
				...Object.keys(item.characteristics),
			]
			return selectedItems.every(selected => itemValues.includes(selected))
		})
		if (filteredItems.length) filteredGroups[groupName] = filteredItems
	})

	return { groups: filteredGroups }
}

function renderTable(data) {
	const tableProducts = document.querySelector('.table_products')
	tableProducts.innerHTML = `
        <tr>
            <th>Группа</th>
            <th>Имя товара</th>
            <th>Характеристика</th>
            <th>Значение характеристики</th>
        </tr>
    `

	Object.entries(data.groups).forEach(([groupName, items]) => {
		items.forEach(item => {
			Object.entries(item.characteristics).forEach(([charName, charValue]) => {
				const tr = document.createElement('tr')
				tr.classList.add('rowTable')
				tr.innerHTML = `
                    <td class="group">${groupName}</td>
                    <td class="nameObject">${item.name}</td>
                    <td class="character">${charName}</td>
                    <td class="valueCharacteristic">${charValue}</td>
                `
				tableProducts.appendChild(tr)
			})
		})
	})
}

function checkButtonClick() {
	const buttonApply = document.getElementById('buttonApply')
	buttonApply.addEventListener('click', function () {
		const selectedItems = getSelectedItems()
		const filteredData = filterData(selectedItems)
		renderTable(filteredData)
	})
}
