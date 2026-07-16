const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  console.log(parsedUrl.pathname);

  if (parsedUrl.pathname === '/product') {
    const { name, price, discount } = parsedUrl.query;

    const originalPrice = Number(price);
    const discountPercent = Number(discount);
    const finalPrice =
      originalPrice - (originalPrice * discountPercent) / 100;

    fs.appendFileSync(
      'searches.txt',
      `Product: ${name}, Final Price: ${finalPrice}\n`
    );

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<h2>Final Price: ${finalPrice}</h2>`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 - Page Not Found</h1>');
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
