// script.js

document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in-section');

    const appearOptions = {
        threshold: 0.2,
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('is-visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = "rgba(242, 247, 255, 0.9)";
    } else {
        navbar.style.backgroundColor = "rgba(255, 240, 245, 0.9)";
    }
});

// Page Loader Script
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
});


particlesJS.load('particles-js', 'assets/particles/particles.json', function() {
    console.log('Particles loaded successfully!');
  });

// === Skill Graph using vis-network ===

const skillNodes = [
    // Core Nodes
    { id: 1, label: "Python", color: "#ffd6e7" },
    { id: 2, label: "SQL", color: "#ffd6e7" },
    { id: 3, label: "Power BI", color: "#ffd6e7" },
    { id: 4, label: "Azure", color: "#ffd6e7" },
    { id: 5, label: "Machine Learning", color: "#ffd6e7" },
    { id: 6, label: "Artificial Intelligence", color: "#ffd6e7" },
  
    // Data Engineering & Databases
    { id: 10, label: "DBMS", color: "#d4e8fc" },
    { id: 11, label: "NoSQL", color: "#d4e8fc" },
    { id: 12, label: "Snowflake", color: "#d4e8fc" },
    { id: 13, label: "ETL Pipelines", color: "#d4e8fc" },
    { id: 14, label: "SSIS", color: "#d4e8fc" },
  
    // Data Viz & BI
    { id: 20, label: "Tableau", color: "#e0f7fa" },
    { id: 21, label: "ArcGIS", color: "#e0f7fa" },
    { id: 22, label: "SSRS", color: "#e0f7fa" },
    { id: 23, label: "Cognos Analytics", color: "#e0f7fa" },
  
    // Data Science Techniques
    { id: 30, label: "Predictive Analytics", color: "#f9f4ff" },
    { id: 31, label: "Sentiment Analysis", color: "#f9f4ff" },
    { id: 32, label: "Anomaly Detection", color: "#f9f4ff" },
    { id: 33, label: "Web Scraping", color: "#f9f4ff" },
  
    // Cloud & DevOps
    { id: 40, label: "AWS", color: "#fff0f5" },
    { id: 41, label: "Hadoop", color: "#fff0f5" },
    { id: 42, label: "Spark", color: "#fff0f5" },
  
    // ML & AI Techniques
    { id: 50, label: "Neural Networks", color: "#fcefe5" },
    { id: 51, label: "Reinforcement Learning", color: "#fcefe5" },
    { id: 52, label: "Chatbot Development", color: "#fcefe5" },
    { id: 53, label: "Computer Vision", color: "#fcefe5" },
    { id: 54, label: "NLP", color: "#fcefe5" },
    { id: 55, label: "LLMs", color: "#fcefe5" },
  
    // Libraries & Tools
    { id: 60, label: "TensorFlow", color: "#e3ffe6" },
    { id: 61, label: "Scikit-learn", color: "#e3ffe6" },
    { id: 62, label: "Pandas", color: "#e3ffe6" },
    { id: 63, label: "NumPy", color: "#e3ffe6" },
    { id: 64, label: "Matplotlib", color: "#e3ffe6" },
    { id: 65, label: "Hugging Face", color: "#e3ffe6" },
    { id: 66, label: "OpenCV", color: "#e3ffe6" },
    { id: 67, label: "NLTK", color: "#e3ffe6" },
  
    // Statistics & Algorithms
    { id: 70, label: "Logistic Regression", color: "#f0ebff" },
    { id: 71, label: "Decision Trees", color: "#f0ebff" },
    { id: 72, label: "Random Forest", color: "#f0ebff" },
    { id: 73, label: "XGBoost", color: "#f0ebff" },
  
    // Business & Strategy
    { id: 80, label: "Project Management", color: "#fff9e0" },
    { id: 81, label: "Business Process", color: "#fff9e0" },
    { id: 82, label: "Forecasting", color: "#fff9e0" },
    { id: 83, label: "BPMN", color: "#fff9e0" }
  ];
  
  const skillEdges = [
    // Python & its ecosystem
    { from: 1, to: 60 }, // Python to TensorFlow
    { from: 1, to: 61 }, // Python to Scikit-learn
    { from: 1, to: 62 }, // Python to Pandas
    { from: 1, to: 63 }, // Python to NumPy
    { from: 1, to: 64 }, // Python to Matplotlib
    { from: 1, to: 33 }, // Python to Web Scraping
    { from: 1, to: 67 }, // Python to NLTK
  
    // AI / ML
    { from: 5, to: 50 }, { from: 5, to: 51 }, { from: 5, to: 54 }, { from: 5, to: 70 },
    { from: 5, to: 71 }, { from: 5, to: 72 }, { from: 5, to: 73 }, { from: 5, to: 30 },
    { from: 5, to: 31 }, { from: 5, to: 32 },
  
    // AI → more libraries/tools
    { from: 6, to: 65 }, // Hugging Face
    { from: 6, to: 66 }, // OpenCV
    { from: 6, to: 67 }, // NLTK
    { from: 6, to: 52 }, // Chatbot Development
    { from: 6, to: 53 }, // Computer Vision
    { from: 6, to: 55 }, // LLMs
  
    // Data Engineering
    { from: 2, to: 10 }, // SQL to DBMS
    { from: 2, to: 11 }, // SQL to NoSQL
    { from: 2, to: 12 }, // SQL to Snowflake
    { from: 2, to: 13 }, // SQL to ETL
    { from: 2, to: 14 }, // SQL to SSIS
  
    { from: 1, to: 13 }, // Python to ETL
    { from: 4, to: 13 }, // Azure to ETL
    { from: 4, to: 14 }, // Azure to SSIS
  
    // Data Viz & BI
    { from: 3, to: 20 }, { from: 3, to: 21 }, { from: 3, to: 22 }, { from: 3, to: 23 },
    { from: 2, to: 3 },   // SQL → Power BI
    { from: 4, to: 3 },    // Azure → Power BI

    // Cloud
    { from: 4, to: 40 }, // Azure to AWS
    { from: 4, to: 41 }, { from: 4, to: 42 }, // Azure to Hadoop/Spark
    { from: 40, to: 60 }, // AWS to TensorFlow
    { from: 40, to: 65 }, // AWS to Hugging Face
  
    // Business & Strategy
    { from: 6, to: 80 }, { from: 6, to: 81 }, { from: 6, to: 82 }, { from: 6, to:83 }
 ];
  
  const container = document.getElementById("skillGraph");
  const data = {
    nodes: new vis.DataSet(skillNodes),
    edges: new vis.DataSet(skillEdges)
  };
  
  const options = {
    layout: { improvedLayout: true },
    nodes: {
      shape: "dot",
      size: 16,
      font: { size: 14, color: "#333" },
      borderWidth: 2
    },
    edges: {
      width: 1.5,
      color: { color: "#ccc", highlight: "#79a7d3" },
      smooth: { type: "dynamic" }
    },
    physics: {
        enabled: true,
        solver: "barnesHut",
        barnesHut: {
          gravitationalConstant: -2000,
          centralGravity: 0.3,
          springLength: 150,
          springConstant: 0.04,
          damping: 0.09,
          avoidOverlap: 0.5
        },
        stabilization: {
          iterations: 250
        }
      },
      interaction: {
        hover: true,
        tooltipDelay: 150
      }
    };
    /*physics: {
      enabled: true,
      stabilization: { iterations: 200 },
      solver: "forceAtlas2Based"
    },
    interaction: {
      hover: true,
      tooltipDelay: 150
    }
  }; */
  const network = new vis.Network(container, data, options);
  network.once("stabilizationIterationsDone", function () {
    network.fit({
      animation: {
        duration: 1000,
        easingFunction: "easeInOutQuad"
      }
    });
  });
