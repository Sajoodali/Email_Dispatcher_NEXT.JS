export function generateEmailTemplate(message) {
  const currentYear = new Date().getFullYear();
  
  return `
    <!DOCTYPE html>
    <html>
      <body style="font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f0f9ff;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0f9ff; padding: 20px 0;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #0891b2 0%, #1e40af 100%); padding: 40px; text-align: center;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center">
                          <img src="https://www.globiumclouds.com/GC-Logo.jpg" alt="Globium Clouds" style="width: 60px; height: 60px; border-radius: 12px; margin-bottom: 16px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); object-fit: cover;" />
                        </td>
                      </tr>
                      <tr>
                        <td align="center">
                          <h1 style="margin: 0; font-size: 32px; letter-spacing: -0.5px; font-weight: 700; color: white;">Globium Clouds</h1>
                          <p style="margin: 8px 0 0 0; font-size: 14px; color: rgba(255,255,255,0.9); font-weight: 500;">Enterprise Email Solutions</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Banner -->
                <tr>
                  <td style="padding: 24px 40px; background: linear-gradient(to right, #ecfeff, #dbeafe); border-bottom: 1px solid #bae6fd; text-align: center;">
                    <p style="margin: 0; font-size: 14px; color: #0891b2; font-weight: 600;">
                      🔔 New Secure Communication
                    </p>
                  </td>
                </tr>

                <!-- Main Content -->
                <tr>
                  <td style="padding: 48px 40px;">
                    <h2 style="color: #1f2937; margin: 0 0 24px 0; font-size: 24px; font-weight: 700;">New Message Received</h2>
                    <div style="background: #f9fafb; border-left: 4px solid #0891b2; padding: 24px; border-radius: 8px; margin: 24px 0;">
                      <div style="white-space: pre-wrap; color: #374151; font-size: 16px; line-height: 1.8;">
                        ${message}
                      </div>
                    </div>
                    <div style="margin-top: 32px; text-align: center;">
                      <a href="https://www.globiumclouds.com" style="display: inline-block; padding: 16px 32px; background: linear-gradient(135deg, #0891b2 0%, #1e40af 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 12px rgba(8, 145, 178, 0.3); transition: all 0.3s;">
                        Visit Our Website →
                      </a>
                    </div>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background: linear-gradient(to bottom, #fafafa, #f4f4f5); padding: 32px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
                    <p style="margin: 0 0 12px 0; font-weight: 700; color: #374151; font-size: 14px;">Globium Clouds | Modern Enterprise Solutions</p>
                    <p style="margin: 0 0 12px 0; font-size: 13px; color: #6b7280; line-height: 1.6;">
                      House R-84, near Al-Habeeb Restaurant<br/>
                      Sector 15-A/4 Buffer Zone, Karachi Lines<br/>
                      Karachi, Pakistan
                    </p>
                    <p style="margin: 0 0 16px 0; font-size: 13px;">
                      <a href="https://www.globiumclouds.com" style="color: #0891b2; text-decoration: none; font-weight: 500;">www.globiumclouds.com</a>
                      <span style="color: #d1d5db; margin: 0 8px;">|</span>
                      <a href="mailto:globiumclouds@gmail.com" style="color: #0891b2; text-decoration: none; font-weight: 500;">globiumclouds@gmail.com</a>
                    </p>
                    <div style="border-top: 1px solid #e5e7eb; padding-top: 16px; margin-top: 16px;">
                      <p style="margin: 0; font-size: 12px; color: #9ca3af;">© ${currentYear} Globium Clouds. All rights reserved.</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}
