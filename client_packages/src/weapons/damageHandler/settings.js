/**
 * Список игнорируемых оружий
 * Их урон не будет снижаться или повышаться
 */
 const ignoreWeapons = {
	911657153: "Stun Gun",
}

/**
* Настройки максимального и минимального процента
* Проходимого урона от данных оружий по игроку
*/
const damageWeapons = {
	// Пистолеты
	// хеш оружия
	3249783761: {
			// Название оружия, это для нас, чтобы в будущем смогли быстро найти нужное нам оружие.
			"name": "Heavy Revolver",
			// Максимальный процент.
			"max": 90,
			// Минимальный процент.
			"min": 80,
			// Эти проценты нужны для функции рандома.
	},
	// Пистолет пулеметы
	324215364: {
			"name": "Micro SMG",
			"max": 80,
			"min": 50
	},
	// Пулеметы
	2144741730: {
			"name": "Combat MG",
			"max": 65,
			"min": 35
	},
	// Карабины
	3220176749: {
			"name": "Assault Rifle",
			"max": 70,
			"min": 45
	},
	// Дробовики
	487013001: {
			"name": "Pump Shotgun",
			"max": 80,
			"min": 30,
	},
	// Снайперы
	100416529: {
			"name": "Sniper Rifle",
			"max": 80,
			"min": 50,
	},
	// Холодное оружие
	3441901897: {
			"name": "Battle Axe",
			"max": 50,
			"min": 40
	}
}

exports = {
	ignoreWeapons: ignoreWeapons,
	damageWeapons: damageWeapons
}