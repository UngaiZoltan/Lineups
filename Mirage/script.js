    const container = document.getElementById("swapContainer");
    const image = document.getElementById("smokeImage");
    const tutorial = document.getElementById("tutorialText");

    let isActive = false;

    container.addEventListener("click", () => {
        // Indítjuk a mozgást
        container.classList.toggle("active");

        // Halványítás indul azonnal
        image.style.opacity = 0;
        tutorial.style.opacity = 0;

        // 0.3s után: tartalomcsere
        setTimeout(() => {
            if (!isActive) {
                image.src = "images/where-to-aim-mirage-smoke-lineup-from-t-spawn.png"; // új kép
                tutorial.textContent = "Aim here and jump throw";  // új szöveg
            } else {
                image.src = "images/where-to-stand-mirage-smoke-lineup-from-t-spawn.png"; // vissza
                tutorial.textContent = "tutorial"; // vissza
            }

            // Visszaélénkülés
            image.style.opacity = 1;
            tutorial.style.opacity = 1;

            // Frissítjük az állapotot
            isActive = !isActive;
        }, 300); // 0.3s = halványítás ideje
    });

