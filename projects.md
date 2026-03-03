# Projects

These projects reflect how I approach data problems end to end: understanding the domain, designing reliable pipelines, validating results, and improving performance. They span production big data systems (fintech), applied ML and LLM evaluation (research), and computer vision (bachelor’s capstone).

---

## 1) American Express AML Data Pipelines and Reporting (Fintech)

**Role:** Big Data Developer (3 years) • Owner for 2 major reports  
**Platform:** On-prem AmEx stack using **Cornerstone** (internal big data platform + central data warehouse) with event-driven **batch processing**  
**Tools/Tech:** SQL, **HQL**, Hive, Spark, PySpark, Hadoop/HDFS, Unix/Shell, Python, GitHub, Jenkins, PuTTY, Jira, Rally, Confluence  
**Domains:** Fraud, disputes, risk, customer, merchant (AML investigatory reporting)  
**Highlight:** Reduced a core transformation query from **~3 hours → ~30 minutes** by migrating Hive → Spark SQL and partitioning execution

### What I built
- Implemented **batch ingestion** pipelines for tables using event engines on Cornerstone  
- Developed an ingestion and **risk table setup** with batch processing on the data lake  
- Built automated reporting workflows for AML analysts, producing outputs as **Excel reports** and curated tables  
- Owned **2 major reports** (lead merchant report + risk reporting) from requirements to production
- Mentored new team members on the infrastruture, and efficient delegation of work when required.

### How I worked (end-to-end ownership with collaboration)
- Gathered requirements from AML analysts and aligned definitions across stakeholders  
- Studied data structures and selected the right source tables for each report  
- Wrote and maintained **HQL/SQL** pipelines, automated run scripts, and optimized query performance  
- Coordinated with cross-functional teams using **Jira/Rally**, documented knowledge in **Confluence**, and accessed remote servers via **PuTTY**

### Mini case study: Cutting a production ETL query from 3 hours to 30 minutes
**Context:** A report missed SLA due to a query on a multi-billion row table running ~3 hours in Hive.  
**Action:** I profiled joins/scans, aligned with teammates using the same table and the department director to confirm constraints, optimized SQL, migrated execution to **Spark SQL**, and created intermediate part files to run the workload **distributed** with validation checks.  
**Impact:** Runtime dropped to **~30 minutes**, production stabilized, and I shared the generalized approach so other report owners could apply it to their pipelines.

### Migration initiative (regulatory compliance)
For two quarters, I supported migration of my team’s reports to **Indian servers** as part of India data localization compliance. This initiative contributed to restarting business operations in India after RBI restrictions related to local data storage regulations.

### Skills demonstrated
Python, SQL scripting, shell scripting, ETL design, Data ingestion pipeline, Big data processing, SQL/HQL optimization, Distributed Spark execution, Event engine tool, Putty tool, Jira, Confluence, Rally, Production support, Stakeholder collaboration, Documentation, Mentoring and Agile delivery.

---

## 2) Pattern Discovery and Pattern Validator Tool (Master’s Thesis, McGill)

**Role:** End-to-end owner (thesis research)  
**Dataset:** **42k DevOps pipeline files** (YAML)  
**Tools/Tech:** Python, DFS preprocessing, SBERT embeddings, K-Means clustering, OpenAI LLM prompting (RAG-style grounding), FP-Growth, Xtext, Acceleo, Java  
**Highlight:** Built a scalable validator system and shifted from hallucination-prone discovery to **100% valid** statistical mining

### Goal
Find meaningful patterns in a large DevOps dataset and validate true occurrences at scale in a way that is measurable and trustworthy.

### Approach A: LLM-based pattern discovery (with grounding)
- Preprocessed YAML using Python (DFS-style traversal) to normalize structure and remove noise/spacing  
- Generated **SBERT embeddings** and used **K-Means** to cluster similar pipelines  
- Prompted **GPT-4** using cluster-level grounding to propose candidate patterns

### Challenge: Validating real occurrence
Manual scripts were slow to write, and YAML’s hierarchical structure made regex/naive validation error-prone. Python-only validation risked incorrect matches due to indentation and structural nuances.

### Approach B: Automated pattern validation via Language Engineering
Because a DevOps metamodel existed (from previous research), I built a model-driven validation workflow:
- Designed a **domain-specific language (DSL)** in **Eclipse Xtext** to declare patterns over model-based datasets  
- Used **Acceleo model-to-text transformation** to automatically generate **Java validation scripts** from declared patterns  
- Executed validators on the metamodel-based editor to get **100% accurate** occurrence counts and the **filenames** where patterns occur  
- Generalized the tool so it can support **any model-based dataset** with an available supporting metamodel (and can evolve toward a self-adaptive language approach)

### Mini case study: Measuring hallucination and switching to statistical mining
**Context:** After building the validator, I evaluated LLM-discovered patterns and found high hallucination risk: only ~20% were valid by occurrence checks.  
**Action:** I implemented a statistical pattern mining pipeline using **FP-Growth** to mine frequent patterns directly from the dataset.  
**Result:** FP-Growth produced **100% valid** patterns across multiple occurrence thresholds, and the validator enabled objective comparison and repeatable evaluation.

### Skills demonstrated
Java, Python, Data pre-processing, embedding generation, BERT, SBERT, Clustering techniques, LLM prompt engineering and evaluation, statistical data mining (FP-Growth), model-driven engineering, language engineering, metamodel design, automated code generation, scalable validation.

---

## 3) Road Accident Detection Using Computer Vision (Bachelor’s Final Year Project)

**Role:** Team lead and contributor  
**Tools/Tech:** Python, TensorFlow, OpenCV, **SSD MobileNet**  
**Highlight:** Built a working real-time prototype and evaluated detection behavior under real video surveillance

### Overview
This was my bachelor’s final-year ML group project where we built a road accident detection prototype using live surveillance video.

### My role
As group leader, I coordinated tasks, kept the team on schedule, supported model testing/debugging, and helped integrate the end-to-end pipeline.

### Technical approach
- Gathered dataset of real time surveillance videos of highways with accidents and non accidents from Kaggle platform.
- Used an **SSD MobileNet** object detection model  
- Implemented the pipeline in **Python** using **TensorFlow** and **OpenCV**  
- Evaluated performance on real scenarios and improved reliability through iterative testing

### Outcome
We delivered a working end-to-end prototype that met project requirements and demonstrated real-time detection behavior with 80% vehicles being detected in the real time video surveillance of highway with the leftover 20% being not detected for being far from the camera on the highway but the same get detected once they pass by.

### Skills demonstrated
Computer vision implementation, ML evaluation, Tensorflow, OpenCV, Python, Dataset gathering, training, testing, integration, task delegation and team management.
