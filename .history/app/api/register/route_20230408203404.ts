import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("HERFCSD");
  const body = await request.json();
  const { email, name, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await primsa.user.create({
    data: { email: email, name: name, password: hashedPassword },
  });

  return NextResponse.json(user);
}