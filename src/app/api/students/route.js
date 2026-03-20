import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// Create student
export async function POST(request) {
    const body = await request.json();
    const student = await prisma.studentTable.create({
        data: {
            name: body.name,
            email: body.email,
            class: body.class
        }
    })

    return NextResponse.json({
        success: true,
        message: "Students created successfully.",
        payload: student,
    })
}

// Get all students
// export async function GET() {
//     const student = await prisma.studentTable.findMany();

//     return NextResponse.json({
//         success: true,
//         message: "Students retrieved successfully.",
//         payload: student,
//     })
// }

// Search student by name
export async function GET(request) {
    const {searchParams } = new URL(request.url);
    const name = searchParams.get("name");
    const searchByName = await prisma.studentTable.findMany({
        where: {
            name: {
                contains: name,
                mode: "insensitive"
            }
        }
    })

    return NextResponse.json({
        success: true,
        status: 200,
        message: "Search student successfully.",
        payload: searchByName
    })
}