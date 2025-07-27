import { hash, compare } from "bcryptjs";


async function hashPassword(password: string): Promise<string> {
    const hashedPassword = await hash(password, 12)
    return hashedPassword
}

async function verifiedPassword(password: string, hashedPassword: string): Promise<boolean> {
    const isValid = await compare(password, hashedPassword)
    return isValid
}

export { hashPassword, verifiedPassword }