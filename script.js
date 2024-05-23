// Fetch data from the API and update the content
function updateCryptoData() {
    // Define the API endpoint
    const bitcoinEndpoint = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';
    const ethereumEndpoint = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd';
  
    // Fetch Bitcoin data
    fetch(bitcoinEndpoint)
      .then(response => response.json())
      .then(data => {
        const bitcoinValue = data.bitcoin.usd;
        document.getElementById('bitcoin-card').innerHTML = `<data class="card-value" value="${bitcoinValue}">USD ${bitcoinValue}</data>`;
      });
  
    // Fetch Ethereum data
    fetch(ethereumEndpoint)
      .then(response => response.json())
      .then(data => {
        const ethereumValue = data.ethereum.usd;
        document.getElementById('ethereum-card').innerHTML = `<data class="card-value" value="${ethereumValue}">USD ${ethereumValue}</data>`;
      });
  
    // Repeat the above fetch process for other cryptocurrencies if needed
  }
  
  // Call the function initially to update the content when the page loads
  updateCryptoData();
  
  // Update the data every 30 seconds (or any desired interval)
  setInterval(updateCryptoData, 30000);
  

    /* Define the animation */
@keyframes titleAnimation {
  0% { transform: rotateY(0deg); } /* Starting position */
  50% { transform: rotateY(180deg); } /* Halfway point */
  100% { transform: rotateY(360deg); } /* Full rotation */
}

document.addEventListener('DOMContentLoaded', function() {
  animateTitle();
});

function animateTitle() {
  const title = document.title;
  let index = 0;

  setInterval(function() {
    index = (index + 1) % title.length;
    document.title = title.substring(index) + title.substring(0, index);
  }, 300); // Adjust the speed of animation (in milliseconds)
}
