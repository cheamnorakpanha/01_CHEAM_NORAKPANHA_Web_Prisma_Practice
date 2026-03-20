import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Get students by ID
export async function GET(_, { params }) {
    const { id } = await params;
    const data = await prisma.studentTable.findUnique({
        where: {
            // id: Number(id)
            id: parseInt(id)
        }
    })

    return NextResponse.json({
        success: true,
        status: 200,
        message: "Student fetched successfully.",
        payload: data
    })
}

// Update student
export async function PUT(request, { params }) {
    const { id } = await params;
    const content = await request.json();

    const data = await prisma.studentTable.update({
        where: { id: parseInt(id) },
        data: {
            name: content.name,
            email: content.email,
            class: content.class
        }
    })

    return NextResponse.json({
        success: true,
        status: 200,
        message: "Student updated successfully.",
        payload: data
    })
}

// Delete student
export async function DELETE(_, {params}) {
    const { id } = await params;
    
    await prisma.studentTable.delete({
        where: {id: parseInt(id)}
    })

    return NextResponse.json({
        success: true,
        status: 200,
        message: "Student deleted successfully."
    })
}
