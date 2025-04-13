function calculate() {
	const phone = document.getElementById('phone').value;
	const email = document.getElementById('email').value;
	const distance = parseFloat(document.getElementById('distance').value);
	const weight = parseFloat(document.getElementById('weight').value);
	const insurance = document.getElementById('insurance').checked;
	const temperature = document.getElementById('temperature').checked;

	// Цены (приближенные к реальным)
	const pricePerKm = 30; // Цена за 1 км
	const heavyWeightThreshold = 10; // Порог веса для увеличения стоимости
	const heavyWeightCost = 5000; // Доплата за вес больше 10 тонн
	const insuranceCostPercentage = 0.05; // 5% от стоимости за страховку
	const temperatureCostPercentage = 0.10; // 10% за температурный режим

	// Расчет базовой стоимости
	let totalCost = distance * pricePerKm;

	// Учет веса
	if (weight > heavyWeightThreshold) {
		totalCost += heavyWeightCost;
	}

	// Учет страховки
	if (insurance) {
		totalCost += totalCost * insuranceCostPercentage;
	}

	// Учет температурного режима
	if (temperature) {
		totalCost += totalCost * temperatureCostPercentage;
	}

	// Вывод результата
	const resultDiv = document.getElementById('result');
	resultDiv.innerHTML = `
		<h3>Расчет стоимости:</h3>
		<p>Номер телефона: ${phone}</p>
		<p>Email: ${email}</p>
		<p>Расстояние: ${distance} км</p>
		<p>Вес: ${weight} тонн</p>
		<p>Страховка: ${insurance ? 'Да' : 'Нет'}</p>
		<p>Температурный режим: ${temperature ? 'Да' : 'Нет'}</p>
		<p><strong>Итоговая стоимость: ${totalCost.toFixed(2)} рублей</strong></p>
	`;
}