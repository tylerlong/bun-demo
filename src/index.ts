const notifications: any[] = [];

const server = Bun.serve({
  port: 3000,
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname.endsWith("/") ? url.pathname : url.pathname + "/";
    if (path === "/webhook/" && request.method === "POST") {
      try {
        const body = await request.json();
        notifications.push(body);
        if (notifications.length > 100) {
          notifications.shift();
        }
      } catch {
        // not json, ignore
      }
      const validationToken = request.headers.get("Validation-Token");
      const headers = {
        "Content-Type": "text/plain",
      };
      if (validationToken) {
        headers["Validation-Token"] = validationToken;
      }
      return new Response("OK", { headers });
    } else if (path === "/read/" && request.method === "GET") {
      return new Response(JSON.stringify(notifications, null, 2), {
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response("404: Page Not Found", { status: 404 });
    }
  },
});
