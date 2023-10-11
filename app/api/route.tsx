import { BASE_URL } from "@/app/config"
export async function GET() {
    if (!BASE_URL) {
        return new Response("Movie base URL not found", {
            status: 404,
        });
    }
   
    try {
        const request = await fetch(`${BASE_URL}/coffee/`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
               
            },
        });
        if (!request.ok) {
            throw new Error(`Request failed with status ${request.status}`);
        }
        const responseJson = await request.json();
        return new Response(JSON.stringify(responseJson), {
            status: 200,
            statusText: 'Success',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error:any) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}