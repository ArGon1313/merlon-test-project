import { getSortedData } from './getData.js'

function renderData(data) {
	const selectWrapper = document.querySelector('.items_select_wrapper')
	data.forEach(element => {
		const block = document.createElement('div')
		block.classList.add('snap_class')
		block.textContent = `${element.name}`
		selectWrapper.appendChild(block)
	})
}

getSortedData().then(sortedData => {
	renderData(sortedData)
	setValueTitleSelect(sortedData)
	console.log(sortedData)
})

function checkClick() {
	const title = document.getElementById('select_title')
	const items = document.querySelector('.items_select_wrapper')
	title.addEventListener('click', function () {
		console.log('Клик')
		if (items.style.opacity === '1') {
			items.style.opacity = 0
			items.style.pointerEvents = 'none'
		} else {
			items.style.opacity = 1
			items.style.pointerEvents = 'auto'
		}
	})
}

checkClick()

function setValueTitleSelect(data) {
	const inputButton = document.querySelector('.cast_input')
	const items = document.querySelectorAll('.snap_class')
	items.forEach((item, index) => {
		item.addEventListener('click', function () {
			inputButton.value = item.textContent
			console.log(`Кликнули по элементу ${item.textContent}`)
			setValueTitleTable(data[index])
		})
	})
}

function setValueTitleTable(element) {
	const nameItem = document.getElementById('name')
	const characteristicItem = document.getElementById('characteristic')
	const valueItem = document.getElementById('value')
	const archiveItem = document.getElementById('archive')

	nameItem.textContent = element.name
	characteristicItem.textContent = element.characteristic
	valueItem.textContent = element.value
	archiveItem.textContent = element.archive
}
