const mongoose = require('mongoose')
	const Schema = mongoose.Schema
	let EventSchema = new Schema({
		id:{ type: String, require: true, unique:true },
		usuario_id:{ type: String, require: true },
		title:{ type: String, require: true },
		start:{ type: Date, require: true },
    end:{ type: Date, require: true}
	})
	let evento = mongoose.model('evento', EventSchema)
	module.exports = evento
