const mongoose = require('mongoose')
	const Schema = mongoose.Schema
	let UserSchema = new Schema({
		email:{ type: String, require: true, unique:true },
		password:{ type: String, require: true },
		nombre:{ type: String, require: true },
		apellido:{ type: String, require: true },
		fecha_nacimiento:{ type: Date, require: true}
	})
	let user = mongoose.model('user', UserSchema)
	module.exports = user
