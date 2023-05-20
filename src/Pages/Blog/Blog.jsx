import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle('Blog')
  return (
    <div className="my-10">
      <h2 className="text-5xl font-bold text-center mb-6">Blog</h2>
      <div className="grid lg:grid-cols-2 gap-8 mx-32">
        <div
          tabIndex={0}
          className="collapse collapse-plus group w-2/3 rounded-2xl"
        >
          <div className="collapse-title bg-blue-500 text-primary-content group-focus:bg-teal-500 group-focus:text-secondary-content">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </div>
          <div className="collapse-content bg-primary text-primary-content group-focus:bg-teal-500 group-focus:text-secondary-content">
            <div>
              <p>
                <span className="font-bold">Access Token: </span>
                An access token in the context of JWT is a digitally signed
                token that contains claims (pieces of information) about the
                authenticated user or client. It is typically a string
                consisting of three parts: a header, a payload, and a signature,
                separated by dots (e.g., xxxxx.yyyyy.zzzzz). The header contains
                information about the token's type and signing algorithm. The
                payload contains the claims, which can include user
                identification, scope of access, expiration time, and any
                additional custom data. The signature is created using the
                header, payload, and a secret key known only to the server,
                ensuring the token's integrity.
              </p>
              <p>
                <span className="font-bold">Refresh Token: </span>
                In the JWT context, a refresh token is an additional token used
                to obtain a new access token once the current access token
                expires. The refresh token is typically a separate JWT with its
                own expiration time. It is securely generated and stored by the
                server and contains the necessary information to request a new
                access token. When the access token expires, the client sends
                the refresh token to the server to obtain a new access token
                without requiring the user's credentials.
              </p>
            </div>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus group w-2/3 rounded-2xl"
        >
          <div className="collapse-title bg-blue-500 text-primary-content group-focus:bg-teal-500 group-focus:text-secondary-content">
            Compare SQL and NoSQL databases?
          </div>
          <div className="collapse-content bg-primary text-primary-content group-focus:bg-teal-500 group-focus:text-secondary-content">
            <div>
              <p>
                <span className="font-bold">SQL: </span>
                SQL databases use a relational data model, where data is
                organized into tables with predefined schemas. Data is stored in
                rows and columns, and relationships between tables are
                established using foreign keys. <br />
                SQL databases generally scale vertically by adding more
                resources to a single server (e.g., CPU, RAM, storage). Scaling
                horizontally, i.e., distributing the data across multiple
                servers, can be more complex.
                <br />
                SQL databases enforce a rigid schema, meaning that the structure
                of the data must be defined in advance. Changes to the schema
                often require modifying the entire database.
              </p>
              <p>
                <span className="font-bold">NoSQL: </span>
                NoSQL databases use various data models, such as key-value,
                document, columnar, and graph. They provide flexibility in
                storing unstructured or semi-structured data, allowing for
                dynamic schema changes. <br />
                NoSQL databases are designed for horizontal scalability. They
                can distribute data across multiple servers, allowing for
                seamless expansion as data and workload increase.
                <br />
                NoSQL databases are designed for horizontal scalability. They
                can distribute data across multiple servers, allowing for
                seamless expansion as data and workload increase.
              </p>
            </div>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus group w-2/3 rounded-2xl"
        >
          <div className="collapse-title bg-blue-500 text-primary-content group-focus:bg-teal-500 group-focus:text-secondary-content">
            What is express js? What is Nest JS?
          </div>
          <div className="collapse-content bg-primary text-primary-content group-focus:bg-teal-500 group-focus:text-secondary-content">
            <div>
              <p>
                <span className="font-bold">Express.js: </span>
                Express.js is a minimalistic and flexible web application
                framework for Node.js. It provides a simple and unopinionated
                way to build web applications and APIs. Express.js focuses on
                being lightweight and allows developers to have fine-grained
                control over the application's structure and behavior. It
                provides a set of features for handling HTTP requests, routing,
                middleware, and rendering views. Express.js is known for its
                simplicity, speed, and extensive ecosystem of middleware and
                plugins. It is widely used and has a large community of
                developers.
              </p>
              <p>
                <span className="font-bold">Nest.js: </span>
                Nest.js is a progressive, opinionated, and full-featured web
                application framework for Node.js. It is built with TypeScript
                and follows the architectural patterns of Angular, making it
                familiar to developers coming from an Angular background.
                Nest.js promotes the use of decorators, dependency injection,
                and modular organization to build scalable and maintainable
                applications. It provides a powerful module system, routing,
                dependency injection container, middleware, and supports various
                templating engines and databases. Nest.js emphasizes the use of
                TypeScript's static typing and object-oriented programming
                concepts to enhance developer productivity and application
                robustness.
              </p>
            </div>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus group w-2/3 rounded-2xl"
        >
          <div className="collapse-title bg-blue-500 text-primary-content group-focus:bg-teal-500 group-focus:text-secondary-content">
          What is MongoDB aggregate and how does it work?
          </div>
          <div className="collapse-content bg-primary text-primary-content group-focus:bg-teal-500 group-focus:text-secondary-content">
            <div>
              <p>
                <span className="font-bold">MongoDb aggregate: </span>
                In MongoDB, the aggregate framework is a powerful tool for performing advanced data processing operations on the documents stored in a collection. The aggregate operation allows you to perform various transformations, calculations, and aggregations on the data, similar to the SQL GROUP BY clause or data processing pipelines.
                <br />
                <p>The pipeline parameter is an array of stages that define the sequence of operations to be performed on the data. Each stage in the pipeline performs a specific operation on the documents, and the output of one stage becomes the input for the next stage.</p>
                Some Commonly used aggregates are: 
                <ul>
                  <li>$match: Filters the documents based on specified criteria, similar to the find operation. It uses the MongoDB query language to define the filtering conditions.</li>
                  <li>$group: Groups the documents by a specified key and performs aggregations within each group. It allows you to calculate various aggregate values like counts, sums, averages, and more.</li>
                  <li>$project: Reshapes the documents by including or excluding specific fields, creating computed fields, or renaming fields. It is used to define the structure of the output documents.</li>
                </ul>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
