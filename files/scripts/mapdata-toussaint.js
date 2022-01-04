window.map_path   = 'toussaint';
window.map_sWest  = L.latLng(0, 0);
window.map_nEast  = L.latLng(144, 144);
window.map_center = [72, 77];
window.map_minZoom  = 2;
window.map_mZoom  = 6;
window.map_Zoom  = 3;
window.mapdata_toussaint = {

	// Abandoned Site
	abandoned: [{
		coords: [
			[67.547,51.734],
			[66.875,37.406],
			[78.656,45.859],
			[82.344,47.219],
			[90.109,47.094],
			[32.391,68.297],
			[112.875,66.172],
			[88.188,101.797],
			[91.531,78.688],
			[31.141,71.953],
			[57.656,94.109]
		],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	}],

	// Alchemy Supplies
	alchemy: [{
		coords: [[52.719,62.609]],
		label: $.t("alchemy.label"),
		popup: $.t("alchemy.desc")
	}],

	// Armourer
	armourer: [{
		coords: [
			[39.969,81.000],
			[64.956,65.109]
		],
		label: $.t("armourer.labelJourneyman"),
		popup: $.t("armourer.desc")
	}, {
		coords: [[50.734,65.547]],
		label: $.t("Toussaint:armourer.lafargue"),
		popup: $.t("Toussaint:armourer.lafargueQuest") + $.t("armourer.desc")
	}, {
		coords: [[50.281,64.297]],
		label: $.t("armourer.labelMaster"),
		popup: $.t("armourer.desc")
	}, {
		coords: [[89.047, 41.156]],
		label: $.t("armourer.labelJourneyman"),
		popup: $.t("armourer.desc") + ' ' + $.t("pid.rescue") + ' <a href="#6/88.750/41.219">' + $.t("pid.rescueLocation") + '</a>'
	}],

	// Armourer's Table
	armourerstable: [{
		coords: [
			[50.500,64.453],
			[116.538,71.366],
			[65.422,65.344],
			[105.047,79.422],
			[69.609,100.609],
			[40.047,81.156],
			[86.156,63.734],
			[98.203,43.688]
		],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	}],

	// Bandit Camp
	banditcamp: [{
		coords: [
			[52.188,100.469],
			[94.984,42.109],
			[86.313,109.484],
			[102.938,75.563],
			[37.984,54.531],
			[108.438,65.031],
			[111.828,72.938],
			[68.828,115.984]
		],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	}],

	// Barber
	barber: [{
		coords: [
			[64.531,63.641],
		],
		label: $.t("barber.label"),
		popup: $.t("barber.desc")
	}],

	// Blacksmith
	blacksmith: [{
		coords: [
			[49.813,64.359],
			[65.113,64.688]
		],
		label: $.t("blacksmith.labelJourneyman"),
		popup: $.t("blacksmith.desc")
	}, {
		coords: [[44.672, 72.125]],
		label: $.t("blacksmith.labelJourneyman"),
		popup: $.t("blacksmith.desc") + ' ' + $.t("pid.rescue") + ' <a href="#6/50.938/103.156">' + $.t("pid.rescueLocation") + '</a>'
	}],

	// Boat
	boat: [{
		coords: [
			[38.59375, 55.3125],
			[37.09375, 62.1875],
			[45.1875, 55.5625],
			[46.28125, 62.28125],
			[55.4375, 73.65625],
			[50.375, 80.4375],
			[54.578125, 87.390625],
			[62, 87.3125],
			[73.40625, 76.21875],
			[87.4375, 80.75],
			[112.5, 65.25],
			[96.921875, 60.765625],
			[78.625, 69.5],
			[65.875, 76.15625]
		],
		label: $.t("Toussaint:contracts.label.biggamehunter"),
		popup: $.t("Toussaint:contracts.desc.biggamehunter")
	}],

	// Brothel
	brothel: [{
		coords: [[58.359, 72.572]],
		label: $.t("Toussaint:brothel.label.Belle"),
		popupTitle: $.t("Toussaint:brothel.popup.Belle"),
		popup: $.t("Toussaint:brothel.desc")
	}],

	// Contracts
	contracts: [{
		coords: [[74.60, 74.50]],
		label: $.t("Toussaint:contracts.label.biggamehunter"),
		popup: $.t("Toussaint:contracts.desc.biggamehunter")
	},{
		coords: [[74.60, 75.00]],
		label: $.t("Toussaint:contracts.label.coldasice"),
		popup: $.t("Toussaint:contracts.desc.coldasice")
	},{
		coords: [[71.719, 102.719]],
		label: $.t("Toussaint:contracts.label.bonvineblues"),
		popup: $.t("Toussaint:contracts.desc.bonvineblues")
	},{
		coords: [[64.328, 89.797]],
		label: $.t("Toussaint:contracts.label.tufo"),
		popup: $.t("Toussaint:contracts.desc.tufo")
	},{
		coords: [[94.4375, 93.546875]],
		label: $.t("Toussaint:contracts.label.phantoms"),
		popup: $.t("Toussaint:contracts.desc.phantoms")
	}],

	// Entrance
	entrance: [{
		coords: [
			[86.047,72.938],
			[79.422,53.250],
			[93.141,41.828],
			[47.000,79.578],
			[47.234,78.734],
			[48.594,92.766],
			[58.688,84.641],
			[49.781,100.625],
			[48.188,100.484],
			[28.047,81.891],
			[65.156,43.703],
			[95.313,41.875],
			[95.172,45.188],
			[102.203,64.344],
			[46.203,51.609],
			[43.078,56.094],
			[72.172,87.641],
			[43.438,95.797],
			[60.344,113.328],
			[108.891,82.438],
			[107.656,80.844],
			[94.844,94.359],
			[95.922,100.891],
			[96.688,106.219],
			[90.969,86.672],
			[84.031,84.203],
			[77.375,87.125],
			[73.063,86.375],
			[50.109,84.234],
			[39.047,67.703],
			[35.469,59.328],
			[56.484,44.031],
			[57.844,50.828],
			[59.344,51.313],
			[91.766,41.672],
			[93.125,53.063],
			[64.109,51.500],
			[68.516,114.156]
		],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}],

	// Events
	event: [{
		coords: [[55.15625, 68.46875]],
		label: $.t("Toussaint:event.label.contract"),
		popup: $.t("Toussaint:event.desc.contract")
	}, {
		coords: [[48.671875, 65.921875]],
		label: $.t("Toussaint:event.label.grave"),
		popup: $.t("Toussaint:event.desc.grave")
	}, {
		coords: [[60.40625, 56.90625]],
		label: $.t("Toussaint:event.label.naughty"),
		popup: $.t("Toussaint:event.desc.naughty")
	}, {
		coords: [[54.078, 56.969]],
		label: $.t("Toussaint:event.label.ring"),
		popup: $.t("Toussaint:event.desc.ring")
	}, {
		coords: [[50.750, 61.063]],
		label: $.t("Toussaint:event.label.drunked"),
		popup: $.t("Toussaint:event.desc.drunked")
	}],

	// Grindstone
	grindstone: [{
		coords: [
			[79.625,109.094],
			[50.219,64.422],
			[116.500,71.188],
			[104.969,79.594],
			[69.625,100.609],
			[40.063,80.938],
			[65.391,65.125],
			[86.047,63.703],
			[98.125,43.656]
		],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	}],

	// Guarded Treasure
	guarded: 	[{
		coords: [
			[44.781,103.531],
			[46.063,88.219],
			[37.375,63.016],
			[66.922,91.969],
			[111.828,72.859],
			[37.875,93.297],
			[89.641,93.328],
			[99.234,79.234],
			[69.859,81.422],
			[73.344,109.203],
			[73.875,113.547],
			[76.563,113.656],
			[106.391,86.313],
			[114.172,75.891],
			[79.594,67.422],
			[84.938,40.813],
			[86.094,43.375]
		],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	}],

	// Gwent Player
	gwent: [{
		coords: [
			[51.297,60.781],
			[51.047,66.250],
			[53.672,61.313],
			[52.919,62.609],
			[50.750,65.109],
			[50.481,64.297],
			[40.169,81],
			[52.328,65.000],
			[55.328,61.891],
			[41.528,81.109],
			[58.359,72.672],
			[58.328,72.000],
			[64.856,62.734],
			[64.831,63.641],
			[65.313,64.688],
			[65.156,65.109],
			[85.628,53.734],
			[63.653,90.625],
			[75.606,75.188]
		],
		label: $.t("Toussaint:misc.label.gwent"),
		popup: $.t("Toussaint:misc.desc.gwent")
	}],

	// Hanse Base
	hansebase: [{
		coords: [
			[116.047,71.625],
			[96.438,44.750],
			[80.813,108.313]
		],
		label: $.t("Toussaint:hansebase.label"),
		popup: $.t("Toussaint:hansebase.desc")
	}],

	// Harbor
	harbor: [{
		coords: [
			[47.297,60.734],
			[56.109,74.750],
			[61.781,88.000],
			[96.219,60.594]
		],
		label: $.t("harbor.label"),
		popup: $.t("harbor.desc")
	}],

	// Herbalist
	herbalist: [{
		coords: [
			[85.328,53.734],
			[51.047,66.250]
		],
		label: $.t("herbalist.label"),
		popup: $.t("herbalist.desc")
	}, {
		coords: [[94.469, 70.844]],
		label: $.t("herbalist.label"),
		popup: $.t("herbalist.desc") + ' ' + $.t("pid.rescue") + ' <a href="#6/108.375/82.438">' + $.t("pid.rescueLocation") + '</a>'
	}],

	// Hidden Treasure
	hidden: [{
		coords: [
			[69.203,42.016],
			[92.125,54.938],
			[89.141,53.375],
			[57.859,85.031],
			[77.141,42.047],
			[102.297,64.109],
			[42.547,54.688],
			[24.234,72.422],
			[96.047,80.453],
			[44.219,64.484],
			[63.453,81.234],
			[61.188,102.641],
			[54.250,106.828],
			[95.984,88.625]
		],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	}],

	// Innkeep
	innkeep: [{
		coords: [[75.406,75.188]],
		label: $.t("Toussaint:signpost.label.cockatrice"),
		popup: $.t("Toussaint:innkeep.desc")
	},{
		coords: [[64.656,62.734]],
		label: $.t("Toussaint:innkeep.popup"),
		popup: $.t("Toussaint:innkeep.desc")
	},{
		coords: [[51.438,61.234]],
		label: $.t("Toussaint:innkeep.label.pheasantry"),
		popup: $.t("Toussaint:innkeep.desc")
	},{
		coords: [[41.328,81.109]],
		label: $.t("Toussaint:innkeep.popup"),
		popup: $.t("Toussaint:innkeep.desc")
	},{
		coords: [[90.703,47.578]],
		label: $.t("Toussaint:innkeep.label.auberge"),
		popup: $.t("Toussaint:misc.desc.aftercleared")
	},{
		coords: [[63.453,90.625]],
		label: $.t("Toussaint:innkeep.label.barrelandbung"),
		popup: $.t("Toussaint:innkeep.desc")
	},{
		coords: [[113.891,66.391]],
		label: $.t("Toussaint:innkeep.label.salamander"),
		popup: $.t("Toussaint:misc.desc.aftercleared")
	},{
		coords: [[52.128,65]],
		label: $.t("Toussaint:innkeep.label.winery"),
		popup: $.t("Toussaint:innkeep.desc")
	}],

	// Knight Errant in Distress
	kid: [{
		coords: [
			[77.156,103.594],
			[97.813,49.516],
			[38.203,54.75]
		],
		label: $.t("Toussaint:kid.label"),
		popup: $.t("Toussaint:kid.desc")
	}],

	// Monster Den
	monsterden: [{
		coords: [
			[65.266,43.938],
			[75.656,89.453],
			[96.047,100.828],
			[107.422,76.516],
			[89.453,108.266]
		],
		label: $.t("monsterden.label"),
		popup: $.t("monsterden.desc")
	}],

	// Monster Nest
	monsternest: [{
		coords: [
			[70.156,74.109],
			[48.188,84.078],
			[58.813,41.594],
			[32.188,79.984],
			[33.250,84.797],
			[93.188,110.281],
			[76.328,86.969],
			[68.766,115.000],
			[75.484,40.313],
			[75.328,40.578]
		],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	}],

	// Notice Board
	notice: [{
		coords: [
			// [126.563,69.063], //todo ??
			[84.391,55.125],
			[75.141,74.844],
			[53.375,63.719],
			[64.328,89.297],
			[41.750,80.313],
			[71.719,102.219],
			[93.609,65.781]
		],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	}],

	// Person in Distress
	pid: [{
		coords: [[88.750,40.984]],
		label: $.t("pid.label"),
		popup: $.t("pid.desc") + ' ' + $.t("pid.afterrescue") + ' <a href="#6/89.047/41.156">' + $.t("pid.rescueLocation") + '</a>'
	}, {
		coords: [[112.859,81.688]],
		label: $.t("pid.label"),
		popup: $.t("pid.desc") + ' ' + $.t("pid.afterrescue") + ' <a href="#6/113.078/81.984">' + $.t("pid.rescueLocation") + '</a>'
	}, {
		coords: [[60.125,113.047]],
		label: $.t("pid.label"),
		popup: $.t("pid.desc") + ' ' + $.t("pid.afterrescue") + ' <a href="#6/75.656/75.750">' + $.t("pid.rescueLocation") + '</a>'
	}, {
		coords: [[108.438,82.219]],
		label: $.t("pid.label"),
		popup: $.t("pid.desc") + ' ' + $.t("pid.afterrescue") + ' <a href="#6/94.469/70.844">' + $.t("pid.rescueLocation") + '</a>'
	}, {
		coords: [[50.953,102.719]],
		label: $.t("pid.label"),
		popup: $.t("pid.desc") + ' ' + $.t("pid.afterrescue") + ' <a href="#6/44.672/72.125">' + $.t("pid.rescueLocation") + '</a>'
	}],

	// Place of Power
	pop: [{
		coords: [[48.422,100.266]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.quen")}),
		popup: $.t("pop.desc")
	},{
		coords: [[61.531,44.969]],
		label: $.t("pop.label") + $.t(" ")+ $.t("Toussaint:misc.desc.insideden"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.axii")}),
		popup: $.t("pop.desc")
	},{
		coords: [[36.359,59.375]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.aard")}),
		popup: $.t("pop.desc")
	},{
		coords: [[68.625,114.8447]],
		label: $.t("pop.label") + $.t(" ")+ $.t("Toussaint:misc.desc.insidecave"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.igni")}),
		popup: $.t("pop.desc")
	},{
		coords: [[119.188,74.125]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.yrden")}),
		popup: $.t("pop.desc")
	}],

	// Point of Interest
	poi: [{
		coords: [[53.96875,60.625]],
		label: $.t("Toussaint:poi.label.ducal"),
		popup: $.t("Toussaint:poi.desc.ducal")
	}, {
		coords: [[51.906,2.859]],
		label: $.t("Toussaint:poi.label.photo"),
		popup: $.t("Toussaint:poi.desc.photo")
	}],

	// Scavengers
	scavenger: [{
		coords: [[113.609, 81.078]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.5"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.armor") + $.t("scavenger.level.5")
	}, {
		coords: [[107.422, 77]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.5"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.steel") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.silver") + $.t("scavenger.level.5")
	}, {
		coords: [[116.781, 71.5]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.level.5"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.trous") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.fel") + $.t("scavenger.item.boot") + $.t("scavenger.level.5")
	}, {
		coords: [[80.469, 107.956]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.5"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.armor") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.trous") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.silver") + $.t("scavenger.level.5")
	}, {
		coords: [[69.078, 116.578]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.level.5"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.boot") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.gri") + $.t("scavenger.item.steel") + $.t("scavenger.level.5")
	}, {
		coords: [[43.65625, 96.25]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.man") + $.t("scavenger.level.5"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.man") + $.t("scavenger.item.armor") + $.t("scavenger.level.5")
	}, {
		coords: [[91.547, 106.172]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.man") + $.t("scavenger.level.5"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.man") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.5")
	}, {
		coords: [[46.984, 51.5]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.man") + $.t("scavenger.level.5"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.man") + $.t("scavenger.item.silver") + $.t("scavenger.level.5")
	}, {
		coords: [[69.984, 42.813]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.man") + $.t("scavenger.level.5"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.man") + $.t("scavenger.item.steel") + $.t("scavenger.level.5")
	}, {
		coords: [[97.984, 60.766]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.man") + $.t("scavenger.level.5"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.man") + $.t("scavenger.item.trous") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.man") + $.t("scavenger.item.boot") + $.t("scavenger.level.5")
	}, {
		coords: [[65.641, 91.719]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.5"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.armor") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.silver") + $.t("scavenger.level.5")
	}, {
		coords: [[73.156, 86.656]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.level.5"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.trous") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.boot") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.urs") + $.t("scavenger.item.steel") + $.t("scavenger.level.5")
	}, {
		coords: [[49.781, 101]],
		label: $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.level.5"),
		popup:$.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.armor") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.gaunt") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.trous") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.boot") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.steel") + $.t("scavenger.level.5") + $.t("<br />") + $.t("scavenger.dia") + $.t("scavenger.name.wol") + $.t("scavenger.item.silver") + $.t("scavenger.level.5")
	}],

	// Shopkeeper
	shopkeeper: [{
		coords: [
			[85.391, 72.594],  //after you cleared the Vineyard
			[50.719, 65.109],
			[63.734, 89.188],
			[47.9375, 64.5625]
		],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("shopkeeper.desc")
	}, {
		coords: [[113.047, 81.781]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("shopkeeper.desc") + ' ' + $.t("pid.rescue") + ' <a href="#6/112.703/81.891">' + $.t("pid.rescueLocation") + '</a>'
	}, {
		coords: [[75.656, 75.750]],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("shopkeeper.desc") + ' ' + $.t("pid.rescue") + ' <a href="#6/60.125/114.000">' + $.t("pid.rescueLocation") + '</a>'
	}],

	// (Side) Quests
	sidequests: [{
		coords: [[52.844,65]],
		label: $.t("Toussaint:sidequests.label.onlyone"),
		popup: $.t("Toussaint:sidequests.desc.onlyone") + $.t(' <a href="https://wiiare.in/witcher3/embodiment-of-the-five-virtues/" target="_blank">[Questhelp]</a>')
	}, {
		coords: [[74.60,77.00]],
		label: $.t("Toussaint:sidequests.label.wildkingdom"),
		popup: $.t("Toussaint:sidequests.desc.wildkingdom")
	}, {
		coords: [[74.60,76.50]],
		label: $.t("Toussaint:sidequests.label.kingforhire"),
		popup: $.t("Toussaint:sidequests.desc.kingforhire")
	}, {
		coords: [[52.063,60.797]],
		label: $.t("Toussaint:sidequests.label.facethestrage"),
		popup: $.t("Toussaint:sidequests.desc.facethestrage")
	}, {
		coords: [[83.891,55.156]],
		label: $.t("Toussaint:sidequests.label.knightstale"),
		popup: $.t("Toussaint:sidequests.desc.knightstale")
	}, {
		coords: [[49.578,62.969]],
		label: $.t("Toussaint:sidequests.label.tilldeath"),
		popup: $.t("Toussaint:sidequests.desc.tilldeath")
	}, {
		coords: [[50.719,65.875]],
		label: $.t("Toussaint:sidequests.label.master"),
		popup: $.t("Toussaint:sidequests.desc.master")
	}, {
		coords: [[52.281,65.234]],
		label: $.t("Toussaint:sidequests.label.granite"),
		popup: $.t("Toussaint:sidequests.desc.granite")
	}, {
		coords: [[52.844,64]],
		label: $.t("Toussaint:sidequests.label.smittenkight"),
		popup: $.t("Toussaint:sidequests.desc.smittenkight")
	}, {
		coords: [[52.844,64.5]],
		label: $.t("Toussaint:sidequests.label.placelikehome"),
		popup: $.t("Toussaint:sidequests.desc.placelikehome")
	}, {
		coords: [[50.453,63.734]],
		label: $.t("Toussaint:sidequests.label.paperchase"),
		popup: $.t("Toussaint:sidequests.desc.paperchase")
	}, {
		coords: [[51.438,63.797]],
		label: $.t("Toussaint:sidequests.label.portait"),
		popup: $.t("Toussaint:sidequests.desc.portait")
	}, {
		coords: [[42.625, 89.625]],
		label: $.t("Toussaint:sidequests.label.cosplay"),
		popup: $.t("Toussaint:sidequests.desc.cosplay")
	}, {
		coords: [[66.5, 75.203125]],
		label: $.t("Toussaint:sidequests.label.grist"),
		popup: $.t("Toussaint:sidequests.desc.grist")
	}, {
		coords: [[64.703125, 43.5]],
		label: $.t("Toussaint:sidequests.label.father"),
		popup: $.t("Toussaint:sidequests.desc.father")
	}, {
		coords: [[48.953125, 61.90625]],
		label: $.t("Toussaint:sidequests.label.sheers"),
		popup: $.t("Toussaint:sidequests.desc.sheers")
	}, {
		coords: [[55.421875, 73.1875]],
		label: $.t("Toussaint:sidequests.label.raging"),
		popup: $.t("Toussaint:sidequests.desc.raging")
	}, {
		coords: [[70.46875, 67.453125]],
		label: $.t("Toussaint:sidequests.label.hunger"),
		popup: $.t("Toussaint:sidequests.desc.hunger")
	}, {
		coords: [[57.796875, 87]],
		label: $.t("Toussaint:sidequests.label.jailbird"),
		popup: $.t("Toussaint:sidequests.desc.jailbird")
	}, {
		coords: [[98.359375, 58.59375]],
		label: $.t("Toussaint:sidequests.label.prophet"),
		popup: $.t("Toussaint:sidequests.desc.prophet")
	}, {
		coords: [[74.60,75.50]],
		label: $.t("sidequests.gwent") +$.t(": ") +$.t("Toussaint:sidequests.label.gw_tournment"),
		popup: $.t("Toussaint:sidequests.desc.gw_tournment")
	}, {
		coords: [[51.359375, 60.890625]],
		label: $.t("sidequests.gwent") +$.t(": ") +$.t("Toussaint:sidequests.label.gw_fear"),
		popup: $.t("Toussaint:sidequests.desc.gw_fear")
	}, {
		coords: [[47.3125, 63.203125]],
		label: $.t("sidequests.fist") +$.t(": ") +$.t("Toussaint:sidequests.label.ff_st"),
		popup: $.t("Toussaint:sidequests.desc.ff_st")
	}, {
		coords: [[94.546875, 82.28125]],
		label: $.t("treasure.label") +$.t(": ") +$.t("Toussaint:sidequests.label.tr_eightdays"),
		popup: $.t("Toussaint:sidequests.desc.tr_eightdays")
	}, {
		coords: [[96.0625, 89.5]],
		label: $.t("treasure.label") +$.t(": ") +$.t("Toussaint:sidequests.label.tr_stink"),
		popup: $.t("Toussaint:sidequests.desc.tr_stink")
	}, {
		coords: [[92.1875, 55.3125]],
		label: $.t("treasure.label") +$.t(": ") +$.t("Toussaint:sidequests.label.tr_stranger"),
		popup: $.t("Toussaint:sidequests.desc.tr_stranger")
	}, {
		coords: [[61.234375, 102.859375]],
		label: $.t("treasure.label") +$.t(": ") +$.t("Toussaint:sidequests.label.tr_filibert"),
		popup: $.t("Toussaint:sidequests.desc.tr_filibert")
	}, {
		coords: [[63.828125, 81.15625]],
		label: $.t("treasure.label") +$.t(": ") +$.t("Toussaint:sidequests.label.tr_widow"),
		popup: $.t("Toussaint:sidequests.desc.tr_widow")
	}, {
		coords: [[89.15625, 53.625]],
		label: $.t("treasure.label") +$.t(": ") +$.t("Toussaint:sidequests.label.tr_carnarvon"),
		popup: $.t("Toussaint:sidequests.desc.tr_carnarvon")
	}, {
		coords: [[24.328125, 72.6875]],
		label: $.t("treasure.label") +$.t(": ") +$.t("Toussaint:sidequests.label.tr_gardener"),
		popup: $.t("Toussaint:sidequests.desc.tr_gardener")
	}, {
		coords: [[44.28125, 64.8125]],
		label: $.t("treasure.label") +$.t(": ") +$.t("Toussaint:sidequests.label.tr_selina"),
		popup: $.t("Toussaint:sidequests.desc.tr_selina")
	}, {
		coords: [[69.375, 42.390625]],
		label: $.t("treasure.label") +$.t(": ") +$.t("Toussaint:sidequests.label.tr_experiment"),
		popup: $.t("Toussaint:sidequests.desc.tr_experiment")
	}, {
		coords: [[54.328125, 107.046875]],
		label: $.t("treasure.label") +$.t(": ") +$.t("Toussaint:sidequests.label.tr_doh"),
		popup: $.t("Toussaint:sidequests.desc.tr_doh")
	}, {
		coords: [[102.6875, 64.71875]],
		label: $.t("treasure.label") +$.t(": ") +$.t("Toussaint:sidequests.label.tr_again"),
		popup: $.t("Toussaint:sidequests.desc.tr_again")
	}, {
		coords: [[37.594,97.641]], //todo makers
		label: $.t("treasure.label") +$.t(": ") +$.t("Toussaint:sidequests.label.tr_spoon"),
		popup: $.t("Toussaint:sidequests.desc.tr_spoon")
	}, {
		coords: [[57.891,85.313]],
		label: $.t("treasure.label") +$.t(": ") +$.t("Toussaint:sidequests.label.tr_escapology"),
		popup: $.t("Toussaint:sidequests.desc.tr_escapology")
	}, {
		coords: [[77.141,42.5]],
		label: $.t("treasure.label") +$.t(": ") +$.t("Toussaint:sidequests.label.tr_suffering"),
		popup: $.t("Toussaint:sidequests.desc.tr_suffering")
	}, {
		coords: [[42.500,55.313]],
		label: $.t("treasure.label") +$.t(": ") +$.t("Toussaint:sidequests.label.tr_enjoytheplay"),
		popup: $.t("Toussaint:sidequests.desc.tr_enjoytheplay")
	}, {
		coords: [[74.60,76.00]],
		label: $.t("sidequests.winewars") +$.t(": ") +$.t("Toussaint:sidequests.label.ww_belgaard"),
		popup: $.t("Toussaint:sidequests.desc.ww_belgaard")
	}, {
		coords: [[99.328,79.219]],
		label: $.t("sidequests.winewars") +$.t(": ") +$.t("Toussaint:sidequests.label.ww_deus"),
		popup: $.t("Toussaint:sidequests.desc.ww_deus")
	}, {
		coords: [[93.734375, 65.5625]],
		label: $.t("sidequests.winewars") +$.t(": ") +$.t("Toussaint:sidequests.label.ww_consorting"),
		popup: $.t("Toussaint:sidequests.desc.ww_consorting")
	}, {
		coords: [[93.75, 65.90625]],
		label: $.t("sidequests.winewars") +$.t(": ") +$.t("Toussaint:sidequests.label.ww_coronata"),
		popup: $.t("Toussaint:sidequests.desc.ww_coronata")
	}, {
		coords: [[93.75, 66.234375]],
		label: $.t("sidequests.winewars") +$.t(": ") +$.t("Toussaint:sidequests.label.ww_vermentino"),
		popup: $.t("Toussaint:sidequests.desc.ww_vermentino")
	}, {
		coords: [[91.094,86.703]],
		label: $.t("sidequests.vintnercontract") +$.t(": ") +$.t("Toussaint:sidequests.label.vc_dun"),
		popup: $.t("Toussaint:sidequests.desc.vc_dun")
	}, {
		coords: [[49.047,92.781]],
		label: $.t("sidequests.vintnercontract") +$.t(": ") +$.t("Toussaint:sidequests.label.vc_cleaning"),
		popup: $.t("Toussaint:sidequests.desc.vc_cleaning")
	}, {
		coords: [[85.563,72.172]],
		label: $.t("sidequests.vintnercontract") +$.t(": ") +$.t("Toussaint:sidequests.label.vc_rivecalme"),
		popup: $.t("Toussaint:sidequests.desc.vc_rivecalme")
	}, {
		coords: [[79.640625, 53.65625]],
		label: $.t("sidequests.vintnercontract") +$.t(": ") +$.t("Toussaint:sidequests.label.vc_chuchote"),
		popup: $.t("Toussaint:sidequests.desc.vc_chuchote")
	}, {
		coords: [[56.265625, 44.34375]],
		label: $.t("sidequests.vintnercontract") +$.t(": ") +$.t("Toussaint:sidequests.label.vc_griffin"),
		popup: $.t("Toussaint:sidequests.desc.vc_griffin")
	}, {
		coords: [[94.609,50.297]],
		label: $.t("sidequests.bigfeet") +$.t(": ") +$.t("Toussaint:sidequests.label.bf_1"),
		popup: $.t("Toussaint:sidequests.desc.bf_1")
	}, {
		coords: [[92.063,63.344]],
		label: $.t("sidequests.bigfeet") +$.t(": ") +$.t("Toussaint:sidequests.label.bf_2"),
		popup: $.t("Toussaint:sidequests.desc.bf_2")
	}, {
		coords: [[89.781,56.984]],
		label: $.t("sidequests.bigfeet") +$.t(": ") +$.t("Toussaint:sidequests.label.bf_3"),
		popup: $.t("Toussaint:sidequests.desc.bf_3")
	}, {
		coords: [[107.750,72.266]],
		label: $.t("sidequests.bigfeet") +$.t(": ") +$.t("Toussaint:sidequests.label.bf_4"),
		popup: $.t("Toussaint:sidequests.desc.bf_4")
	}, {
		coords: [[101.484,61.531]],
		label: $.t("sidequests.bigfeet") +$.t(": ") +$.t("Toussaint:sidequests.label.bf_5"),
		popup: $.t("Toussaint:sidequests.desc.bf_5")
	}],

	// Signal Fire
	signalfire: [{
		coords: [
			[81.219,109.656],
			[117.016,71.484],
			[97.563,44.672]
		],
		label: $.t("Toussaint:signalfire.label"),
		popup: $.t("Toussaint:signalfire.desc")
	}],

	// Sign Post
	signpost: [{
		coords: [[85.578,74.844]],
		label: $.t("Toussaint:signpost.label.dulcineawindmill"),
		popup: $.t("Toussaint:signpost.desc.dulcineawindmill")
	}, {
		coords: [[76.563,75.891]],
		label: $.t("Toussaint:signpost.label.cockatrice"),
		popup: $.t("Toussaint:signpost.desc.cockatrice")
	}, {
		coords: [[70.719,69.219]],
		label: $.t("Toussaint:signpost.label.corvobianco"),
		popup: $.t("Toussaint:signpost.desc.corvobianco")
	}, {
		coords: [[58.594,55.828]],
		label: $.t("Toussaint:signpost.label.palace"),
		popup: $.t("Toussaint:signpost.desc.palace")
	}, {
		coords: [[52.188,53.859]],
		label: $.t("Toussaint:signpost.label.palacegardens"),
		popup: $.t("Toussaint:signpost.desc.palacegardens")
	}, {
		coords: [[49.188,67.703]],
		label: $.t("Toussaint:signpost.label.gate"),
		popup: $.t("Toussaint:signpost.desc.gate")
	}, {
		coords: [[39.563,79.563]],
		label: $.t("Toussaint:signpost.label.francollarts"),
		popup: $.t("Toussaint:signpost.desc.francollarts")
	}, {
		coords: [[77.813,41.813]],
		label: $.t("Toussaint:signpost.label.fort"),
		popup: $.t("Toussaint:signpost.desc.fort")
	}, {
		coords: [[91.297,47.344]],
		label: $.t("Toussaint:signpost.label.fox"),
		popup: $.t("Toussaint:signpost.desc.fox")
	}, {
		coords: [[85.422,55.938]],
		label: $.t("Toussaint:signpost.label.castelravello"),
		popup: $.t("Toussaint:signpost.desc.castelravello")
	}, {
		coords: [[47.969,78.094]],
		label: $.t("Toussaint:signpost.label.cemetry"),
		popup: $.t("Toussaint:signpost.desc.cemetry")
	}, {
		coords: [[55.359,88.313]],
		label: $.t("Toussaint:signpost.label.prison"),
		popup: $.t("Toussaint:signpost.desc.prison")
	}, {
		coords: [[46.781,92.297]],
		label: $.t("Toussaint:signpost.label.farm"),
		popup: $.t("Toussaint:signpost.desc.farm")
	}, {
		coords: [[46.406,99.547]],
		label: $.t("Toussaint:signpost.label.ruins"),
		popup: $.t("Toussaint:signpost.desc.ruins")
	}, {
		coords: [[35.734,94.438]],
		label: $.t("Toussaint:signpost.label.cottage"),
		popup: $.t("Toussaint:signpost.desc.cottage")
	}, {
		coords: [[27.500,80.031]],
		label: $.t("Toussaint:signpost.label.mutnaruins"),
		popup: $.t("Toussaint:signpost.desc.mutnaruins")
	}, {
		coords: [[48.063,63.016]],
		label: $.t("Toussaint:signpost.label.embassy"),
		popup: $.t("Toussaint:signpost.desc.embassy")
	}, {
		coords: [[53.859,63.641]],
		label: $.t("Toussaint:signpost.label.granplace"),
		popup: $.t("Toussaint:signpost.desc.granplace")
	}, {
		coords: [[64.734,64.125]],
		label: $.t("Toussaint:signpost.label.tunier"),
		popup: $.t("Toussaint:signpost.desc.tunier")
	}, {
		coords: [[96.391,59.031]],
		label: $.t("Toussaint:signpost.label.statue"),
		popup: $.t("Toussaint:signpost.desc.statue")
	}, {
		coords: [[34.719,67.375]],
		label: $.t("Toussaint:signpost.label.hortense"),
		popup: $.t("Toussaint:signpost.desc.hortense")
	}, {
		coords: [[64.609,90.953]],
		label: $.t("Toussaint:signpost.label.flovive"),
		popup: $.t("Toussaint:signpost.desc.flovive")
	}, {
		coords: [[69.688,115.422]],
		label: $.t("Toussaint:signpost.label.fortussar"),
		popup: $.t("Toussaint:signpost.desc.fortussar")
	}, {
		coords: [[78.328,107.422]],
		label: $.t("Toussaint:signpost.label.montcranecastle"),
		popup: $.t("Toussaint:signpost.desc.montcranecastle")
	}, {
		coords: [[82.219,85.750]],
		label: $.t("Toussaint:signpost.label.duntynnecastle"),
		popup: $.t("Toussaint:signpost.desc.duntynnecastle")
	}, {
		coords: [[79.984,94.141]],
		label: $.t("Toussaint:signpost.label.duntynnehillside"),
		popup: $.t("Toussaint:signpost.desc.duntynnehillside")
	}, {
		coords: [[113.828,74.422]],
		label: $.t("Toussaint:signpost.label.arthachpalaceruins"),
		popup: $.t("Toussaint:signpost.desc.arthachpalaceruins")
	}, {
		coords: [[110.344,66.078]],
		label: $.t("Toussaint:signpost.label.thesilversalamanderinn"),
		popup: $.t("Toussaint:signpost.desc.thesilversalamanderinn")
	}, {
		coords: [[104.281,80.156]],
		label: $.t("Toussaint:signpost.label.tradingpost"),
		popup: $.t("Toussaint:signpost.desc.tradingpost")
	}, {
		coords: [[93.203,73.578]],
		label: $.t("Toussaint:signpost.label.coronatavineyard"),
		popup: $.t("Toussaint:signpost.desc.coronatavineyard")
	}, {
		coords: [[88.438,100.969]],
		label: $.t("Toussaint:signpost.label.basanefarm"),
		popup: $.t("Toussaint:signpost.desc.basanefarm")
	}, {
		coords: [[65.719,74.813]],
		label: $.t("Toussaint:signpost.label.croixmill"),
		popup: $.t("Toussaint:signpost.desc.croixmill")
	}, {
		coords: [[57.328,64.453]],
		label: $.t("Toussaint:signpost.label.coopersgate"),
		popup: $.t("Toussaint:signpost.desc.coopersgate")
	}, {
		coords: [[54.844,68.781]],
		label: $.t("Toussaint:signpost.label.haborgate"),
		popup: $.t("Toussaint:signpost.desc.haborgate")
	}, {
		coords: [[58.500,70.047]],
		label: $.t("Toussaint:signpost.label.sansebastian"),
		popup: $.t("Toussaint:signpost.desc.sansebastian")
	}, {
		coords: [[55.859,72.984]],
		label: $.t("Toussaint:signpost.label.beauclairport"),
		popup: $.t("Toussaint:signpost.desc.beauclairport")
	}, {
		coords: [[92.188,90.406]],
		label: $.t("Toussaint:signpost.label.duntynnecrossroads"),
		popup: $.t("Toussaint:signpost.desc.duntynnecrossroads")
	}, {
		coords: [[93.547,66.094]],
		label: $.t("Toussaint:signpost.label.plegmundsbridge"),
		popup: $.t("Toussaint:signpost.desc.plegmundsbridge")
	}, {
		coords: [[78.234,52.672]],
		label: $.t("Toussaint:signpost.label.chuchotecave"),
		popup: $.t("Toussaint:signpost.desc.chuchotecave")
	}, {
		coords: [[76.953,65.938]],
		label: $.t("Toussaint:signpost.label.sansretourvalley"),
		popup: $.t("Toussaint:signpost.desc.sansretourvalley")
	}, {
		coords: [[58.563,42.484]],
		label: $.t("Toussaint:signpost.label.riouxcannesoutpost"),
		popup: $.t("Toussaint:signpost.desc.riouxcannesoutpost")
	}, {
		coords: [[44.078,54.172]],
		label: $.t("Toussaint:signpost.label.seidhellyghadamphitheater"),
		popup: $.t("Toussaint:signpost.desc.seidhellyghadamphitheater")
	}, {
		coords: [[43.031,70.906]],
		label: $.t("Toussaint:signpost.label.belgaardvineyard"),
		popup: $.t("Toussaint:signpost.desc.belgaardvineyard")
	}, {
		coords: [[45.078,65.547]],
		label: $.t("Toussaint:signpost.label.lebiodasgate"),
		popup: $.t("Toussaint:signpost.desc.lebiodasgate")
	}, {
		coords: [[71.750,100.203]],
		label: $.t("Toussaint:signpost.label.ardaisoquarry"),
		popup: $.t("Toussaint:signpost.desc.ardaisoquarry")
	}, {
		coords: [[59.938,100.188]],
		label: $.t("Toussaint:signpost.label.casteldacciaabandonedestate"),
		popup: $.t("Toussaint:signpost.desc.casteldacciaabandonedestate")
	}],

	// Smugglers' Cache
	smugglers: [],

	// Spoils of War
	spoils: [],
	
	// Treasure
	treasure: [{ //Surface Treause
		coords: [
			[90.594, 102.000],
			[78.625, 44.500],
			[92.656, 50.813],
			[86.531, 64.188],
			[93.375, 71.781],
			[94.594, 82.500],
			[47.313, 66.688]
		],
		label: $.t("treasure.treasure"),
		popup: $.t("treasure.desk")
	}, { //Underwater Treause
		coords: [
			[61.938, 80.219],
			[53.219, 105.188]
		],
		label: $.t("treasure.watertreasure"),
		popup: $.t("treasure.desk")
	}],

	// Vineyard Infestation
	vineyardinfestation: [{
		coords: [
			[75.469,62.594],
			[97.859,70.625],
			[46.453,75.563],
			[79.125,86.391],
			[77.875,95.344]
		],
		label: $.t("sidebar.vineyardinfestation"),
		popup: $.t("vineyardinfestation.desc")
	}]
};
