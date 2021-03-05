import bcrypt from 'bcryptjs';
import Mongoose, { Schema } from 'mongoose';
import mongooseDelete from 'mongoose-delete';

const schema = new Schema(
	{
		firstName: String,
		lastName: String,
		email: String,
		password: String
	},
	{
		timestamps: true
	}
);

schema.plugin(mongooseDelete, {
	overrideMethods: 'all',
	deletedAt: true
});

schema.methods.fullName = function () {
	return `${this.firstName} ${this.lastName}`;
};

schema.methods.verifyPassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

schema.pre('save', async function () {
	this.password = await bcrypt.hash(this.password, 10);
});

export default Mongoose.model('User', schema);
