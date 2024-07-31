"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[80408],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>p});var n=t(96540);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(t),g=i,p=u["".concat(l,".").concat(g)]||u[g]||h[g]||s;return t?n.createElement(p,r(r({ref:a},d),{},{components:t})):n.createElement(p,r({ref:a},d))}));function p(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=g;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<s;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},94957:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=t(58168),i=(t(96540),t(15680));const s={title:"What is a Data Lakehouse & How does it Work?",excerpt:"Explains the concept of the lakehouse architecture",author:"Dipankar Mazumdar",category:"blog",image:"/assets/images/blog/dlh_1200.png",tags:["data lakehouse","Apache Hudi","Apache Iceberg","Delta Lake","Open Architecture"]},r=void 0,o={permalink:"/cn/blog/2024/07/11/what-is-a-data-lakehouse",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2024-07-11-what-is-a-data-lakehouse.md",source:"@site/blog/2024-07-11-what-is-a-data-lakehouse.md",title:"What is a Data Lakehouse & How does it Work?",description:"A data lakehouse is a hybrid data architecture that combines the best attributes of data warehouses and data lakes to address their respective limitations. This innovative approach to data management brings the transactional capabilities of data warehouses to cloud-based data lakes, offering scalability at lower costs.",date:"2024-07-11T00:00:00.000Z",formattedDate:"July 11, 2024",tags:[{label:"data lakehouse",permalink:"/cn/blog/tags/data-lakehouse"},{label:"Apache Hudi",permalink:"/cn/blog/tags/apache-hudi"},{label:"Apache Iceberg",permalink:"/cn/blog/tags/apache-iceberg"},{label:"Delta Lake",permalink:"/cn/blog/tags/delta-lake"},{label:"Open Architecture",permalink:"/cn/blog/tags/open-architecture"}],readingTime:15.885,truncated:!1,authors:[{name:"Dipankar Mazumdar"}],prevItem:{title:"Understanding Data Lake Change Data Capture",permalink:"/cn/blog/2024/07/30/data-lake-cdc"},nextItem:{title:"How to use Apache Hudi with Databricks",permalink:"/cn/blog/2024/06/18/how-to-use-apache-hudi-with-databricks"}},l={authorsImageUrls:[void 0]},c=[{value:"The Evolution of Data Storage Solutions: How did we go from Warehouses to Lakes to Lakehouses?",id:"the-evolution-of-data-storage-solutions-how-did-we-go-from-warehouses-to-lakes-to-lakehouses",children:[],level:2},{value:"Introducing: Data Lakehouses",id:"introducing-data-lakehouses",children:[],level:2},{value:"Advantages of Data Lakehouses",id:"advantages-of-data-lakehouses",children:[],level:2},{value:"Implementing a Data Lakehouse",id:"implementing-a-data-lakehouse",children:[{value:"Data Ingestion",id:"data-ingestion",children:[],level:3},{value:"Metadata &amp; Transactional Layer",id:"metadata--transactional-layer",children:[],level:3},{value:"Processing Layer",id:"processing-layer",children:[],level:3},{value:"Catalog Layer",id:"catalog-layer",children:[],level:3}],level:2},{value:"Use Cases",id:"use-cases",children:[{value:"Unified Batch &amp; Streaming",id:"unified-batch--streaming",children:[],level:3},{value:"Diverse Analytical Workloads",id:"diverse-analytical-workloads",children:[],level:3},{value:"Cost-Effective Data Management",id:"cost-effective-data-management",children:[],level:3}],level:2},{value:"Real World Examples",id:"real-world-examples",children:[],level:2},{value:"Key Data Lakehouse Technologies",id:"key-data-lakehouse-technologies",children:[{value:"Open Source Solutions",id:"open-source-solutions",children:[{value:"Apache Hudi",id:"apache-hudi",children:[],level:4},{value:"Apache Iceberg",id:"apache-iceberg",children:[],level:4},{value:"Delta Lake",id:"delta-lake",children:[],level:4}],level:3},{value:"Vendor Lakehouse Platforms",id:"vendor-lakehouse-platforms",children:[{value:"Onehouse",id:"onehouse",children:[],level:4},{value:"Databricks",id:"databricks",children:[],level:4},{value:"Snowflake",id:"snowflake",children:[],level:4}],level:3}],level:2},{value:"The Future of Data Lakehouses",id:"the-future-of-data-lakehouses",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],d={toc:c},u="wrapper";function h(e){let{components:a,...s}=e;return(0,i.yg)(u,(0,n.A)({},d,s,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"A data lakehouse is a hybrid data architecture that combines the best attributes of data warehouses and data lakes to address their respective limitations. This innovative approach to data management brings the transactional capabilities of data warehouses to cloud-based data lakes, offering scalability at lower costs. "),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"/assets/images/blog/dlh_new.png",src:t(33539).A})),(0,i.yg)("p",{align:"center"},"Figure: Data Lakehouse Architecture"),(0,i.yg)("p",null,"The lakehouse architecture supports the management of various data types, such as structured, semi-structured, and unstructured, and caters to a wide range of use cases, including business intelligence, machine learning, and real-time streaming. This flexibility enables businesses to move away from the traditional two-tier architecture\u2014using warehouses for relational workloads and data lakes for machine learning and advanced analytics. As a result, organizations can reduce operational costs and streamline their data strategies by working on a single data store."),(0,i.yg)("h2",{id:"the-evolution-of-data-storage-solutions-how-did-we-go-from-warehouses-to-lakes-to-lakehouses"},"The Evolution of Data Storage Solutions: How did we go from Warehouses to Lakes to Lakehouses?"),(0,i.yg)("p",null,"Historically, organizations have been investing in building centralized and scalable data architectures to enable more data access and to support different types of analytical workloads. As demand for these workloads has grown, data architectures have evolved to address the complex needs of modern data processing and storage."),(0,i.yg)("p",null,"Data warehouses were among the first to serve as centralized repositories for structured workloads, allowing organizations to derive historical insights from disparate data sources. However, they also introduce challenges, including proprietary storage formats that can result in lock-in issues, and limited support for analytical workloads, particularly with unstructured data like machine learning."),(0,i.yg)("p",null,"Data lakes emerged as the next generation of analytics architectures, enabling organizations to scale storage and compute independently, thereby optimizing resources and enhancing cost efficiency. They support storing all types of data\u2014structured, semi-structured, and unstructured\u2014in low-cost storage systems using open file formats like ",(0,i.yg)("a",{parentName:"p",href:"https://parquet.apache.org"},"Apache Parquet")," and ",(0,i.yg)("a",{parentName:"p",href:"https://orc.apache.org"},"Apache ORC"),". Although data lakes offer flexibility with their schema-on-read approach, they lack transactional capabilities (ACID characteristics) and often face challenges related to data quality and governance."),(0,i.yg)("p",null,"The challenges presented by these two data management approaches led to the development of a new architecture called data lakehouse. A lakehouse brings the transactional capabilities of database management systems (DBMS) to scalable data lakes, enabling running various types of workloads on open storage formats."),(0,i.yg)("h2",{id:"introducing-data-lakehouses"},"Introducing: Data Lakehouses"),(0,i.yg)("p",null,"A data lakehouse combines the reliability and performance of data warehouses with the scalability and cost-effectiveness of data lakes. This combined approach enables features such as time-travel, indexing, schema evolution, and performance optimization capabilities on openly accessible formats."),(0,i.yg)("p",null,"Specifically, a lakehouse architecture is characterized by the following attributes."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Open Data Architecture"),": A lakehouse stores data in open storage formats. This allows various analytical workloads to be run by different engines (from multiple vendors) on the same data, preventing lock-in to proprietary formats.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Support for Varied Data Types & Workloads"),": Data lakehouses accommodate a diverse range of data types\u2014including structured, semi-structured, and unstructured\u2014and are therefore equipped to handle various analytical workloads, such as business intelligence, machine learning, and real-time analytics. ")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Transactional support"),": Data lakehouses enhance reliability and consistency by providing ACID guarantees in transactions, such as INSERT or UPDATE, akin to those in an RDBMS-OLAP system. This ensures safe, concurrent reads and writes.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Less data copies"),": A data lakehouse minimizes data duplication since the compute engine can directly access data from open storage formats.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Schema management"),": Data lakehouses ensure that a specific schema is adhered to when writing new data into the storage. They also facilitate schema evolution over time without the need to rewrite the entire table, thus reducing storage and operational costs.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Data Quality and Governance"),": Lakehouses ensure data integrity and incorporate robust governance and auditing mechanisms. These features uphold high data quality standards, facilitate regulatory compliance (such as GDPR), and enable secure data management practices."))),(0,i.yg)("p",null,"A data lakehouse architecture consists of six technical components that are modular, offering the flexibility to select and combine the best technologies based on specific requirements."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Lake Storage"),": The storage is where files from various operational systems land after ingestion through ETL/ELT processes. Cloud object stores such as Amazon S3, Azure Blob, and Google Cloud Storage support any type of data and can scale to virtually unlimited volumes. Their cost-effectiveness is a significant advantage over traditional data warehouse storage costs.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"File Format: File Format"),": In a lakehouse architecture, file formats like Apache Parquet or ORC store the actual raw data on object storage. These open formats enable multiple engines to consume the data for various workloads. Being typically column-oriented, they offer significant advantages in data reading.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Table Format"),": A key component of a lakehouse architecture is the table format, which is open in nature and acts as a metadata layer above file formats like Apache Parquet. This layer abstracts the complexity of the physical data structure by defining a schema on top of immutable data files. It allows different engines to concurrently read and write on the same dataset, supporting ACID-based transactions. Table formats like ",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org"},"Apache Hudi"),", ",(0,i.yg)("a",{parentName:"p",href:"https://iceberg.apache.org"},"Apache Iceberg"),", and ",(0,i.yg)("a",{parentName:"p",href:"https://delta.io"},"Delta Lake")," bring essential features such as schema evolution, partitioning, and time travel.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Storage Engine"),": The storage engine in a lakehouse orchestrates essential data management tasks including clustering, compaction, cleaning, and indexing to streamline data organization in cloud object storages for improved query performance. Both open source and proprietary lakehouse platforms are equipped with native storage engines that enhance these capabilities, optimizing the storage layout effectively.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Catalog"),": Often referred to as a metastore, the catalog is a crucial component of the lakehouse architecture that facilitates efficient search and discovery by tracking all tables and their metadata. It records table names, schemas (column names and types), and references to each table's specific metadata (table format).")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Compute Engine"),": The compute engine in a lakehouse processes data and ensures efficient read and write performance. It interacts with data using read and write APIs provided by table formats. Compute engines are tailored to specific workloads, with options such as ",(0,i.yg)("a",{parentName:"p",href:"https://trino.io"},"Trino")," and ",(0,i.yg)("a",{parentName:"p",href:"https://prestodb.io"},"Presto")," for low-latency ad hoc SQL, ",(0,i.yg)("a",{parentName:"p",href:"https://flink.apache.org"},"Apache Flink")," for streaming, and ",(0,i.yg)("a",{parentName:"p",href:"https://spark.apache.org"},"Apache Spark")," for machine learning tasks."))),(0,i.yg)("h2",{id:"advantages-of-data-lakehouses"},"Advantages of Data Lakehouses"),(0,i.yg)("p",null,"A lakehouse architecture, characterized by its open data storage formats and cost-effective options, offers numerous advantages. Here are some key benefits:"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Attributes"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Open Data Foundation"),(0,i.yg)("td",{parentName:"tr",align:null},"Data in a lakehouse is stored in open file formats like Apache Parquet and table formats such as Apache Hudi, Iceberg, or Delta Lake. This allows various engines to concurrently work on the same data, enhancing accessibility and compatibility.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Unified Data Platform"),(0,i.yg)("td",{parentName:"tr",align:null},"Lakehouses combine the functionalities of data warehouses and lakes into a single platform, supporting both types of workloads efficiently. This integration simplifies data management and accelerates analytics processes.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Centralized Data Repository for Diverse Data Types"),(0,i.yg)("td",{parentName:"tr",align:null},"A lakehouse architecture can store and manage structured, semi-structured, and unstructured data, serving different types of analytical workloads.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Cost Efficiency"),(0,i.yg)("td",{parentName:"tr",align:null},"Using low-cost cloud storage options and reducing the need for managing multiple systems significantly lowers overall engineering and ETL costs.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Performance and Scalability"),(0,i.yg)("td",{parentName:"tr",align:null},"Lakehouses allow independent scaling of storage and compute resources, which can be adjusted based on demand, ensuring high concurrency and cost-effective scalability.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Enhanced Query Performance"),(0,i.yg)("td",{parentName:"tr",align:null},"Lakehouse\u2019s storage engine component optimizes data layout in formats like Parquet and ORC to offer high performance comparable to traditional data warehouses, on large datasets.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Data Governance and Management"),(0,i.yg)("td",{parentName:"tr",align:null},"Lakehouses centralize data storage and management, streamlining the deployment of governance policies and security measures. This consolidation makes it easier to monitor, control, and secure data.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Improved Data Quality and Consistency"),(0,i.yg)("td",{parentName:"tr",align:null},"Lakehouses enforce strict schema adherence and provide transactional consistency, which minimizes write job failures and ensures data reliability.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Support for various Compute Engines"),(0,i.yg)("td",{parentName:"tr",align:null},"A lakehouse architecture supports SQL-based engines, ML tools, and streaming engines, making it versatile for handling diverse analytical demands on a single data store.")))),(0,i.yg)("h2",{id:"implementing-a-data-lakehouse"},"Implementing a Data Lakehouse"),(0,i.yg)("p",null,"The modular and open design of data lakehouse architecture allows for selection of best-of-breed engines and tools according to specific requirements. Therefore, the implementation of a lakehouse can vary based on the use case. This section outlines common considerations for implementing a lakehouse architecture. Given the variability in complexity (workloads, security, etc.) and tool stack, large-scale implementations may require tailored approaches."),(0,i.yg)("h3",{id:"data-ingestion"},"Data Ingestion"),(0,i.yg)("p",null,"The first phase in a lakehouse architecture involves extracting and loading data into a cloud-based low cost data lake such as ",(0,i.yg)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon S3"),', where it lands in its raw format (Parquet files). This approach utilizes the "schema-on-read" method, which means there\'s no need to process data immediately upon arrival. Once the data is in place, transformation logic can be applied to shift towards a "schema-on-write" setup, which organizes the data for specific analytical workloads such as ad hoc SQL queries or machine learning.'),(0,i.yg)("h3",{id:"metadata--transactional-layer"},"Metadata & Transactional Layer"),(0,i.yg)("p",null,"To enable transactional capabilities, Apache Hudi, Apache Iceberg or Delta Lake can be chosen as the table format. They provide a robust metadata layer with a table-like schema atop the physical data files in the object store. Together with the storage engine, they bring in data optimization strategies to maintain fast and efficient query performance. The metadata layer also facilitates capabilities such as time-travel querying, version rollbacks, and schema evolution akin to a traditional data warehouse."),(0,i.yg)("h3",{id:"processing-layer"},"Processing Layer"),(0,i.yg)("p",null,"The compute engine is a crucial component in a lakehouse architecture that processes the data files managed by the table format. Depending on the specific workload, SQL-based distributed query engines like Presto or Trino can be used for ad-hoc interactive analytics, or Apache Spark for distributed ETL tasks. Lakehouse table formats provide several optimizations such as indexes, and statistics, along with data layout optimizations including clustering, compaction, and Z-ordering. These enable the compute engines to achieve performance comparable to traditional data warehouses."),(0,i.yg)("h3",{id:"catalog-layer"},"Catalog Layer"),(0,i.yg)("p",null,"The catalog layer in a lakehouse architecture is responsible for tracking all tables and maintaining essential metadata. It ensures that data is easily accessible to query engines, supporting efficient data management, accessibility, and governance. Options for catalog implementation include Unity Catalog, AWS Glue, Hive Metastore, and file system-based ones. This layer plays a key role in upholding data quality and governance standards by establishing policies for data validation, security measures, and compliance protocols."),(0,i.yg)("h2",{id:"use-cases"},"Use Cases"),(0,i.yg)("p",null,"A Lakehouse architecture is used for a multitude of use cases. Here are some prominent examples."),(0,i.yg)("h3",{id:"unified-batch--streaming"},"Unified Batch & Streaming"),(0,i.yg)("p",null,"Traditional analytics architectures often separate real-time and batch storage, using specialized data stores for real-time insights and data lakes for delayed batch processing. Lakehouse platforms bridge this divide by introducing streaming capabilities to data lakes, allowing data ingestion within minutes and the creation of faster incremental pipelines. This integration reduces data freshness issues and eliminates the need for significant upfront infrastructure investments, making it a scalable and cost-effective solution for complex analytics."),(0,i.yg)("h3",{id:"diverse-analytical-workloads"},"Diverse Analytical Workloads"),(0,i.yg)("p",null,"Lakehouse architecture supports various data types\u2014structured, semi-structured, and unstructured\u2014enabling users to run both BI and ML workloads on the same dataset without the need for costly data duplication or movement. This unified approach allows data scientists and analysts to easily access and manipulate data for training ML models, deploying AI algorithms, and conducting in-depth BI analysis. By eliminating the need to create and maintain separate BI extracts and cubes, lakehouses reduce both storage and compute costs while maintaining a simple, self-service model for end-users. As a result, organizations can streamline their data operations and enhance analytical flexibility, making it easier to derive insights across different domains."),(0,i.yg)("h3",{id:"cost-effective-data-management"},"Cost-Effective Data Management"),(0,i.yg)("p",null,"Lakehouses leverage the low-cost storage of cloud-based data lakes while providing sophisticated data management and querying capabilities similar to data warehouses. This dual advantage makes it an economical choice for startups and enterprises alike that need to manage costs without compromising on analytics capabilities. Additionally, the open, unified architecture of a lakehouse eliminates non-monetary costs, such as running and maintaining ETL pipelines and creating multiple data copies, further streamlining operations."),(0,i.yg)("h2",{id:"real-world-examples"},"Real World Examples"),(0,i.yg)("p",null,"ByteDance, Notion and Halodoc are some of the examples of how lakehouse architecture is being adopted in the industry. ",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/blog/2021/09/01/building-eb-level-data-lake-using-hudi-at-bytedance/"},"ByteDance")," has built an exabyte-level data lakehouse using Apache Hudi to enhance their recommendation systems. The implementation of Hudi's Merge-on-read (MOR) tables, indexing, and Multi-Version Concurrency Control (MVCC) features allow ByteDance to provide real-time machine learning capabilities, providing instant and relevant recommendations."),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.notion.so/blog/building-and-scaling-notions-data-lake"},"Notion")," scaled its data infrastructure by building an in-house lakehouse to handle rapid data growth and meet product demands, especially for Notion AI. The architecture uses S3 for storage, Kafka and Debezium for data ingestion, and Apache Hudi for efficient data management. This setup resulted in significant cost savings, faster data ingestion, and enhanced capabilities for analytics and product development."),(0,i.yg)("p",null,"Similarly, ",(0,i.yg)("a",{parentName:"p",href:"https://blogs.halodoc.io/lake-house-architecture-halodoc-data-platform-2-0/"},"Halodoc's")," adoption of a lakehouse architecture allows them to enhance healthcare services by enabling real-time processing and analytics. This architecture helps Halodoc tackle challenges associated with managing vast healthcare data volumes, thus improving patient care through faster, more accurate decision-making and supporting both batch and stream processing crucial for timely health interventions."),(0,i.yg)("h2",{id:"key-data-lakehouse-technologies"},"Key Data Lakehouse Technologies"),(0,i.yg)("h3",{id:"open-source-solutions"},"Open Source Solutions"),(0,i.yg)("h4",{id:"apache-hudi"},"Apache Hudi"),(0,i.yg)("p",null,"Apache Hudi is an open source ",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/hudi_stack"},"transactional data lakehouse platform")," built around a database kernel. It provides table-level abstractions over open file formats like Apache Parquet and ORC thereby delivering core warehouse and database functionalities directly in the data lake and supporting transactional capabilities such as updates and deletes. "),(0,i.yg)("p",null,"Hudi also incorporates critical table services tightly integrated with its database kernel. These services can be run automatically, managing aspects like table bookkeeping, metadata, and storage layouts across both ingested and derived data. These capabilities, combined with specific platform services (ingestion, catalog sync tool, admin CLI, etc.) in Hudi, elevates its role from merely a table format to a comprehensive and robust data lakehouse platform. Apache Hudi has a broad support for various data sources and query engines, such as Apache Spark, Apache Flink, AWS Athena, Presto, Trino and StarRocks."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Hudi Stack",src:t(78985).A})),(0,i.yg)("p",{align:"center"},"Figure: Apache Hudi Architectural stack"),(0,i.yg)("p",null,"Below are some of the key features of Hudi\u2019s lakehouse platform."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Mutability Support"),": Hudi enables quick updates and deletions through an efficient, pluggable ",(0,i.yg)("a",{parentName:"li",href:"https://hudi.apache.org/docs/indexing/"},"indexing")," mechanism supporting workloads such as streaming, out-of-order data, and data deduplication."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Incremental Processing"),": Hudi optimizes for efficiency by enabling ",(0,i.yg)("a",{parentName:"li",href:"https://hudi.apache.org/blog/2020/08/18/hudi-incremental-processing-on-data-lakes/"},"incremental processing")," of new data. This feature allows you to replace traditional batch processing pipelines with more dynamic, incremental streaming, enhancing data ingestion and reducing processing times for analytical workloads."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"ACID Transactions"),": Hudi brings ACID transactional guarantees to data lakes, offering consistent and atomic writes along with different ",(0,i.yg)("a",{parentName:"li",href:"https://hudi.apache.org/docs/concurrency_control"},"concurrency control")," techniques essential for managing longer-running transactions."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Time Travel"),": Hudi includes capabilities for ",(0,i.yg)("a",{parentName:"li",href:"https://hudi.apache.org/docs/sql_queries#time-travel-query"},"querying")," historical data, allowing users to roll back to previous versions of tables to debug or audit changes. "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Comprehensive Table Management"),": Hudi brings automated table services that continuously orchestrate ",(0,i.yg)("a",{parentName:"li",href:"https://hudi.apache.org/docs/clustering"},"clustering"),", ",(0,i.yg)("a",{parentName:"li",href:"https://hudi.apache.org/docs/compaction"},"compaction"),", ",(0,i.yg)("a",{parentName:"li",href:"https://hudi.apache.org/docs/hoodie_cleaner"},"cleaning"),", and indexing, ensuring high performance for analytical queries."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Query Performance Optimization"),": Hudi introduces a novel ",(0,i.yg)("a",{parentName:"li",href:"https://www.onehouse.ai/blog/introducing-multi-modal-index-for-the-lakehouse-in-apache-hudi"},"multi-modal indexing")," subsystem that speeds up write transactions and enhances query performance, especially in large or wide tables."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Schema Evolution and Enforcement"),": With Hudi, you can ",(0,i.yg)("a",{parentName:"li",href:"https://hudi.apache.org/docs/schema_evolution"},"adapt the schema")," of your tables as your data evolves, enhancing pipeline resilience by quickly identifying and preventing potential data integrity issues.")),(0,i.yg)("h4",{id:"apache-iceberg"},"Apache Iceberg"),(0,i.yg)("p",null,"Apache Iceberg is a table format designed for managing large-scale analytical datasets in cloud data lakes, facilitating a lakehouse architecture. Technically, Iceberg serves as a table format specification, providing APIs and libraries that enable compute engines to interact with tables according to this specification. It introduces features essential for data lake workloads, including schema evolution, hidden partitioning, ACID-compliant transactions, and time travel capabilities. These features ensure robust data management, akin to that found in traditional data warehouses."),(0,i.yg)("h4",{id:"delta-lake"},"Delta Lake"),(0,i.yg)("p",null,"Delta Lake is another open source table format that enables building a lakehouse architecture on top of cloud data lakes. By offering an ACID-compliant layer that operates over cloud object stores, Delta Lake addresses the typical performance and consistency issues associated with data lakes. It enables features like schema enforcement and evolution, time travel, efficient metadata handling and DML operations, which are crucial for handling large-scale workloads on data lakes effectively."),(0,i.yg)("h3",{id:"vendor-lakehouse-platforms"},"Vendor Lakehouse Platforms"),(0,i.yg)("h4",{id:"onehouse"},"Onehouse"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.onehouse.ai/product"},"Onehouse")," offers a universal data platform that streamlines data ingestion and transformation into a lakehouse architecture. It eliminates lakehouse table format friction by working seamlessly with Apache Hudi, Apache Iceberg and Delta Lake tables (thanks to ",(0,i.yg)("a",{parentName:"p",href:"https://xtable.apache.org"},"Apache XTable"),"). The platform supports continuous data ingestion from diverse sources, including events streams such as Kafka, databases and cloud storage, enabling real-time data updates while ensuring data integrity through automated table optimizations and rigorous data quality measures. Onehouse provides a fully managed ingestion pipeline with serverless autoscaling and cost-efficient infrastructure. With its flexible querying capabilities across multiple engines and formats, Onehouse empowers organizations to efficiently manage and utilize their data."),(0,i.yg)("h4",{id:"databricks"},"Databricks"),(0,i.yg)("p",null,"The ",(0,i.yg)("a",{parentName:"p",href:"https://www.databricks.com/product/data-intelligence-platform"},"Databricks")," Lakehouse Platform unifies data engineering, machine learning, and analytics on a single platform. It combines the reliability, governance, and performance of data warehouses with the scalability, flexibility, and low cost of data lakes. By offering Delta Lake as its foundational storage layer and ",(0,i.yg)("a",{parentName:"p",href:"https://docs.delta.io/latest/delta-uniform.html"},"UniFormat")," for interoperability between Apache Iceberg and Apache Hudi, the platform supports ACID transactions, scalable metadata handling, and unifies batch and streaming data processing. "),(0,i.yg)("h4",{id:"snowflake"},"Snowflake"),(0,i.yg)("p",null,"The ",(0,i.yg)("a",{parentName:"p",href:"https://www.snowflake.com/en/data-cloud/platform/"},"Snowflake")," Data Cloud provides a unified, fully managed platform for seamless data management and advanced analytics capabilities. It offers near-infinite scalability, robust security, and native support for diverse data types and SQL workloads. Snowflake currently supports Apache Iceberg as the open table format to facilitate a lakehouse architecture. This integration allows users to leverage Iceberg's rich table metadata and Parquet file storage within Snowflake's ecosystem, enabling seamless data handling, multi-table transactions, dynamic data masking, and row-level security, all while using customer-supplied cloud storage."),(0,i.yg)("h2",{id:"the-future-of-data-lakehouses"},"The Future of Data Lakehouses"),(0,i.yg)("p",null,"The future of data lakehouses is shaped by their truly open data architecture, which meets the ongoing need for flexible, scalable, and cost-effective data management solutions. They offer a unified platform capable of efficiently handling both streaming and batch workloads, supporting a wide array of analytical workloads including BI and ML. With the rapid advancement of artificial intelligence, including generative AI, there is an increasing demand for robust platforms that provide the foundation for building and deploying powerful models. Lakehouse architecture rises to this challenge, offering a solid base for the evolving demands of modern data analytics."),(0,i.yg)("h2",{id:"conclusion"},"Conclusion"),(0,i.yg)("p",null,"The data lakehouse architecture utilizes an open data foundation to blend the best features of data lakes and warehouses, establishing a versatile platform that effectively handles a range of analytical workloads. This architecture marries cost-effective data management with robust performance, offering a cohesive system for both batch and streaming data processes. By enabling organizations to work on a single data store, this approach not only simplifies management but also equips businesses to swiftly integrate new technologies and adapt to evolving market demands. Additionally, by supporting diverse data types and analytical workloads, the lakehouse framework eliminates the need for a two-tier architecture, which helps save costs and enhances the efficiency of data teams."))}h.isMDXComponent=!0},33539:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/dlh_new-ae34f6d692de93292db9eb4e19690670.png"},78985:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/hstck_new-a0f2451aad8bf4e2003f1efb98c5e179.png"}}]);