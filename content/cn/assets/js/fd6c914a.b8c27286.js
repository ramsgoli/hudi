"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[26183],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>h});var n=t(96540);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(t),p=i,h=u["".concat(l,".").concat(p)]||u[p]||g[p]||s;return t?n.createElement(h,r(r({ref:a},c),{},{components:t})):n.createElement(h,r({ref:a},c))}));function h(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=p;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var d=2;d<s;d++)r[d]=t[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},36637:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=t(58168),i=(t(96540),t(15680));const s={title:"Understanding Data Lake Change Data Capture",excerpt:"Explains the concept of CDC in data lakes",author:"Sagar Lakshmipathy",category:"blog",image:"/assets/images/blog/data-lake-cdc/hudi-cdc.jpg",tags:["Data Lake","Apache Hudi","Change Data Capture","CDC"]},r=void 0,o={permalink:"/cn/blog/2024/07/30/data-lake-cdc",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2024-07-30-data-lake-cdc.md",source:"@site/blog/2024-07-30-data-lake-cdc.md",title:"Understanding Data Lake Change Data Capture",description:"Introduction",date:"2024-07-30T00:00:00.000Z",formattedDate:"July 30, 2024",tags:[{label:"Data Lake",permalink:"/cn/blog/tags/data-lake"},{label:"Apache Hudi",permalink:"/cn/blog/tags/apache-hudi"},{label:"Change Data Capture",permalink:"/cn/blog/tags/change-data-capture"},{label:"CDC",permalink:"/cn/blog/tags/cdc"}],readingTime:8.485,truncated:!1,authors:[{name:"Sagar Lakshmipathy"}],nextItem:{title:"What is a Data Lakehouse & How does it Work?",permalink:"/cn/blog/2024/07/11/what-is-a-data-lakehouse"}},l={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",children:[{value:"Data Lake",id:"data-lake",children:[],level:3},{value:"Change Data Capture",id:"change-data-capture",children:[],level:3}],level:2},{value:"CDC architecture pattern",id:"cdc-architecture-pattern",children:[{value:"Common CDC Components",id:"common-cdc-components",children:[{value:"Change Detection",id:"change-detection",children:[{value:"Timestamp-based / Query-based:",id:"timestamp-based--query-based",children:[],level:5},{value:"Pros:",id:"pros",children:[],level:5},{value:"Cons:",id:"cons",children:[],level:5},{value:"Trigger-based:",id:"trigger-based",children:[],level:5},{value:"Pros:",id:"pros-1",children:[],level:5},{value:"Cons:",id:"cons-1",children:[],level:5},{value:"Log-based:",id:"log-based",children:[],level:5},{value:"Pros:",id:"pros-2",children:[],level:5},{value:"Cons:",id:"cons-2",children:[],level:5}],level:4},{value:"Data Extraction",id:"data-extraction",children:[],level:4},{value:"Data Transformation",id:"data-transformation",children:[],level:4},{value:"Data Loading",id:"data-loading",children:[],level:4}],level:3}],level:2},{value:"Why Combine CDC with Data Lakes?",id:"why-combine-cdc-with-data-lakes",children:[{value:"Flexibility",id:"flexibility",children:[],level:3},{value:"Cost-effective",id:"cost-effective",children:[],level:3},{value:"Streamlined ETL Processes",id:"streamlined-etl-processes",children:[],level:3}],level:2},{value:"Designing a CDC Architecture",id:"designing-a-cdc-architecture",children:[{value:"Solution:",id:"solution",children:[{value:"Revised architecture:",id:"revised-architecture",children:[],level:4}],level:3}],level:2},{value:"Implementation Blogs/Guides",id:"implementation-blogsguides",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],c={toc:d},u="wrapper";function g(e){let{components:a,...s}=e;return(0,i.yg)(u,(0,n.A)({},c,s,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"In data management, two concepts have garnered significant attention: data lakes and change data capture (CDC)."),(0,i.yg)("h3",{id:"data-lake"},"Data Lake"),(0,i.yg)("p",null,"Data lakes serve as vast repositories that store raw data in its native format until needed for analytics."),(0,i.yg)("h3",{id:"change-data-capture"},"Change Data Capture"),(0,i.yg)("p",null,"Change Data Capture (CDC) is a technique used to identify and capture data changes, ensuring that the data remains fresh and consistent across various systems."),(0,i.yg)("p",null,"Combining CDC with data lakes can significantly simplify data management by addressing several challenges commonly faced by ETL pipelines delivering data from transactional databases to analytical databases. These include maintaining data freshness, ensuring consistency, and improving efficiency in data handling. This article will explore the integration between data lakes and CDC, their benefits, implementation methods, key technologies and tools involved, best practices, and how to choose the right tools for your needs."),(0,i.yg)("h2",{id:"cdc-architecture-pattern"},"CDC architecture pattern"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"CDC Architecture",src:t(83444).A})),(0,i.yg)("h3",{id:"common-cdc-components"},"Common CDC Components"),(0,i.yg)("h4",{id:"change-detection"},"Change Detection"),(0,i.yg)("h5",{id:"timestamp-based--query-based"},"Timestamp-based / Query-based:"),(0,i.yg)("p",null,"This method relies on table schemas to include a column to indicate when it was previously modified, i.e. LAST_UPDATED etc. Whenever the source system is updated, the LAST_UPDATED column should be designed to get updated with the current timestamp. This column can then be queried by consumer applications to get the records, and process the records that have been previously updated."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Timestamp-based CDC",src:t(46886).A})),(0,i.yg)("h5",{id:"pros"},"Pros:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Its simple to implement and use")),(0,i.yg)("h5",{id:"cons"},"Cons:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"If source applications did not have the timestamp columns, the database design needs to be changed to include it"),(0,i.yg)("li",{parentName:"ul"},"Only supports soft deletes and not DELETE operations in the source table. This is because, once a DELETE operation is performed on the source database the record is removed and the consumer applications cannot track it automatically without the help of a custom log table or an audit trail."),(0,i.yg)("li",{parentName:"ul"},"As there is no metadata to track, schema evolution scenarios require custom implementations to track the source database schema changes and update the target database schema appropriately. This is complex and hard to implement.")),(0,i.yg)("h5",{id:"trigger-based"},"Trigger-based:"),(0,i.yg)("p",null,"In a trigger-based CDC design, database triggers are used to detect changes in the data and are used to update target tables accordingly. This method involves having trigger functions automatically executed to capture and store any changes from the source table in the target table; these target tables are commonly referred to as ",(0,i.yg)("strong",{parentName:"p"},"shadow tables")," or ",(0,i.yg)("strong",{parentName:"p"},"change tables"),". For example, in this method, stored procedures are triggered when there are specific events in the source database, such as INSERTs, UPDATEs, DELETEs."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Trigger-based CDC",src:t(31479).A})),(0,i.yg)("h5",{id:"pros-1"},"Pros:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Simple to implement"),(0,i.yg)("li",{parentName:"ul"},"Triggers are supported natively by most database engines")),(0,i.yg)("h5",{id:"cons-1"},"Cons:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Maintenance overhead - requires maintaining separate trigger for each operation in each table"),(0,i.yg)("li",{parentName:"ul"},"Performance overhead - in a highly concurrent database, addition of these triggers may significantly impact performance"),(0,i.yg)("li",{parentName:"ul"},"Trigger-based CDC does not inherently provide mechanisms for informing downstream applications about schema changes, complicating consumer-side adaptations.")),(0,i.yg)("h5",{id:"log-based"},"Log-based:"),(0,i.yg)("p",null,"Databases maintain transaction logs, a file that records all transactions and database modifications made by each transaction. By reading this log, CDC tools can identify what data has been changed, when it changed and the type of change. Because this method reads changes directly from the database transaction log, ensuring low-latency and minimal impact on database performance. "),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Log-based CDC",src:t(76589).A})),(0,i.yg)("h5",{id:"pros-2"},"Pros:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Supports all kinds of database transactions i.e. INSERTs, UPDATEs, DELETEs"),(0,i.yg)("li",{parentName:"ul"},"Minimal performance impact on the source/operational databases"),(0,i.yg)("li",{parentName:"ul"},"No schema changes required in source databases"),(0,i.yg)("li",{parentName:"ul"},"With a table format support, i.e. Apache Hudi, schema evolution ",(0,i.yg)("a",{parentName:"li",href:"https://hudi.apache.org/docs/schema_evolution/"},"can be supported"))),(0,i.yg)("h5",{id:"cons-2"},"Cons:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"No standardization in publishing the transactional logs between databases - this results in complex design and development overhead to implement support for different database vendors")),(0,i.yg)("h4",{id:"data-extraction"},"Data Extraction"),(0,i.yg)("p",null,"Once changes are detected, the CDC system extracts the relevant data. This includes the type of operation (insert, update, delete), the affected rows, and the before-and-after state of the data if applicable."),(0,i.yg)("h4",{id:"data-transformation"},"Data Transformation"),(0,i.yg)("p",null,"Extracted data often needs to be transformed before it can be used. This might include converting data formats, applying business rules, or enriching the data with additional context."),(0,i.yg)("h4",{id:"data-loading"},"Data Loading"),(0,i.yg)("p",null,"The transformed data is then loaded into the target system. This could be another database, a data warehouse, a data lake, or a real-time analytics platform. The loading process ensures that the target system reflects the latest state of the source database."),(0,i.yg)("h2",{id:"why-combine-cdc-with-data-lakes"},"Why Combine CDC with Data Lakes?"),(0,i.yg)("h3",{id:"flexibility"},"Flexibility"),(0,i.yg)("p",null,"In general, data lakes offer more flexibility at a lower cost, because of its tendency to support storing any type of data i.e. unstructured, semi-structured and structured data while data warehouses typically only support structured and in some cases semi-structured. This flexibility allows users to maintain a single source of truth and access the same dataset from different query engines. For example, the dataset stored in S3, can be queried using Redshift Spectrum and Amazon Athena."),(0,i.yg)("h3",{id:"cost-effective"},"Cost-effective"),(0,i.yg)("p",null,"Data lakes, when compared to data warehouses, are generally cheaper in terms of storage costs as the volume grows in time. This allows users to implement a medallion architecture which involves storing a huge volume of data in three different levels i.e. bronze, silver and gold layer tables. Over time, data lake users typically implement tiered storage which further reduces storage cost by moving infrequently accessed data to colder storage systems. In a traditional data warehouse implementation, storage costs will be higher to maintain different levels of data and will continue growing as the source database grows."),(0,i.yg)("h3",{id:"streamlined-etl-processes"},"Streamlined ETL Processes"),(0,i.yg)("p",null,"CDC simplifies the Extract, Transform, Load (ETL) processes by continuously capturing and applying changes to the data lake. This streamlining reduces the complexity and resource intensity of traditional ETL operations, often involving bulk data transfers and significant processing overhead. By only dealing with data changes, CDC makes the process more efficient and reduces the load on source systems."),(0,i.yg)("p",null,"For organizations using multiple ingestion pipelines, for example a combination of CDC pipelines, ERP data ingestion, IOT sensor data, having a common storage layer may simplify data processing while giving you the opportunity to build unified tables combining data from different sources."),(0,i.yg)("h2",{id:"designing-a-cdc-architecture"},"Designing a CDC Architecture"),(0,i.yg)("p",null,"For organizations with specific needs or unique data environments, developing custom CDC solutions is a common practice, especially with open source tools/frameworks. These solutions offer flexibility and can be tailored to meet the exact requirements of the business. However, developing custom CDC solutions requires significant expertise and resources, making it a viable option for organizations with complex data needs. Examples include Debezium/Airbyte combined Apache Kafka."),(0,i.yg)("h3",{id:"solution"},"Solution:"),(0,i.yg)("p",null,"Apache Hudi is an open-source framework designed to streamline incremental data processing and data pipeline development. It efficiently handles business requirements such as data lifecycle management and enhances data quality.\nStarting with Hudi 0.13.0, ",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/releases/release-0.13.0#change-data-capture"},"the CDC feature was introduced natively"),", allowing logging before and after images of the changed records, along with the associated write operation type."),(0,i.yg)("p",null,"This enables users to"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},'Perform record-level insert, update, and delete for privacy regulations and simplified pipelines \u2013 for privacy regulations like GDPR and CCPA, companies need to perform record-level updates and deletions to comply with individuals\' rights such as the "right to be forgotten" or consent changes. Without support for record-level updates/deletes this required custom solutions to track individual changes and rewrite large data sets for minor updates. With Apache Hudi, you can use familiar operations (insert, update, upsert, delete), and Hudi will track transactions and make granular changes in the data lake, simplifying your data pipelines.'),(0,i.yg)("li",{parentName:"ul"},"Simplified and efficient file management and near real-time data access \u2013 Streaming IoT and ingestion pipelines need to handle data insertion and update events without creating performance issues due to numerous small files. Hudi automatically tracks changes and merges files to maintain optimal sizes, eliminating the need for custom solutions to manage and rewrite small files."),(0,i.yg)("li",{parentName:"ul"},"Simplify CDC data pipeline development \u2013 meaning users can store data in the data lake using open storage formats, while integrations with Presto, Apache Hive, Apache Spark, and various data catalogs give you near real-time access to updated data using familiar tools.")),(0,i.yg)("h4",{id:"revised-architecture"},"Revised architecture:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"CDC Architecture with Apache Hudi",src:t(32435).A})),(0,i.yg)("p",null,"In this architecture, with the addition of the data processing layer, we have added two important components"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"A data catalog")," \u2013 acting as a metadata repository for all your data assets across various data sources. This component is updated by the writer i.e. Spark/Flink and is used by the readers i.e. Presto/Trino. Common examples include AWS Glue Catalog, Hive Metastore and Unity Catalog."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"A schema registry")," \u2013 acting centralized repository for managing and validating schemas. It decouples schemas from producers and consumers, which allows applications to serialize and deserialize messages. Schema registry is also important to ensure data quality. Common examples include, Confluent schema registry, Apicurio schema registry and Glue schema registry."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Apache Hudi")," \u2013 acting as a platform used in conjunction with Spark/Flink which refers to the schema registry and writes to the data lake and simultaneously catalogs the data to the data catalog.")),(0,i.yg)("p",null,"The tables written by Spark/Flink + Hudi can now be queried from popular query engines such as Presto, Trino, Amazon Redshift, and Spark SQL."),(0,i.yg)("h2",{id:"implementation-blogsguides"},"Implementation Blogs/Guides"),(0,i.yg)("p",null,"Over time, the Apache Hudi community has written great step-by-step blogs/guides to help implement Change Data Capture architectures. Some of these blogs can be referred to ",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/blog/tags/cdc"},"here"),"."),(0,i.yg)("h2",{id:"conclusion"},"Conclusion"),(0,i.yg)("p",null,"Combining data lakes with Change Data Capture (CDC) techniques offers a powerful solution for addressing the challenges associated with maintaining data freshness, consistency, and efficiency in ETL pipelines."),(0,i.yg)("p",null,"Several methods exist for implementing CDC, including timestamp-based, trigger-based, and log-based approaches, each with its own advantages and drawbacks. Log-based CDC, in particular, stands out for its minimal performance impact on source databases and support for various transactions, though it requires handling different database vendors' transaction log formats."),(0,i.yg)("p",null,"Using tools like Apache Hudi can significantly enhance the CDC process by streamlining incremental data processing and data pipeline development. Hudi provides efficient storage management, supports record-level operations for privacy regulations, and offers near real-time access to data. It also simplifies the management of streaming data and ingestion pipelines by automatically tracking changes and optimizing file sizes, thereby reducing the need for custom solutions."))}g.isMDXComponent=!0},83444:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/database-cdc-e9ee525e81a47e7744ae4f408c4e1d8f.png"},32435:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/hudi-cdc-263ca6e0f40b6bff91517bd02c798e2d.jpg"},76589:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/log-based-cdc-92eff429e89653b892b63f1af3485ac6.png"},31479:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/trigger-based-cdc-51c20f90024a12e97cbc728cfc7c0ed4.png"},46886:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/ts-based-cdc-30ce5c2462ea39b02dbf9a93467a360a.png"}}]);