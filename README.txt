
Entremets - Micro bakery website (ready to deploy)

Files included:
- index.html                (homepage with pastry grid)
- chocolate-croissant.html  (example pastry page)
- strawberry-tart.html      (example pastry page)
- lemon-mousse.html         (example pastry page)
- styles.css                (site styles)
- script.js                 (small gallery JS)

How to use:
1. Download and unzip the folder.
2. Replace placeholder images (they currently reference Unsplash URLs) with your own images in an 'images' folder:
   - Update the <img src=""> attributes inside each HTML file to point to your images.
3. Replace the placeholder phone number (+15551234567) in the SMS links with your real phone number when ready.
   Example: href="sms:+1234567890?body=Hi!%20I%20would%20like%20to%20order%20the%20Chocolate%20Croissant%20(1)%20for%20pickup."
4. Host the folder on any static host (GitHub Pages, Netlify, Vercel, or simple hosting).

Notes:
- 'Text to Order' links work best on mobile devices. Desktop behavior depends on user's apps.
- To add more pastries, duplicate one of the pastry-*.html pages and add a card to index.html linking to it.
