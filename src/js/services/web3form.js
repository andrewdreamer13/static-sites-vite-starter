

export async function sendToWeb3Forms(formData) {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  return {
    success: response.ok && data.success,
    message: data.message || "",
  };
}
