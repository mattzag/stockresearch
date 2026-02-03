import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: { ticker: string } }
) {
  const ticker = params.ticker.toUpperCase();

  const res = await fetch(
    `https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=${process.env.FMP_API_KEY}`
  );

  const data = await res.json();

  return NextResponse.json(data);
}