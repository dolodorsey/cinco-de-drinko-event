export const metadata = {
  title: 'CINCO DE DRINKO | Taco Tuesday Edt. · Atlanta',
  description: 'The Cinco de Mayo Block Party. Tacos, Tequila & Vibes. A KHG HugLife Event.',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700;800;900&family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
              <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: '{"@context": "https://schema.org", "@type": "Event", "name": "Cinco de Mayo Block Party", "description": "Atlanta's biggest annual block party. Tacos, tequila, music, and the entire neighborhood showing up.", "url": "https://cincodedrinko.com", "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode", "location": {"@type": "Place", "name": "Atlanta, GA", "address": {"@type": "PostalAddress", "addressLocality": "Atlanta", "addressRegion": "GA"}}, "organizer": {"@type": "Organization", "name": "HugLife Events", "url": "https://huglife.com"}}'
          }}
        />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#080808' }}>
        {children}
      </body>
    </html>
  )
}
