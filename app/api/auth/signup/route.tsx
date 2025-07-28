import { User } from "@/models/user";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server"


type RegisterRequestBody = {
    email: string;
    password: string;
};

export async function POST(req: Request): Promise<NextResponse> {
    try {
        await connectDB();
        const { email, password } = (await req.json()) as RegisterRequestBody;
        if (!email || !password) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        const hashedPassword = await hashPassword(password)
        const newUser = await User.create({
            email: email,
            password: hashedPassword
        });
        console.log(newUser, "new user")
        return NextResponse.json({ message: "User created successfully" }, { status: 201 });
    } catch (err) {
        console.log(err)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }

}