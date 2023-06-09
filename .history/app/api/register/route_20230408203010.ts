import bcrypt from "bcrypt";
import primsa from "@app/libs/primsadb";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await primsa.user.create({
    data: { email: email, name: name, password: password },
  });
}
