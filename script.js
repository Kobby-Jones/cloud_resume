const visitorCount = document.getElementById('visitor-count')
const contactForm = document.getElementById('contact-form')
const person_name = document.getElementById("name")
const email = document.getElementById("email")
const message = document.getElementById("message")

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

async function onSubmit(){
    const response = await fetch("https://iubobq9vhj.execute-api.us-west-2.amazonaws.com/dev/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ person_name, email, message })
    });

    const result = await response.json();
    alert(result.message);

}

