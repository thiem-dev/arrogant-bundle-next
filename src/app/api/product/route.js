import product from './product-data-hardcode';
import { NextRequest, NextResponse } from 'next/server';

// GET ALL
export const GET = () => {
  try {
    return NextResponse.json(product);
  } catch (error) {
    error.message('no data here');
    return new Response(`Error Message: ${error.message}`, { status: 400 });
  }
};
