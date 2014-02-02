module.exports = function(mongoose) {

  var Schema = mongoose.Schema;

  // Objeto modelo de Mongoose
  var UserSchema = new Schema({

    // Propiedad nombre
    name : String, // tipo de dato cadena de caracteres

    // Propiedad fecha de nacimiento
    birthdate : Date, // tipo de dato fecha

    isAdmin : Boolean // tipo de dato buleano

  });

  // metodo para calcular la edad a partir de la fecha de nacimiento
  UserSchema.methods.age = function() {

    return ~~((Date.now() - this.birthdate) / (31557600000));

  }

  return mongoose.model('User', UserSchema);
}