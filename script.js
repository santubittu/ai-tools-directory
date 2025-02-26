
/* styles.css */
:root {
    --primary-color: #00ff9d;
    --secondary-color: #7000ff;
    --bg-color: #0a0a0a;
    --glass-color: rgba(255, 255, 255, 0.05);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: var(--bg-color);
    color: white;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
}

/* Neon Text Animation */
.neon-text {
    position: relative;
    color: var(--primary-color);
    text-shadow: 0 0 10px var(--primary-color),
                 0 0 20px var(--primary-color),
                 0 0 30px var(--primary-color);
    animation: neonPulse 1.5s infinite alternate;
}

@keyframes neonPulse {
    from {
        filter: brightness(100%);
    }
    to {
        filter: brightness(150%);
    }
}

/* Floating Particles */
.particles {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background: radial-gradient(circle, transparent 20%, var(--bg-color) 80%);
}

/* Glassmorphism Cards */
.tool-card {
    background: var(--glass-color);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease;
}

.tool-card:hover {
    transform: translateY(-10px) rotateX(10deg) rotateY(10deg);
    box-shadow: 0 0 30px var(--primary-color);
}

/* Holographic Effect */
.holographic-header {
    background: linear-gradient(45deg,
        var(--primary-color),
        var(--secondary-color),
        #ff00ff);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    animation: hologram 3s infinite;
}

@keyframes hologram {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

/* Cyber Button */
.cyber-button {
    background: none;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    padding: 1rem 2rem;
    position: relative;
    overflow: hidden;
    transition: 0.3s;
}

.cyber-button:hover {
    text-shadow: 0 0 10px var(--primary-color);
    box-shadow: 0 0 20px var(--primary-color);
}

/* Scroll Animation Effects */
[data-scroll] {
    opacity: 0;
    transition: all 1s ease;
}

[data-scroll="in"] {
    opacity: 1;
    transform: translateY(0);
}
