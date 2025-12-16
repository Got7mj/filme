import { NextResponse } from 'next/server';

export async function GET() {
  const dados = [
    { id: 1, titulo: 'Matrix' },
    { id: 2, titulo: 'Inception' }
  ];
  return NextResponse.json(dados);
}
