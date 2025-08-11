export default function handler(req, res) {
  const target = "movii-l.vercel.app"; // without https://
  const ua = (req.headers['user-agent'] || '').toLowerCase();

  if (ua.includes("android")) {
    // Android Chrome intent
    res.writeHead(302, {
      Location: `intent://${target}#Intent;scheme=https;package=com.android.chrome;end;`
    });
  } else if (ua.includes("iphone") || ua.includes("ipad")) {
    // iOS - Safari
    res.writeHead(302, {
      Location: `https://${target}`
    });
  } else {
    // Other platforms fallback
    res.writeHead(302, {
      Location: `https://${target}`
    });
  }
  res.end();
}
