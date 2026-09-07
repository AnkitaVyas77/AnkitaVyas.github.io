I’m a **McGill M.Sc. graduate** with 3+ years of industry experience building data systems, ML workflows, and automation. I like problems where the data is messy, the answer isn’t obvious, and engineering decisions actually matter.

My work has taken me from **large-scale AML data pipelines at American Express**, to researching **LLM reliability and automated validation**, to designing an **AWS + ML platform for building retrofit cost estimation**.

Along the way, I’ve learned that good AI is rarely just about the model — the data, validation, infrastructure, and product decisions around it matter just as much.

📍 Montreal, Canada  
🎓 M.Sc., McGill University — July 2026  
📄 Research published at **IEEE RE 2026 – MoDRE**

[About me](about.md) • [Explore my projects](projects.md)

---

# 🚀 Featured Work

## 🏗️ ML-Powered Retrofit Cost Estimator

Designed an end-to-end **AWS data and ML platform** for the ReConstruct Initiative to estimate the cost of building retrofit projects.

The interesting part? We had limited historical data, so the system had to be useful today while also being designed to improve as more projects were collected.

I worked across:

**AWS data architecture → ETL → feature engineering → model experimentation → uncertainty estimation → Django/Docker deployment**

I compared Bayesian Ridge Regression and Gaussian Process Regression and selected GPR after it delivered roughly **10% better predictive performance** while also providing useful uncertainty ranges.

Through better feature logic and data-quality handling, prediction accuracy improved from roughly **60% to 80%**.

👉 [Read the project story](projects.md#-ml-powered-retrofit-cost-estimation-platform)

---

## 🔬 Making LLM Discoveries Verifiable

For my Master's research, I explored a question I find increasingly important:

> **How do we know whether something discovered by an LLM is actually true?**

I analyzed **42k+ DevOps YAML pipelines** using:

**SBERT → K-Means → LLM prompting → FP-Growth → automated validation**

When evaluation showed that many LLM-discovered patterns did not actually occur in the data, I built a statistical mining pipeline and a reusable validator framework to objectively verify them.

The validator uses a domain-specific language and model-to-text transformation to automatically generate **Java validation programs**.

📄 This research was published at **IEEE RE 2026 through the MoDRE workshop**.

👉 [See how it works](projects.md#-pattern-discovery--automated-pattern-validation)

---

## ⚡ From 3 Hours to 30 Minutes

At **TCS supporting American Express**, I spent three years working on large-scale AML data systems involving customer, merchant, fraud, and risk data.

One production transformation over a multi-billion-row dataset was taking around **3 hours** and missing its SLA.

After profiling the workload, optimizing the SQL, moving execution from Hive to Spark SQL, and distributing intermediate processing, runtime dropped to roughly:

### **3 hours → 30 minutes ⚡**

I also owned two major AML reporting workflows from requirements through production deployment.

👉 [Read the case study](projects.md#-anti-money-laundering-data-platforms--reporting)

---

## 🚗 Computer Vision Before It Was Cool

For my Bachelor's capstone, I led a team building a prototype for detecting road accidents from highway surveillance footage using **SSD MobileNet, TensorFlow, Python, and OpenCV**.

It was my first experience taking an ML idea from dataset collection through experimentation and into a working end-to-end prototype.

The related research was also published in the **International Journal of Mobile Computing Devices**.

👉 [Project details](projects.md#-road-accident-detection-with-computer-vision)

---

# 🧰 My Toolkit

### Data Engineering
`Python` `SQL` `Spark` `PySpark` `Hive` `Hadoop` `HDFS` `ETL` `PostgreSQL`

### Cloud & Engineering
`AWS` `S3` `Glue` `Athena` `Lake Formation` `Docker` `Django` `Git` `GitHub` `Jenkins` `CI/CD`

### Machine Learning & AI
`scikit-learn` `Pandas` `NumPy` `LLMs` `SBERT` `Clustering` `FP-Growth` `RAG` `Prompt Engineering` `AI Agents`

### Research & Language Engineering
`Java` `Xtext` `Acceleo` `Model-Driven Engineering` `Code Generation`

---

# 💡 What I Enjoy

- Building data systems that people can actually rely on
- Figuring out why an ML model succeeds — or fails
- Turning manual workflows into automation
- Exploring LLM reliability and evaluation
- Working across the full path from **raw data → system → useful product**
- Learning technologies by building something with them

---

# 👋 Let's Connect

I’m interested in opportunities across **Data Engineering, Machine Learning Engineering, Applied AI, and Data Science**, especially where I can take ownership of meaningful technical problems.

📧 [ankitavyas1999@gmail.com](mailto:ankitavyas1999@gmail.com)  
💼 [LinkedIn](https://www.linkedin.com/in/ankitavyas77)  
💻 [GitHub](https://github.com/AnkitaVyas77)
