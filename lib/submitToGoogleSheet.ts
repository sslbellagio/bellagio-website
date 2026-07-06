export async function submitToGoogleSheet(data: any): Promise<void> {
  const url = 'https://script.google.com/macros/s/AKfycbzkchBtcdhXsdtR1R1P7RosiAvDhoPFS2zaZIsFpIMOdnj6DPJUp0tONUPWBpY3pN7m/exec'

  try {
    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}
