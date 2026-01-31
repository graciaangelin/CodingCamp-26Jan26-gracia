// --- FUNGSI NAMA ---
function handleGreeting() {
    let user = sessionStorage.getItem("visitorName");

    if (!user) {
        user = prompt("Selamat datang di Lavender Florist! Masukkan nama anda:", "");
        if (user) {
            sessionStorage.setItem("visitorName", user);
        } else {
            user = "Pelanggan";
            sessionStorage.setItem("visitorName", user);
        }
    }

    console.log("Current User: " + user);

    let display = document.getElementById("display-name");
    if (display) {
        display.innerText = user;
    }
}

handleGreeting();

// --- FUNGSI VALIDASI FORM MESSAGE ---
let form = document.getElementById("messageForm"); 

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        let nama = document.getElementById("input-nama").value;
        let tgl = document.getElementById("input-tgl").value;
        let gender = document.querySelector('input[name="gender"]:checked').value;
        let pesan = document.getElementById("input-pesan").value;

        console.log("Form Berhasil Terkirim!");

        // Update bagian result box 
        document.getElementById("res-time").innerText = new Date().toLocaleString();
        document.getElementById("res-nama").innerText = nama;
        document.getElementById("res-tgl").innerText = tgl;
        document.getElementById("res-gender").innerText = gender;
        document.getElementById("res-pesan").innerText = pesan;
        
        alert("Pesan Terkirim!");
    });
}

