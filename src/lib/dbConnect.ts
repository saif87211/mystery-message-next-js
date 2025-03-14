import mongoose from "mongoose";

type ConnectionObject = {
	isConnected ? : number
}

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
	//important: check db is already connected or not (edge time running in next js)
	//mongodb allowed multiple connection but too much create db choking
	if (connection.isConnected) {
		console.log("Already connected to db.")
		return;
	}

	try {
		//next js automatically handle env variables
		const db = await mongoose.connect(process.env.MONGODB_URL || "", {});
		console.log("db: ", db);

        connection.isConnected = db.connections[0].readyState;

		console.log("DB connected successfully!!");
	} catch (error) {
		console.log("DB connection failed ", error);
		process.exit(1);
	}
}

export default dbConnect;