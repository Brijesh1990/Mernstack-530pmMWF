# what is api ? 
  1. API stands for Application Programming Interface.
  2.It is a set of rules and protocols that allows different software applications to communicate with each other.
  3. An API defines how requests and responses should be structured, enabling developers to access specific features or data from another application or service without needing to understand its internal workings.
  4.  APIs are commonly used to integrate third-party services, access databases, or enable communication between different software components.


  **advantage of api**
    1. **Interoperability**: APIs allow different software systems to communicate and work together, regardless of their underlying technologies or platforms.

    2. **Reusability**: APIs enable developers to reuse existing code and functionality, saving time and effort in building new applications or features.

    3. **Scalability**: APIs can handle a large number of requests and can be designed to scale as needed, making them suitable for applications with high traffic.

    4. **Security**: APIs can be designed with security measures such as authentication and authorization, ensuring that only authorized users or applications can access certain data or functionality.

    5. **Flexibility**: APIs provide flexibility in how applications can interact with each other, allowing for customization and integration of various services and features.

    **disadvantage of api**

    1. **Dependency**: Relying on third-party APIs can create dependencies, and if the API provider changes or discontinues their service, it can disrupt your application.
    
    2. **Security Risks**: If not properly secured, APIs can be vulnerable to attacks such as data breaches or unauthorized access.
    
    3. **Performance Issues**: If the API is not well-designed or if there are too many requests, it can lead to performance issues and slow down your application.

    4. **Versioning Challenges**: As APIs evolve, maintaining backward compatibility can be challenging, and changes to the API can break existing applications that rely on it.

    5. **Cost**: Some APIs may have associated costs, especially if they are provided by third-party services, which can add up over time if your application relies heavily on them.


# what is json ?
  1. JSON stands for JavaScript Object Notation.
  
  2. It is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.

  3. JSON is often used to transmit data between a server and a web application as an alternative to XML(xtensible Markup Language).
  
  4. It is based on a subset of the JavaScript programming language, but it is language-independent, meaning it can be used with many programming languages.    

    **advantage of json**
        1. **Lightweight**: JSON is a lightweight data format, which means it can be transmitted quickly over the network and is easy to parse.
    
        2. **Human-readable**: JSON is easy for humans to read and write, making it a popular choice for data interchange.
    
        3. **Language-independent**: JSON can be used with many programming languages, making it versatile for various applications.
    
        4. **Structured data**: JSON allows for the representation of complex data structures, including nested objects and arrays.
    
        5. **Widely supported**: JSON is widely supported by many programming languages and frameworks, making it a common choice for data exchange in web applications.

**Note :**

 1. react call api using fetch or axios and get data in json format and use that data in react component.

     1. fetch is a built-in JavaScript function that allows you to make HTTP requests to a server and retrieve data in various formats, including JSON.

     2. axios is a popular third-party library for making HTTP requests in JavaScript, and it also supports retrieving data in JSON format. It provides a more convenient and feature-rich API compared to the built-in fetch function.

          **how to install axios**

          1. You can install axios using npm (Node Package Manager) by running the following command in your terminal:
          
             ```
             npm install axios
             ```

          **axios methods**

          1. `axios.get(url)`: Used to make a GET request to the specified URL and retrieve data.

          2. `axios.post(url, data)`: Used to make a POST request to the specified URL with the provided data.

          3. `axios.put(url, data)`: Used to make a PUT request to the specified URL with the provided data, typically for updating existing resources.

          4. `axios.delete(url)`: Used to make a DELETE request to the specified URL, typically for deleting resources.

          5. `axios.patch(url, data)`: Used to make a PATCH request to the specified URL with the provided data, typically for partially updating existing resources.

          6. `axios.head(url)`: Used to make a HEAD request to the specified URL, which retrieves only the headers of the response without the response body.

          7. `axios.options(url)`: Used to make an OPTIONS request to the specified URL, which retrieves the supported HTTP methods and other options for the resource.            


# what is json server in react js ?

    1. JSON Server is a simple and lightweight tool that allows you to create a fake REST API using a JSON file as the data source.
    
    2. It is commonly used in React development for testing and prototyping purposes, as it provides a quick and easy way to simulate API endpoints without needing to set up a backend server.
    
    3. With JSON Server, you can define your data in a JSON file, and it will automatically generate RESTful routes for CRUD (Create, Read, Update, Delete) operations based on the structure of your data.
    
    4. This allows you to easily test your React components that rely on API calls without needing to worry about setting up a real backend server or database.


    **how to install json server**

    1. You can install JSON Server globally using npm (Node Package Manager) by running the following command in your terminal:
    
       ```
       npm install -g json-server
       or
       npm install --save-dev json-server
       or
       npm install json-server
       
       ```