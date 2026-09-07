# Projects 🚀

Most of my favorite projects started with a problem that was a little unclear.

Limited data. Slow pipelines. Unreliable AI outputs. Messy real-world requirements.

These are some of the systems I've built while figuring those problems out.

---

# 🏗️ ML-Powered Retrofit Cost Estimation Platform

**ReConstruct Initiative, McGill University | 2026**

**Role:** Lead Data Architect (R&D)  
**Stack:** AWS, S3, Glue, Athena, Lake Formation, PostgreSQL, Python, scikit-learn, Django, Docker, GitHub CI/CD

### The problem

Building owners need reliable estimates before deciding whether an energy retrofit project is financially feasible.

The challenge was that we started with **limited historical retrofit data**, while new project data would continue to arrive over time.

That meant the platform needed to work with a small dataset today without becoming a dead end once the dataset grew.

### What I built

I designed the data and ML workflow end to end:

**Raw project data → S3 → ETL → curated features → ML model → Django application → cost estimate**

The platform included:

- AWS-based data storage and processing
- Automated ingestion when new project files arrive
- Data validation and missing-value handling
- Feature engineering for building and retrofit characteristics
- ML training and evaluation
- Prediction uncertainty
- Automated retraining support
- Dockerized deployment through Django
- GitHub-based CI/CD

### Choosing the model

I evaluated **Bayesian Ridge Regression** as a baseline and compared it with **Gaussian Process Regression**.

GPR performed roughly **10% better on the available data** and had another important advantage: it could return uncertainty around its predictions.

That mattered because retrofit projects rarely have one perfectly predictable cost.

Instead of only saying:

> Estimated cost = $X

the system could provide a reasonable range around the estimate.

### Improving the predictions

A major part of the work wasn't changing algorithms — it was improving how the data represented the real problem.

I refined feature logic, handled missing and abnormal values, and experimented with which inputs actually helped the estimator.

The resulting changes improved prediction accuracy from approximately:

### **60% → 80%**

### Why I liked this project

It forced me to think beyond ML notebooks.

I had to balance:

**model accuracy + limited data + uncertainty + cloud cost + maintainability + future scale + actual product usage**

That combination made it one of the most interesting systems I've worked on.

---

# 🔬 Pattern Discovery + Automated Pattern Validation

**Master's Research, McGill University | 2024–2026**

**Role:** Graduate Research Assistant / Researcher  
**Stack:** Python, SBERT, K-Means, LLMs, FP-Growth, Java, Eclipse Xtext, Acceleo  
**Dataset:** 42k+ DevOps YAML pipeline files

📄 **Published at IEEE RE 2026 through the MoDRE workshop**

### The question

My research started with a deceptively simple idea:

> Can we automatically discover useful structural patterns inside thousands of DevOps configuration files?

The harder question became:

> How do we know those patterns are actually real?

---

## Approach 1 — LLM-assisted discovery

I first built a pipeline to group structurally similar YAML files before asking an LLM to identify recurring patterns.

The workflow looked roughly like:

**YAML → Python preprocessing → SBERT embeddings → K-Means clusters → structured LLM prompts**

Clustering gave the model more focused context instead of asking it to reason over thousands of unrelated files at once.

But discovery alone wasn't enough.

---

## The interesting failure

When I validated the generated patterns against the real dataset, many didn't occur as expected.

The LLM could produce patterns that looked completely reasonable while still being unsupported by the underlying data.

That turned the project from:

**"How can an LLM discover patterns?"**

into:

**"How can we make pattern discovery measurable and verifiable?"**

---

## Building the validator

Manually writing validation scripts for every candidate pattern would not scale.

So I designed a **Pattern Definition Language** using Eclipse Xtext.

A pattern can be declared in the DSL, and an **Acceleo model-to-text transformation automatically generates Java validation code**.

The generated validators can then run across thousands of model instances and report:

- Whether the pattern exists
- How frequently it occurs
- Which files contain it
- Whether ordering or structural constraints are satisfied

This made evaluation repeatable rather than subjective.

---

## Approach 2 — Statistical pattern mining

I then implemented **FP-Growth** to discover frequent patterns directly from the dataset.

Unlike the earlier LLM-generated candidates, the mined patterns were directly grounded in observed occurrences.

The validator allowed both approaches to be evaluated using the same measurement process.

### What came out of the project

The final research combined:

🧠 **LLM-based discovery**  
📊 **Statistical pattern mining**  
🛠️ **Domain-specific language engineering**  
⚙️ **Automatic Java code generation**  
✅ **Large-scale pattern validation**

The work became my Master's thesis and was published at **IEEE RE 2026 – MoDRE**.

### Why I liked this project

The most useful result wasn't simply proving that one technique was better.

It was learning that an AI-generated result becomes much more valuable when you can build a system that independently checks it.

That idea continues to shape how I think about **LLM evaluation, grounding, and trustworthy AI systems**.

---

# ⚡ Anti-Money Laundering Data Platforms & Reporting

**Tata Consultancy Services → American Express | 2021–2024**

**Role:** Big Data Developer  
**Stack:** Spark, PySpark, Hive, HQL, SQL, Hadoop, HDFS, Python, Unix/Shell, Jenkins, GitHub

For three years, I worked on production data systems supporting the **Anti-Money Laundering domain at American Express**.

The datasets covered areas including:

**customers • merchants • fraud • risk • investigations**

### What I worked on

I built and maintained:

- Batch data ingestion workflows
- AML reporting pipelines
- Curated reporting tables
- Data-quality validation logic
- Spark/Hive transformations
- Automated deployment workflows
- Production monitoring and troubleshooting

I owned **two major AML reporting workflows** from requirements gathering through production deployment and worked closely with AML analysts to translate business requirements into data logic.

---

## ⚡ Mini case study: 3 hours → 30 minutes

One critical transformation operated over a **multi-billion-row table**.

Runtime had grown to roughly **3 hours**, creating problems with the production SLA.

I investigated where the workload was spending its time, reviewed joins and scans, optimized the SQL, migrated processing from **Hive to Spark SQL**, and split parts of the workload for distributed execution.

### Result

**Before:** ~3 hours  
**After:** ~30 minutes

Beyond fixing the immediate problem, I documented and shared the approach so similar workloads could benefit from the same optimization ideas.

---

## 🇮🇳 Regulatory data migration

I also supported the migration of AML workloads to infrastructure located in India as part of data-localization requirements.

This required coordinating report dependencies, validating migrated datasets, and making sure production outputs remained consistent after the move.

### What this role taught me

This was where I learned what production data engineering really looks like:

- Performance matters
- Data quality matters even more
- Requirements are rarely as simple as they first sound
- Distributed systems behave differently at scale
- A pipeline isn't finished when the code runs — it's finished when people can depend on it

---

# 🚗 Road Accident Detection with Computer Vision

**Bachelor's Final-Year Project | University of Mumbai | 2020–2021**

**Role:** Team Lead  
**Stack:** Python, TensorFlow, OpenCV, SSD MobileNet

Before working with LLMs and large-scale data systems, I started with computer vision.

Our goal was to explore whether surveillance footage could be used to automatically identify road accidents and eventually help trigger alerts to nearby hospitals.

### What we built

We created a prototype using:

**Highway video → OpenCV → SSD MobileNet → vehicle detection → accident analysis**

I helped with:

- Dataset collection
- Model training and testing
- TensorFlow/OpenCV implementation
- Model evaluation
- Pipeline integration
- Debugging
- Team coordination

The prototype successfully demonstrated real-time vehicle detection on highway surveillance footage, with performance varying based on factors such as vehicle distance from the camera.

### Research outcome

The work resulted in a research publication in the **International Journal of Mobile Computing Devices**.

[Read the publication](https://computers.journalspub.info/index.php?journal=JMCD&page=article&op=view&path%5B%5D=693)

### Why it mattered to me

This was my first real ML project and the project that made me interested in taking models beyond theory and seeing how they behave on imperfect real-world data.

---

# 🧩 A theme across my work

These projects look quite different:

**AML → DevOps → buildings → computer vision**

But the engineering questions are surprisingly similar.

How do we know the data is reliable?  
How do we validate the output?  
What happens when the dataset grows?  
How do we make the system maintainable?  
And most importantly — does the thing we're building actually help someone?

Those are the kinds of problems I enjoy working on.
