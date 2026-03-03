# Projects

Below are selected projects that show my experience across data engineering, applied ML, automation, and validation at scale.

---

## 1) AML Reporting Pipelines at American Express

**Role:** Big Data Developer (Owner for 2 major reports)  
**Tech:** SQL, Hive, Spark, PySpark, HDFS, Unix shell, Python, GitHub, Jenkins  
**Highlight:** Reduced runtime from **~3 hours to ~30 minutes** and created a reusable approach for teams.

### Overview
At American Express (AML domain), I owned two reporting pipelines end to end, from requirements gathering to production deployment. These reports supported analyst workflows and required accuracy, reliability, and predictable runtime.

### Problem
One report started missing SLA due to a query against a multi-billion row table. The Hive execution time grew to around **3 hours**, which made production runs unstable and delayed downstream reporting.

### What I did
- Gathered requirements directly from AML analysts and aligned definitions across stakeholders  
- Built data workflows and reporting tables using **SQL/HQL** with **Hive and Spark**  
- Automated steps using **Unix shell + Python**, and supported CI/CD with **GitHub and Jenkins**  
- Profiled query bottlenecks (joins/scans), optimized SQL logic, and improved the execution plan  
- Migrated the heavy step from **Hive to Spark SQL** and partitioned execution using intermediate outputs  
- Documented the approach and helped other engineers apply it to their reports using the same table  

### Outcome
- Reduced the main query runtime from **~3 hours to ~30 minutes**  
- Stabilized production execution and met SLA consistently  
- Shared a reusable solution that supported other reports relying on the same table  

### Skills demonstrated
Data pipeline ownership, stakeholder communication, query performance tuning, distributed processing, production validation, and documentation.

---

## 2) Pattern Discovery and Pattern Validator Tool (Thesis)

**Role:** end-to-end owner (Master's Thesis research)  
**Tech:** Python, SBERT embeddings, clustering, LLM prompting, FP-Growth, Xtext, Acceleo, Java  
**Highlight:** Built a validator system and shifted from hallucination-prone discovery to **100% valid** statistical mining.

### Overview
My thesis work focuses on discovering and validating structural patterns in large DevOps datasets. The dataset includes **42k+ DevOps pipeline files**, and the goal is to find patterns that are real, measurable, and scalable to validate.

### Initial approach and challenge
I began by evaluating whether an LLM could discover meaningful patterns when the dataset was provided in a structured form. While outputs looked convincing, I needed a reliable method to validate whether those patterns truly occurred in the dataset.

### What I built

#### Pattern discovery pipeline
- Preprocessed pipeline files using Python to create consistent structured representations  
- Generated embeddings using SBERT and applied clustering to group similar files  
- Prompted an LLM on cluster-level data to extract candidate patterns  

#### Pattern validation tool
- Built a domain-specific language to declare patterns over model-based datasets  
- Used model-to-text transformation to generate Java validator scripts automatically  
- Ran validators to compute true occurrences and matched filenames at scale  

#### Statistical mining alternative
After validation showed high hallucination risk in LLM-only discovery, I implemented a statistical mining pipeline using **FP-Growth**, which produces patterns directly from the dataset with measurable support.

### Outcome
- LLM findings were measurable and testable via the validator, revealing hallucination risk  
- FP-Growth produced **100% valid** patterns when checked against the dataset  
- The validator tool generalizes to other model-based datasets once a metamodel is available  

### Skills demonstrated
LLM evaluation, embeddings and clustering, statistical data mining, scalable validation, DSL design, automated code generation, and reproducible experimentation.

---

## 3) Road Accident Detection Using Computer Vision

**Role:**  Team lead and contributor (final-year bachelor’s ML project)  
**Tech:** Python, TensorFlow, OpenCV, SSD MobileNet  
**Highlight:** Built a working prototype and evaluated detection behavior under real video conditions.

### Overview
This was my final-year undergraduate ML group project where we built a real-time road accident detection prototype using surveillance video.

### My role
I was the group leader. I coordinated task ownership, kept the team on schedule, supported model testing and debugging, and helped integrate the full pipeline.

### Technical approach
- Used an **SSD MobileNet** object detection model  
- Built the pipeline in Python using **TensorFlow and OpenCV**  
- Evaluated detection behavior using real video scenarios and improved reliability through testing  

### Outcome
We delivered a working end-to-end prototype that met project requirements and demonstrated real-time detection behavior.

### Skills demonstrated
Applied ML implementation, evaluation, integration, debugging, and team leadership.
