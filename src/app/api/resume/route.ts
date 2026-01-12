import { renderToBuffer } from '@react-pdf/renderer';
import { NextResponse } from 'next/server';
import { ResumePDF } from '@/app/resume/components/ResumePDF';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Generate PDF buffer from the React component
    const pdfBuffer = await renderToBuffer(ResumePDF());

    // Return as downloadable PDF
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Nick_Kulavic_Resume.pdf"',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF resume' },
      { status: 500 }
    );
  }
}
