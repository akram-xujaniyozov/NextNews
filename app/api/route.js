export function GET(request) {
  console.log(request);
  //   return new Response('API Route is working!');
  return Response.json({ message: 'API Route is working!', status: '200' });
}

export function POST(request) {
  return new Response('POST request received!');
}
