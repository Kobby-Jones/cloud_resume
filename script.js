const visitorCount = document.getElementById('visitor-count')

async function getVisitorCount() {
    try{
        const response = await fetch('https://ioqtqbzhka.execute-api.us-west-2.amazonaws.com/visitors')
        const data = await response.json()
        visitorCount.textContent = data.visitor_count
    } catch (error) {
        console.error("Error fetching visitor count:", error);
        document.getElementById("visitor-count").textContent = "N/A";
      }
  
}

getVisitorCount()