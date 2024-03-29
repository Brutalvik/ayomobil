import bcrypt from "bcrypt";
import prisma from "@/app/Libs/Prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password, phone } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      phone,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
